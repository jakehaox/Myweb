

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();
/*
emitter.on('test',(event,arg1,arg2)=>{
	console.log('running test...');
	console.log(event,arg1,arg2);//hello kuazhu undefined

})
*/
/*
emitter.on('test',(arg1,arg2)=>{
	console.log('running test...');
	console.log(arg1,arg2);//hello kuazhu
})
emitter.emit('test','hello','kuazhu');
*/
const args = ['hello','kuazhu'];

emitter.on('test',(arg1,arg2)=>{
	console.log('running test...');
	console.log(arg1,arg2);//hello kuazhu
})
emitter.emit('test',...args);