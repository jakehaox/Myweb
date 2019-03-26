const fs = require('fs');
const util = require('util');
/*
fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile error::',err);
	}else{
		console.log(data);
	}
})
*/
const readFile = util.promisify(fs.readFile);

readFile('./01.txt',{flag:'r'})
.then(data=>{
	console.log(data);
})
