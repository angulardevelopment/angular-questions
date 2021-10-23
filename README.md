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
