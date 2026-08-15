# Senior Engineer & Architect-Level Angular Interview Questions & Topics

A curated repository of advanced, architectural, performance-focused, and modern Angular interview topics and scenario-based questions designed for Senior Engineers, Tech Leads, and Software Architects.

---

## 📑 Table of Contents
1. [Core Architecture & Modern Reactivity (v16 - v19+)](#1-core-architecture--modern-reactivity-v16---v19)
2. [Dependency Injection & Modular Design](#2-dependency-injection--modular-design)
3. [State Management & Data Flow Architecture](#3-state-management--data-flow-architecture)
4. [Performance Optimization, SSR & Web Vitals](#4-performance-optimization-ssr--web-vitals)
5. [Enterprise Scalability, Monorepos & Micro-Frontends](#5-enterprise-scalability-monorepos--micro-frontends)
6. [Security & Networking Best Practices](#6-security--networking-best-practices)
7. [RxJS Mastery & Asynchronous Orchestration](#7-rxjs-mastery--asynchronous-orchestration)
8. [Architectural System Design & Scenario-Based Questions](#8-architectural-system-design--scenario-based-questions)

---

## 1. Core Architecture & Modern Reactivity (v16 - v19+)

### Topics to Master
- **Angular Signals:** `signal()`, `computed()`, `effect()`, signal inputs (`input()`, `input.required()`), output API (`output()`), model inputs (`model()`), signal queries (`viewChild()`, `contentChildren()`).
- **Signal-RxJS Interoperability:** `toSignal()`, `toObservable()`, and clean boundary management between push-streams (RxJS) and synchronous reactive values (Signals).
- **Zoneless Angular:** How `provideZonelessChangeDetection()` works under the hood, elimination of `zone.js`, signal-driven dirty checking and microtask scheduling.
- **Control Flow Syntax:** Built-in `@if`, `@for` (with mandatory `track` expression), `@switch`, and deferrable views (`@defer (on viewport | on interaction | on idle | when condition)` with `@loading`, `@placeholder`, and `@error`).
- **Standalone Architecture:** Completely module-less architecture, lazy component loading, functional guards and interceptors, environment providers.

### High-Impact Interview Questions

#### Q1: Explain how Angular's Signals differ fundamentally from RxJS Observables. When should an architect mandate Signals vs RxJS?
> **Key Discussion Points:**
> - **Reactivity Model:** Signals are synchronous, glitch-free, pull-based reactive primitives representing state over time. RxJS Observables are push-based streams handling asynchronous events, cancellations, and timelines.
> - **Change Detection:** Signals notify Angular's reactivity graph exactly which node/template is dirty without needing monkey-patched DOM events via `zone.js`.
> - **Architecture Rule of Thumb:** Use Signals for synchronous UI state, component-level derivations, and template binding. Use RxJS for asynchronous streams, event orchestration, complex cancellation, debouncing, polling, and WebSocket streams.

#### Q2: How does `@defer` work under the hood, and how does it revolutionize bundle splitting and Core Web Vitals (LCP/FID/INP)?
> **Key Discussion Points:**
> - `@defer` generates separate chunk bundles for deferred components, directives, pipes, and CSS.
> - Triggers (`on viewport`, `on idle`, `on interaction`, `when condition`) load the chunk dynamically only when the trigger condition is met.
> - `@prefetch` preloads the javascript chunk prior to rendering, optimizing user perceived latency.
> - Massive reduction in initial JavaScript execution payload, directly optimizing Interaction to Next Paint (INP) and Total Blocking Time (TBT).

#### Q3: What are the nuances and caveats of `effect()` in Angular Signals, and why is setting signals inside `effect()` generally discouraged?
> **Key Discussion Points:**
> - `effect()` is scheduled asynchronously and runs during change detection cycles as a microtask.
> - Writing to signals inside `effect()` can cause infinite loops or cyclic dependencies unless `allowSignalWrites: true` is explicitly configured (anti-pattern in most cases).
> - Prefer `computed()` for derived state. Reserve `effect()` for external side effects: logging, analytics, canvas/DOM sync, or localStorage syncing.

---

## 2. Dependency Injection & Modular Design

### Topics to Master
- **DI Hierarchies:** `NullInjector` ➔ `PlatformInjector` ➔ `Root EnvironmentInjector` ➔ `Child EnvironmentInjectors` (Routes) ➔ `ElementInjector` (Components/Directives).
- **Resolution Modifiers:** `@Self()`, `@SkipSelf()`, `@Optional()`, `@Host()`.
- **Injection Context & `inject()`:** Usage in constructor vs factory functions, `runInInjectionContext()`.
- **Custom Providers:** `useClass`, `useValue`, `useFactory` (with `deps`), `useExisting`.
- **Directive Composition API:** `hostDirectives` for composition over inheritance.

### High-Impact Interview Questions

#### Q4: What is the architectural difference between `EnvironmentInjector` and `ElementInjector` in standalone Angular applications?
> **Key Discussion Points:**
> - `EnvironmentInjector` is associated with application initialization, routing trees, and lazy-loaded route boundaries (`provideEnvironmentInitializer`, `providers: []` inside Route definitions).
> - `ElementInjector` is bound to the DOM tree hierarchy created per component/directive instance (`@Component({ providers: [...] })` and `viewProviders`).
> - Services provided in `EnvironmentInjector` do not have access to view-level tokens, while `ElementInjector` enforces lifecycle-scoped instances tied to DOM nodes.

#### Q5: How does the Directive Composition API (`hostDirectives`) improve codebase maintainability over multi-class inheritance?
> **Key Discussion Points:**
> - Class inheritance in TypeScript is single-parent and tightly couples logic to the component class.
> - `hostDirectives` allows composing multiple reusable behaviors (e.g., `TooltipDirective`, `CdkFocusTrap`, `CustomHighlightDirective`) onto a single component or directive with input/output aliasing without subclassing.

---

## 3. State Management & Data Flow Architecture

### Topics to Master
- **State Paradigms:** Global Store (NgRx Store), Local Component Store (NgRx ComponentStore), Signal-based State (NgRx SignalStore), and Lightweight Service-with-Signals.
- **State Normalization:** Entity adapters, relational data management in memory, avoiding redundant/denormalized state.
- **Side Effect Handling:** Declarative side effects, cancellation policies, retry logic, concurrency modes in NgRx Effects.

### High-Impact Interview Questions

#### Q6: When would you recommend NgRx SignalStore vs NgRx Global Store vs a simple Service with Signals for an enterprise application?
> **Key Discussion Points:**
> - **Service with Signals:** Best for small-to-medium apps or self-contained feature modules where boilerplate should be minimal.
> - **NgRx SignalStore:** Ideal for modular, type-safe, extensible local and feature state with plugins (`withEntities`, `withMethods`, `withHooks`, `withComputed`). Offers high composability and zero boilerplate.
> - **NgRx Global Store (Redux):** Best for massive enterprise applications requiring strict auditability (Redux DevTools action replay), centralized effect management across decoupled domains, and cross-team architectural constraints.

---

## 4. Performance Optimization, SSR & Web Vitals

### Topics to Master
- **Change Detection Strategies:** `ChangeDetectionStrategy.OnPush`, `ChangeDetectorRef` methods (`markForCheck()`, `detectChanges()`, `detach()`, `reattach()`).
- **Memory Profiling:** Identifying detached DOM nodes, subscription leaks, uncleaned event listeners, memory profiling via Chrome DevTools.
- **SSR & SSG:** Angular Universal / `@angular/ssr`, non-destructive hydration, event replay, partial hydration.
- **Asset & Image Optimization:** `NgOptimizedImage`, priority preloading, responsive `srcset`, layout shift mitigation (CLS).

### High-Impact Interview Questions

#### Q7: How does Non-Destructive Hydration in Angular work compared to traditional server-side rendering (SSR), and what are hydration mismatch bugs?
> **Key Discussion Points:**
> - Traditional SSR wiped out server-rendered DOM nodes and recreated them from scratch on client boot, causing layout flickers and lost input focus.
> - Non-destructive hydration preserves the existing DOM nodes, traversing the DOM and attaching event listeners and reactivity graphs directly to existing elements.
> - Hydration mismatches occur when server HTML differs from initial client render (e.g., using `window.innerWidth`, direct DOM manipulation, or un-reproducible random IDs).

#### Q8: A critical dashboard with 5,000 real-time updates/sec is lagging. Walk through your diagnostic and optimization blueprint.
> **Key Discussion Points:**
> 1. Run Chrome Performance profiler to inspect Change Detection frequency and Long Tasks.
> 2. Switch all components to `OnPush` or migrate to Zoneless / Signal-based architecture.
> 3. Throttle/buffer incoming stream updates using RxJS (`auditTime`, `sampleTime`, `bufferTime`).
> 4. Run data processing outside Angular Zone via `NgZone.runOutsideAngular()` (if Zone-based) or update pure Signal nodes.
> 5. Implement Virtual Scrolling (`@angular/cdk/scrolling` with `CdkVirtualScrollViewport`) so only visible elements are rendered.

---

## 5. Enterprise Scalability, Monorepos & Micro-Frontends

### Topics to Master
- **Monorepo Architecture:** Nx workspaces, Turborepo, dependency constraints, computation caching (`nx cache`), affected builds.
- **Micro-Frontends:** Module Federation (Webpack / Rsbuild), Native Federation with ES Modules, Web Components / Angular Elements.
- **Design Systems & Headless UI:** Creating shared enterprise component libraries, CDK primitives, tokens for theming.

### High-Impact Interview Questions

#### Q9: Contrast Module Federation vs Angular Elements (Web Components) for Micro-Frontends. What are the trade-offs regarding version alignment and performance?
> **Key Discussion Points:**
> - **Module Federation / Native Federation:** Shares runtime instances of `@angular/core`, `rxjs`, etc., across micro-apps, resulting in fast load times and single shared DI singletons if configured correctly. Requires synchronized Angular major versions or carefully managed semantic version ranges.
> - **Angular Elements / Web Components:** Complete framework encapsulation; each micro-app can run different Angular versions or different frameworks (React/Vue). Trade-off: increased bundle sizes due to duplicated runtimes and complex cross-boundary communication.

---

## 6. Security & Networking Best Practices

### Topics to Master
- **Security:** Cross-Site Scripting (XSS), Content Security Policy (CSP), `DomSanitizer`, `SecurityContext`, bypassing sanitization (`bypassSecurityTrustHtml` risks).
- **Authentication:** OAuth2/OIDC, PKCE flow, silent refresh token rotation, handling 401/403 with functional interceptors and request queues.
- **Functional Interceptors:** Chaining, request cloning, metadata passing via `HttpContext` and `HttpContextToken`.

### High-Impact Interview Questions

#### Q10: How do you architect a race-condition-free, queue-based Refresh Token Interceptor in modern Angular?
> **Key Discussion Points:**
> - Use a functional interceptor (`HttpInterceptorFn`).
> - When a `401 Unauthorized` occurs, check if a token refresh is already in flight using a shared observable or lock state.
> - If refresh is in progress, queue subsequent failing requests using `filter()`, `take(1)`, and `switchMap()` until the new token is broadcast via a `BehaviorSubject` or Signal.
> - If refresh fails, execute secure logout, clear local tokens, and redirect to the auth identity provider.

---

## 7. RxJS Mastery & Asynchronous Orchestration

### Topics to Master
- **Flattening Operators:** `switchMap` (cancel previous), `concatMap` (sequential queue), `mergeMap` (concurrent parallel), `exhaustMap` (ignore while busy).
- **Multicasting:** `share()`, `shareReplay({ bufferSize: 1, refCount: true })`.
- **Teardown & Cleanups:** `takeUntilDestroyed()`, `DestroyRef`, avoiding manual subscription leaks.

### High-Impact Interview Questions

#### Q11: Explain the edge case with `shareReplay(1)` vs `shareReplay({ bufferSize: 1, refCount: true })` regarding memory leaks.
> **Key Discussion Points:**
> - `shareReplay(1)` retains the inner subscription open even when all subscribers unsubscribe (reference count reaches 0), which can cause memory leaks and prevent garbage collection of long-running services/components.
> - Using `refCount: true` ensures that when subscriber count hits 0, the source subscription is cleanly unsubscribed and re-subscribed only when a new subscriber arrives.

---

## 8. Architectural System Design & Scenario-Based Questions

### Scenario 1: Real-Time High-Frequency Financial Trading Platform
- **Requirements:** Real-time WebSocket ticks, sub-second chart rendering, order placement with optimistic UI updates.
- **Architectural Solution:**
  - WebSocket worker running in Web Worker (`new Worker()`) to keep the main UI thread unblocked.
  - Signal-based store updating only specific row nodes using fine-grained reactivity.
  - Virtualized table using Angular CDK.
  - Zoneless change detection to avoid triggering Zone overhead on thousands of incoming packets per minute.

### Scenario 2: Large Enterprise Multi-Brand White-Label Application
- **Requirements:** Single codebase supporting 10 different brands with distinct CSS themes, customized route workflows, and brand-specific feature toggles.
- **Architectural Solution:**
  - Design Tokens provided via Angular DI tokens (`BRAND_CONFIG`, `THEME_TOKEN`).
  - SCSS/CSS Custom Properties dynamically loaded at root level.
  - Dynamic route guards and resolvers loading brand-specific feature bundles using dynamic `import()`.
  - Nx monorepo with core shared logic libraries and brand-specific application wrappers.

---

## 💡 Quick Tips for Candidate Evaluation
- **Junior vs Senior vs Architect:**
  - *Junior:* Knows syntax, lifecycle hooks, and simple `@Input()`/`@Output()`.
  - *Senior:* Master of RxJS, Change Detection internals, performance tuning, and unit/e2e testing.
  - *Architect:* Evaluates trade-offs (Signals vs RxJS, NgRx vs SignalStore, Monorepo vs Multi-repo), designs scalable multi-team patterns, enforces enterprise security, and plans graceful legacy migrations.
