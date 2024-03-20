# angular-interview-questions

- Q: limit service to a particular component, child component.

If you provide it to a component it will only be available to that component and its children:

@Component({
  selector: "component",
  providers: [Service]
})

A way to limit scope to a module or component:

@Injectable({ providedIn: HelloComponent })
export class Service {}

Provide the service as a class in a component, it must create one instance for that component, and you can remove the provider from the module.

@Component({
  selector: "component",
  providers: [{ provide: Service, useClass: Service }]
})


- Q: When we add the provide metadata to a component, that means that the service injected will be:
Options:
1. A singleton throughout the application
2. An instance just for the component but not for its children
3. The same instance for the component and all its childs
4. The same instance for the component and its childs that do not provide the service

 
- Q: Which command reduces memory leaks and ensures that you receive the data only once?
array(1) take(1) collect(1) list(1)


Q: you have an Angular application that restricts access to the user area with a password. This area's home component is protected using the CanActivate route guard, but it has child routes. How do you protect these child routes?
1. The the home components route guard will protect the child routes.
2. Use the CanDeactivate route guard.
3. Use the CanActivateChild route guard.
4. Use the CanActivate route guard.


Q: How can you simulate a server and return mock data with the HTTP requests in Angular?
1. By using json Server
2. By using hdd-web-api
3. By using sdd-web-api
4. By using cache-memory-web-api

- Rxjs operators types- Utility, Transformation, Multicasting, Filtering, Error Handling, Creation, Conditional, Combination
* scrollpositionrestoration
+ debouncing & throttling
- guards vs resolvers
- unit testing
- Monorepo vs monolithic
- Signals
- Circular dependencies
- Standalone components
- animations
- NgOptimizedImage
- services - useclass, usevalue, useexisting, usefactory
- Observables, Subjects, BehaviorSubject, ReplaySubject
- markForCheck() and detectChanges()
- Directive Composition API - hostDirectives
- zone and ngzone
- UI component library
- Figma to HTML/CSS
- Flex vs grid 
- CSS vs SCSS
- navigation
- custom directives
- changedetection
- bubbling and capturing
- performance
- secure the code
- ngrx
- state management - input output emitters, services
- Migration
- copying objects in JS
- how to handle immutability 
- control styles- viewencapsulation
