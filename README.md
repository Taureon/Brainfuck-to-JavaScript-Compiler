# Brainfuck to JavaScript Compiler
Compiles (or converts) Brainfuck (.bf) into Javascript (.js)

**How to use:**
- Make a `source.bf` file in the same directory as `BFtoJS.js`.
- Put the brainfuck source code in it.
- Run `BFtoJS.js`. (Optional launch option for a custom buffer size in bytes)
- Drop in `compiled.js` anywhere you need it to! (You can rename the `BFCompiled` function to anything else)

# Examples
Example input:
```bf
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```
Example output:
```JS
let BFCompiled=(input="")=>{let x=Uint8Array,c=30000,a=new x(c),b=0,d=Array.from(new TextEncoder().encode(input)),e=[];a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;while(a[b]){;b++;b%=c;a[b]++;a[b]++;a[b]++;a[b]++;while(a[b]){;b++;b%=c;a[b]++;a[b]++;b++;b%=c;a[b]++;a[b]++;a[b]++;b++;b%=c;a[b]++;a[b]++;a[b]++;b++;b%=c;a[b]++;b+=c-1;b%=c;b+=c-1;b%=c;b+=c-1;b%=c;b+=c-1;b%=c;a[b]--};b++;b%=c;a[b]++;b++;b%=c;a[b]++;b++;b%=c;a[b]--;b++;b%=c;b++;b%=c;a[b]++;while(a[b]){;b+=c-1;b%=c};b+=c-1;b%=c;a[b]--};b++;b%=c;b++;b%=c;e.push(a[b]);b++;b%=c;a[b]--;a[b]--;a[b]--;e.push(a[b]);a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;a[b]++;e.push(a[b]);e.push(a[b]);a[b]++;a[b]++;a[b]++;e.push(a[b]);b++;b%=c;b++;b%=c;e.push(a[b]);b+=c-1;b%=c;a[b]--;e.push(a[b]);b+=c-1;b%=c;e.push(a[b]);a[b]++;a[b]++;a[b]++;e.push(a[b]);a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;e.push(a[b]);a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;a[b]--;e.push(a[b]);b++;b%=c;b++;b%=c;a[b]++;e.push(a[b]);b++;b%=c;a[b]++;a[b]++;e.push(a[b]);return new TextDecoder().decode(new x(e).buffer)}
```
Result if running example compiled code: `"Hello World!\n"`
