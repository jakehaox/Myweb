const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('test',()=>{
	console.log('running test...')
})

emitter.emit('test');