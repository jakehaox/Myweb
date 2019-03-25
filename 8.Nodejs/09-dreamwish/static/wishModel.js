
const fs = require('fs');
const util = require('util');

const filePath = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function add(name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);

	return arr;
	
}
async function get(id){
	//1.获取原有数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.查找对应id的对象
	return arr.find(val=>{
		return val['id'] == id;
	})
}

async function update(id,name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	//2.查找对应id的对象
	let obj = arr.find(val=>{
		return val['id'] == id;
	})
	if(obj){
		obj.name = name;
		let strArr = JSON.stringify(arr);
		//3.保存
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;
	}	
}
async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})	
	let strArr = JSON.stringify(newArr);
	//3.保存
	await writeFile(filePath,strArr);
	return newArr;	

}

