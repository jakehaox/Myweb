

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
    UserModel.find({},(err,docs)=>{
    	if (err) {
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    })
    */
    /*
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
    */
    /*
    UserModel.find({age:{$gt:50}},(err,docs)=>{
    	if (err) {
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    })
    */
    /*
    UserModel.find({age:{$gt:100}},"name age -_id",(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    })
    */
    /*
    UserModel.find({age:{$gt:100}},"name age -_id",{skip:1},(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    })
    */
    /*//skip  指忽视第几条 在它之后显示
    UserModel.find({age:{$gt:100}},null,{skip:1},(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    }) 
    */
    /*
    // limit 指想要显示几条数据 参数对应显示条数
    UserModel.find({age:{$gt:100}},null,{limit:2},(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    }) 
    */
    /*
    //sort 指定字段 升序或降序排列  1代表升序  -1代表降序
    UserModel.find({age:{$gt:100}},null,{sort:{age:1}},(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    }) 
    //返回值是query对象
    */
    /*
    //根据id查找想要的数据
    UserModel.findById("5c9c7eab47a7a822b4fdbd6c","name -_id",(err,doc)=>{
    	if(err){
    		console.log('findById err',err);
    	}else{
    		console.log(doc);
    	}
    })
    */
    UserModel.findOne({age:{$gt:100}},(err,docs)=>{
    	if(err){
    		console.log('find err',err);
    	}else{
    		console.log(docs);
    	}
    })

    


})

