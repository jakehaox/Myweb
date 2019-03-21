const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');

const rs = fs.createReadStream('./rs.txt');
/*
ws.on('open',()=>{
	console.log('ws open...')
})
ws.on('close',()=>{
	console.log('ws close...')
})
ws.on('finish',()=>{
	console.log(' ws finish....')
})

ws.write('abc');
ws.write('hello');
ws.end();


rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',(chunk)=>{
	console.log('rs end...')
})
*/
rs.pipe(ws);