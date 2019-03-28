 



const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'kuazhu';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {

  console.log("Connected successfully to server");

  const db = client.db(dbName);

  //Insert a Document
  // Get the documents collection
  const collection = db.collection('users');
  /*插入
  collection.insertMany([{name:"Tom",age:18,mojor:"Computer"},{name:"jake",age:18,mojor:"Computer"},{name:"Leo",age:18,mojor:"Computer"}],(err,result)=>{
  	if(err){
  		console.log('insertMany err::',err)
  	}else{
  		console.log(result);
  	}
	 client.close();  	
  });
  */

  //Find All Documents
  /*
  collection.find({}).toArray((err,docs)=>{
  	if(err){
  		console.log('find err::',err)
  	}else{
  		console.log(docs);
  	}
	 client.close();  	
  })
  */
  /*
   collection.find({name:"Tom"}).toArray((err,docs)=>{
  	if(err){
  		console.log('find err::',err)
  	}else{
  		console.log(docs);
  	}
	 client.close();  	
  })
  */
  //Update a document
  /*
  collection.updateOne({name:"Tom"},{$set:{age:28}},(err,result)=>{
  	  	if(err){
  		console.log('update err::',err)
	  	}else{
	  		console.log(result);
	  	}
		 client.close();  	
  });
  */
  /*删除一条
  collection.deleteOne({name:"Tom"},(err,result)=>{
  	if(err){
  		console.log('deleteOne err::',err)
  	}else{
  		console.log(result);
  	}
	 client.close();  	
  })
  */
});