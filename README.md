# angular-interview-questions

- Q: limit service to a particular component, child component.

If you provide it to a component it will only be available to that component and its children:
```
@Component({
  selector: "component",
  providers: [Service]
})
```
A way to limit scope to a module or component:
```
@Injectable({ providedIn: HelloComponent })
export class Service {}
```
Provide the service as a class in a component, it must create one instance for that component, and you can remove the provider from the module.
```
@Component({
  selector: "component",
  providers: [{ provide: Service, useClass: Service }]
})
```

- Q: When we add the provide metadata to a component, that means that the service injected will be:
Options:
1. A singleton throughout the application
2. An instance just for the component but not for its children
3. The same instance for the component and all its childs
4. The same instance for the component and its childs that do not provide the service

 
- Q: Which command reduces memory leaks and ensures that you receive the data only once?
array(1) take(1) collect(1) list(1)

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
- how to handle tokens, refresh tokens - for authentication 
- solid principle

- Choose the correct output for the following code snippet.
```
<ng-template [ngIf]=true>
<div>
True
</div>
</ng-template>
```
A True
B Wrong Syntax for nglf
C Nothing will be printed
D Compilation Error

- Consider the below given code snippet and choose the correct route that
will be loaded if we hit "artist/1234"
```
const routes: Routes = [
];
{path: ''
redirectTo: 'home', pathMatch: 'full'},
{path: 'find', redirectTo: 'search'},
{path: 'home', component: HomeComponent},
{
path: movie/:movieId',
component: MovieComponent,
children: [
{path: '', redirectTo: 'tracks'}, (1)
{path: 'tracks', component: MovieListComponent}, (2)
{path: 'albums', component: MovieAlbumListComponent}, (3)
]
},
{ path: '**' , component: HomeComponent}
```
A Inside Movie Component MovieTracklist Component will be loaded
B Only the MovieTracklist will be loaded
C Inside Home Component MovieTracklist Component will be loaded
D Only Home component will be loaded

