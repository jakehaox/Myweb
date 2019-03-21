//Buffer是用来
const buf = Buffer.from('hello');

console.log(buf);//<Buffer 68 65 6c 6c 6f>

//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(8个二进制) = 1B(字节)

const buf2 = Buffer.from('好心情');
console.log(buf2);//<Buffer e5 a5 bd e5 bf 83 e6 83 85>

const buf3 = Buffer.alloc(10);
buf3[0] = 10;
console.log(buf3);//<Buffer 0a 00 00 00 00 00 00 00 00 00>

buf3[1] = 0x10;
console.log(buf3);//<Buffer 0a 10 00 00 00 00 00 00 00 00>

buf3[9] = 9;
console.log(buf3.toString());//<Buffer 0a 10 00 00 00 00 00 00 00 09>

const buf4 = Buffer.alloc(9);
buf4[0] = 0xe4;
buf4[1] = 0xbd;
buf4[2] = 0xa0;
console.log(buf4.toString());