

// const stream = requrie('stream');


const {Writable} = requrie('stream');
/*
const ws = new Writable();
ws.write('hello');
*/
class MyWrite extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		callback && callback();
	}
}
const writer = new MyWriter();

weiter.on('finish',()=>{
	console.log('finish...');
})
writer.write('hello','utf-8',()=>{
	console.log('hello...');
});

writer.write('kuazhu');
writer.end();