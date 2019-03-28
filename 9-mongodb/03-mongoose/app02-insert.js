

const mongoose = require('mongoose');



//构建数据用
const getRandom = (min,max)=>{
	return Math.round(min + (max - min) * Math.random());
}

const names = ["Tom","Jake","Amy","Andy","Simon","Leo"];
const majors = ["art","sport","music","computer"]


const getName = ()=>names[getRandom(0,names.length-1)]
const getMajor = ()=>majors[getRandom(0,majors.length-1)]
//1.链接数据库服务
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error',(err)=>{
	console.log('connection error');
	throw err;
});
db.once('open',()=>{
	console.log('connection successful');
	//2.定义Schema

	var UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	});
	//3.生成模型Mo
	//3.1 mongoose.model第一个参数是指定集合的名称，mongoosse会自动变成复数
	//3.2 mongoose.model第二个参数是指定Schema

	const UserModel = mongoose.model('user',UserSchema);

	//4.用模型操作数据(CRUD)
    /*
	const user = new UserModel({name:"Amy",age:19,major:"art"});

	user.save((err,doc)=>{
		if(err){
			console.log('save user error',err);
		}else{
			console.log(doc)
		}
	})
	
	//4.2 查找
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(docs)
		}
	})
	*/
    //insertMany 两种用法 可传数组 可传对象
    /*
	UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}

		],
		(err,docs)=>{
			if(err){
				console.log('updateMany err::',err)
			}else{
				console.log(docs)
			}
       })
    */
    /*
    let promise = UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}

		],
		promise
		.then(docs=>{
			console.log(docs)
		})
		.catch(err=>{
			console.log('undateMany err',err)
		})
	*/
	/*
	UserModel.create(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}

		],
		(err,docs)=>{
			if(err){
				console.log('create err::',err)
			}else{
				console.log(docs)
			}
       })
      */

    const arr = [];
    for(let i = 0;i<10;i++){
    	arr.push({
    		name:getName(),
    		age:getRandom(10,150),
    		major:getMajor()
    	})
    }
    UserModel.insertMany(
    	arr,
    	(err,docs)=>{
			if(err){
				console.log('create err::',err)
			}else{
				console.log(docs)
			}
		}
    );

});