```


Q061. What is the difference between Angular vs React? What are the advantages of Angular over React?
Q062. Why do we need the compilation process in Angular? Which compiler is used by Angular?
Q063. What is JIT in Angular? How can you set JIT to be used in Angular compilation?
Q064. What is an AOT in Angular? What are the different phases of the AOT process?
Q065. What is the difference between AOT vs JIT in Angular? What are the advantages of AOT over JIT?
Q066. How can you use cookies in Angular? How do you set, get, and clear cookies in Angular?
Q067. What are the different module loading strategies in Angular applications? 
Q068. How can you use cookies in Angular? How do you set, get, and clear cookies in Angular?
Q069. What is Lazy Loading in Angular? How do you implement Lazy Loading in Angular?
Q070. What is the difference between Eager Loading vs. Lazy Loading in Angular? 
Q071. What is Preloading or Eager Lazy Loading in Angular? What is the difference between Pre Loading vs Lazy Loading?
Q049. What is the difference between ng build vs. ng serve command in Angular?
Q050. What is the difference between ng build vs. ng build --prod command in Angular CLI?
Q051. What is the purpose of the dist folder in Angular? When the dist folder is created?
Q052. What are the key building blocks of any Angular application?  
Q053. What is the metadata.json file? What is the purpose of the metadata.json file?
Q054. What is MVVM architecture? What is the difference between MVC vs. MVVM pattern?
Q055. What is Angular Material? How can you use the material in the Agular app?
Q056. What type of DOM does Angular use? What is the difference between Regular DOM vs. Virtual DOM?
Q057. What is Single Page Application (SPA)? Why SPA if you can use Ajax to update the content of the page without reloading the entire page?
Q058. What is Bootstrap? How can you embed Bootstrap into an Angular App? 
Q059. What are controllers in Angular? What is the difference between controller vs. component?
Q060. What is class in Angular? How do we generate a class in Angular using CLI?

Q072. What are the Lifecycle Hooks of Angular? What is the execution sequence of it?
Q073. How does an Angular application work?
Q074. What is ngOnInit()? How is it defined?
Q075. What is the difference between a constructor vs. ngOnInit() in Angular? Which one is executed first?
Q076. What is Bootstrapping in Angular? What is a Bootstrapping module?
Q077. What is the difference between manual vs. automatic bootstrapping in Angular?
Q078. What is a bootstrapped component? Is it necessary for the bootstrapped component to be the entry component?
Q079. What is the use of manual bootstrapping? How do you manually bootstrap an application?
Q080. What is Webpack? What is the use of Webpack in Angular?
Q081. What is Metadata in Angular?
Q082. What are Annotations in Angular?
Q083. What are Decorators in Angular?

Q084. What is the difference between Annotations vs. Decorators in Angular?
Q085. What are the different types of Decorators in Angular?
Q086. What are Class Decorators in Angular? What are the different types of class decorators in Angular?
Q087. What are Method Decorators? What are the different types of method decorators in Angular?
Q088. What are Property Decorators or Field Decorators? What are the different types of property decorators in Angular?
Q089. What is the difference between @HostBinding vs. @HostListener decorators in Angular?
Q090. What are Parameter Decorators in Angular? What are the different types of parameter decorators in Angular?
Q091. What is @NgModule Decorator in Angular?
Q092. What is @Component Decorator in Angular?
Q093. What is @Injectable Decorator in Angular?
Q094. What is @Directive Decorator in Angular? What are the different types of directives in Angular?
Q095. What is @Pipe Decorator in Angular?

Q110. What are the Components in Angular? How can you create a component in Angular?
Q111. What are Modules in Angular? What are the advantages of modules in Angular?
Q112. What is declarable in Angular? Where it is defined in Angular?
Q113. What are the different types of Modules in Angular?
Q114. What is the difference between RootModule vs FeatureModule in Angular?
Q115. What is CommonModule in Angular? What is the difference between CommonModule vs BrowserModule in Angular?
Q116. What will happen if browserModule is used in a Feature Module?
Q117. What will happen if you import the same module twice in Angular? How can you avoid circular module dependency in Angular?
Q118. What is the difference between a Component vs. Module in Angular?
Q119. What is the difference between Component vs. Directive in Angular?
Q120. What is the difference between NgModule vs. JavaScript Module?
Q121. How does Angular find components, directives, and pipes in a template? What is a template reference?

Q096. What are the differences between @Component vs. @NgModule vs. @Directive decorator in Angular?
Q097. What is @Inject Decorator in Angular?
Q098. What is the difference between @Inject() vs. @Injectable() in Angular?
Q099. What is @Input Decorator in Angular?
Q100. What is @Output Decorator in Angular?
Q101. What is Content Projection in Angular? What is the use of ng-content in Angular?
Q102. What is the difference between @ContentChild vs. @ContentChildren decorators in Angular?
Q103. What is the difference between @ViewChild vs. @ViewChildren decorator in Angular?
Q104. What is the use of @HostBinding Decorator in Angular? How it is different from @HostListener?
Q105. What is @Host Decorator in Angular? What is the difference between @Host vs. @Self decorator?
Q106. What is the use of @Self Decorator in Angular?
Q107. What is the use of @SkipSelf Decorator in Angular?
Q108. What is @Optional Decorator in Angular? What is the use of @Optional Decorator in Angular?
Q109. What is the difference between @Self vs. @SkipSelf vs. @Optional decorator in Angular?

Q01. What is the order precedence of the constructor and ngOnInit() execution in Angular?
Q02. What is a constructor in Angular?
Q03. What is ngOnInit() in Angular?
Q04. What is the Lifecycle hook in Angular?
Q05. What is the difference between constructor vs ngOnInit() in Angular?

Q122. What are Directives in Angular? When to use directive?
Q123. What are the different types of directives in Angular?
Q124. What is the use of the *ngFor directive? What is the difference between the *ngFor vs. ngForOf directive in Angular?
Q125. What is the index property in *ngFor directive? What is the use of index property in *ngFor directive?
Q126. What is the purpose of *ngFor trackBy in Angular?
Q127. What is the use of the *ngIf directive in Angular?
Q128. What is the difference between the *ngIfElse vs. *ngIf directive in SQL?
Q129. How can you use both *ngFor and *ngIf directives together on the same element?
Q130. What is the difference between the *ngIf directive vs. hidden property in Angular?
Q131. What is the use of the *ngSwitch directive?
Q132. What is the difference between the *ngStyle vs. *ngClass directive in Angular?
Q133. What is the use of ng-template in Angular?
Q134. What is the use of the ngModel directive in Angular? What is the "banana-in-a-box" syntax in Angular?
Q135. What is the difference between the (ngModel) vs [ngModel] vs [(ngModel)] directive in Angular?

Q136. What is data binding in Angular? Which type of data binding does Angular use?
Q137. What are the different types of data binding used in Angular?
Q138. What is Property Binding in Angular? What is the use of [] or square box in Angular?
Q139. What is Attribute Binding in Angular? What is the difference between Property Binding vs Attribute Binding in Angular?
Q140. What is the difference between colspan vs. colSpan (camel case) in Angular?
Q141. What is String Interpolation in Angular?
Q142. What is Event Binding in Angular? What is the use of $event payload in Angular?
Q143. What is a Template Reference Variable in Angular?
Q144. What is the difference between Property Binding vs. Event Binding?
Q145. Can you use angular interpolation in the place of property binding?
Q146. What is two-way data binding in Angular? What are the disadvantages of two-way data binding?
Q147. What is the difference between (change) vs. (ngModelChange) events in Angular?
Q148. What is the difference between [ngModel] vs. [(ngModel)] in Angular?

Scenario: Your team is developing a feature that ranks AI model responses in real-time based on specific criteria. The feature must be integrated into an existing Angular application, ensuring it doesnâ€™t impact the app's overall performance.

Question: How would you integrate this new feature into the existing Angular app? What performance considerations would you keep in mind, and how would you test the feature to ensure it functions as expected?



Scenario: While working on a JavaScript project, you encounter an issue where the applicationâ€™s memory usage spikes during data processing, leading to slow performance and crashes.

Question: How would you diagnose and resolve this memory issue? What tools or techniques would you use to identify the root cause, and how would you optimize the code to prevent this from happening in the future?

Q152. What is an Injector Tree? What are the different types of Injector Hierarchies in Angular?					
Q153. What is ModuleInjector Tree in Angular? How can you register services at the module level?					
Q154. What is the use of @Injectable decorator in Angular? What is root-level Service Registration?	
Q03. What is the difference between React vs. Angular?					
Q04. What are the similarities between React and Angular?					
Q05. Why one should use React over Angular or vice-versa?					
Q06. What does React have over Angular?	
```
