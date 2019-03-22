const stream = require ('stream');

class MyWrite extends wirtable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		console.log(callback);
		callback && callback;
	}
}
const Write = new MyWrite();
Write.write('kuazhu');
