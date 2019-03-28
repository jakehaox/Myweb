

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
	UserModel.updateOne({age:{$gt:100}},{$set:{age:99}},(err,result)=>{
        if(err){
            console.log('updateOne err::',err)
        }else{
            console.log(result);
        }
    });
    */
    UserModel.updateMany({age:{$gt:90}},{$set:{age:100}},(err,result)=>{
        if(err){
            console.log('updateOne err::',err)
        }else{
            console.log(result);
        }
    });
})

