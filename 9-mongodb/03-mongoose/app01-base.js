

const mongoose = require('mongoose');

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
	


})

