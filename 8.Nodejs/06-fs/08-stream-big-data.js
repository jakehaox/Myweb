const fs = require('fs');

const ws = fs.createWriteStream('./bb.mov');

const rs = fs.createReadStream('./01.mov');

/*
rs.on('open',()=>{
	console.log('rs open...');
})
rs.on('close',()=>{
	console.log('rs close...');
})
rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('rs end...');
})
*/

rs.pipe(ws);






