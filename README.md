# angular-interview-questions


            const sub1 = new Subject();
            const sub2 = new BehaviorSubject(2);
            let output = '';
            
            sub1.next('1');
            
            sub2.subscribe(val =&gt; {
              output += val;
            });
            
            sub1.subscribe(val =&gt; {
              output += val
            });

            console.log(output)


You have defined a link with Id = "linkA" in your Angular application. You want the link to be clickable but should not open the specified path. 
Which of the following options must be followed for doing the same?
 
Use "disabled" keyword in the definition of the link.
Use the stopPropagation() method in the event listener of the click event for the link
Use the preventDefault() method in the event listener of the click event for the link.
Use "empty" keyword in the definition of the link.

-----------------
How to execute 2 Observables in parallel
ob1 = new Observable<string>(observer => {
    console.log("observable 1 called");
  });

ob2 = new Observable<string>(observer => {
    console.log("observable 2 called");
  });
            
            
            
            ---------------------
            Interview Question-

limit service to a particular component, child component.
Simple Quiz-
Question:
When we add the provide metadata to a component, that means that the service injected will be:
Options:
a. A singleton throughout the application
b. An instance just for the component but not for its children
c. The same instance for the component and all its childs
d. The same instance for the component and its childs that do not provide the service
Leave a comment if you know the answer.
