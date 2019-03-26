//自定义可读流
const {Readable} = require('stream');
/*
const rs = new Readable();

rs.on('data'.(chunk)=>{
	console.log(chunk);
})
*/
class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index > 5){
			this.push(null);
		}else{
			let str = this.index + '';
			this.push(str);
		}
	}
}
const reader = new MyReader();
/*
let body = '';
reader.on('data',(chunk)=>{
	console.log(chunk.toString());
	body += chunk;
})
reader.on('end',()=>{
	console.log(body);
	console.log('end....')
})
*/
//readable.pipe(writable) 将可读流的数据传递给可写流
reader.pipe(process.stdout);