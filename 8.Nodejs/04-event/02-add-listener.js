const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('1:::running test...');
});
myEmitter.addListener('test',()=>{
	console.log('2::: running test...')
})
// myEmitter.once('test',()=>{
// 	console.log('1:::running test...')
// })
myEmitter.emit('event');