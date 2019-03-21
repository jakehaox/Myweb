const fs = require('fs');
/*
//1.打开文件
const fd = fs.openSync('./01.txt','w');
//2.写入数据
fs.writeSync(fd,'hello');
//保存退出(关闭)
fs.closeSync(fd);
*/
fs.writeFileSync('./o1.txt','kuazhu',{flag:'a'});