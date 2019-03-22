const fs =  require('fs');
/*
//1.打开文件
fs.open('./o1.txt','r',(err,fd)=>{
	if(err){
		console.log('open error:::',err)
	}else{
	//2.读文件
	let buf = Buffer.alloc(100);
	fs.read(fd,buf,0,100,0,(err)=>{
		if(err){
			console.log('read error::',err);
		}else{
			console.log('write success');
			console.log(buf);
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
fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile error::',err);
	}else{
		console.log(data);
	}
})

