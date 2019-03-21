const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();

const fn1 = ()=>{
	console.log('running test...');
};
emitter.on('test',fn1);

// emitter.off('test',fn1);
emitter.removeListener('test',fn1);

console.log(emitter.off === emitter.removeListener);
emitter.emit('test');
