
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
