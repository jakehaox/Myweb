const fs = require('fs');
/*
//1.打开文件
const fd = fs.openSync('./01.txt','r');
//2.读文件
const buf = Buffer.alloc(100);
console.log(buf);
fs.readSync(fd,buf,0,100,0);
console.log(buf);
//3.关闭文件
fs.closeSync();
*/
const data = fs.readFileSync('./01.txt',{flag:'r'});
console.log(data);
