const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
/*
myEmitter.on('event', () => {
  console.log('1:::running test...');
});
myEmitter.addListener('test',()=>{
	console.log('2::: running test...')
})
*/
// myEmitter.once('test',()=>{
// 	console.log('1:::running test...')
// })
/*
myEmitter.once('event',()=>{
	console.log('1::running test')
})
myEmitter.emit('event');
*/
myEmitter.setMaxListeners(11);
myEmitter.on('event',()=>{
	console.log('1::running test')
})
myEmitter.on('event',()=>{
	console.log('2::running test')
})
myEmitter.on('event',()=>{
	console.log('3::running test')
})
myEmitter.on('event',()=>{
	console.log('4::running test')
})
myEmitter.on('event',()=>{
	console.log('5::running test')
})
myEmitter.on('event',()=>{
	console.log('6::running test')
})
myEmitter.on('event',()=>{
	console.log('7::running test')
})
myEmitter.on('event',()=>{
	console.log('8::running test')
})
myEmitter.on('event',()=>{
	console.log('9::running test')
})
myEmitter.on('event',()=>{
	console.log('10::running test')
})
myEmitter.emit('event');

