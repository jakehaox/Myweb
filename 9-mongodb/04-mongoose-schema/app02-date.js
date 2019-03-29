

const mongoose = require('mongoose');
const moment = require('moment');

const UserModel = require('./models/user.js')
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');
	
	UserModel.findById('5c9dd463131bc08e78f58e97',(err,docs)=>{
		if(err){
			console.log('find user err::',err)
		}else{
			console.log(docs)

			//方法1.用Date类
			const date = new Date(user.createdAt);
			console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
			
			//方法2：
			console.log(moment(user.createdAt).format('YYYY-MM_DD HH:MM:ss'))


		}

	})
});
