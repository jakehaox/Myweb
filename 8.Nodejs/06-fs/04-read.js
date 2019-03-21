const fs =  require('fs');
//1.打开文件
fs.open('./o1.txt','r',(err,fd)=>{
	if(err){
		console.log('open error:::',err)
	}else{
	//2.读文件
	}
})

//3.关闭文件 