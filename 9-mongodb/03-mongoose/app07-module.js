const mongoose = require('mongoose');

const UserModel = require('./models/user.js')

//1.连接数据库服务
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');

	//2.用模型操作数据(CRUD)

	UserModel.distinct('name',{age:{$gt:100}},(err,result)=>{
		if(err){
			console.log('distinct err',err);
		}else{
			console.log(result);
		}
	});



	
});
