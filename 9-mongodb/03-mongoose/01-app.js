

const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name:{
		type:String,
		enum:["Leo","Tom","Sinmon","Jake","Mark"],
		maxlength:[8,"最多8位字符"],
		minlength:[3,"最小3位字符"],
		default:"Mark"

	},
	age:{
		type:Number,
		default:0,
		min:[10,"最小年龄是18"],
		max:[40,"最大年龄是40"],
		required:[true,"用户名称必须输入"]
	},
	major:{
		type:String,
		enum:["art","computer","sport","music"]
	}
});
