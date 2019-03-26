/*
console.log(1);

let timer = setTimeout(function(){
	console.log(2);
},0)

console.log(3);

clearTimeout(timer);
*/
/*
console.log(1);

let timer = setInterval(()=>{
	console.log(2)
},200)

console.log(3)

clearInterval(timer);
*/

console.log(1);

let timer = setImmediate(()=>{
	console.log(2)
},200)

console.log(3);
// setImmediate()
clearImmediate(timer); 