
//异步写文件

const fs = require('fs');
/*
//1.打开文件
fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open error::',err);
	}else{
		//2.写入数据
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write error::',err);
			}else{
				console.log('write success::');
			}
			//3.关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error::',err);
				}else{
					console.log('close success')
				}
			})
		});
	}
});
*/
// console.log('do something...');
fs.writeFile('./01.txt','kuazhu',{flag:'a'},(err)=>{
	if(err){
		console.log('wirteFild error::');
	}else{
		console.log('weiteFile success');
	}
})