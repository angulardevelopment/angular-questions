# angular-interview-questions

limit service to a particular component, child component.

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

Question:
When we add the provide metadata to a component, that means that the service injected will be:
Options:
a. A singleton throughout the application
b. An instance just for the component but not for its children
c. The same instance for the component and all its childs
d. The same instance for the component and its childs that do not provide the service

