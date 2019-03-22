const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function callReadFile(){
	let data = await readFile('./o1.txt',{flag:'r'});

	console.log()
}