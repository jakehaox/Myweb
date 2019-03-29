
const mongoose = require('mongoose');
const BlogModel = require('./models/blog.js')
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');
	
	BlogModel.insertMany({
		title:"title2",
		content:'content2',
		author:"5c9ca8edd7929d1974013110"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err::',err)
		}else{
			console.log(docs)
		}
	})
});