const {readFileSync, writeFileSync} = require('fs');

let source = readFileSync('source.bf').toString();

let bufferSize = process.argv[2] || 30000;

let result = `let BFCompiled=(input="")=>{let x=Uint8Array,c=${bufferSize},a=new x(c),b=0,d=Array.from(new TextEncoder().encode(input)),e=[]`;

source.split("").forEach(key => {
	switch(key) {
		case "+":
			result += ";a[b]++"
			break;
		case "-":
			result += ";a[b]--"
			break;
		case ">":
			result += ";b++;b%=c"
			break;
		case "<":
			result += ";b+=c-1;b%=c"
			break;
		case "[":
			result += ";while(a[b]){"
			break;
		case "]":
			result += "}"
			break;
		case ",":
			result += ";a[b]=d.shift()||0"
			break;
		case ".":
			result += ";e.push(a[b])"
			break;
	}
});

result += ";return new TextDecoder().decode(new x(e).buffer)}";

writeFileSync('compiled.js', result);