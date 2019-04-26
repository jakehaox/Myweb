
require('pages/common/footer')
require('pages/common/logo')
require('./index.css')
var _util = require('util')
var _user = require('service/user')
var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')		
	}
}
var page = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		//1.验证用户名是否存在
		$('[name="username"]').on('blur',function(){
			var username = $(this).val();
			if(!_util.validate(username,'require')){
				return;
			}
			if(!_util.validate(username,'username')){
				return;
			}
			_user.checkUsername(username,function(){
				formErr.hide()
			},function(msg){
				formErr.show(msg)
			})
		})
		//2.用户注册
		$('#btn-submit').on('click',function(){
			_this.submitRegister();
		})
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submitRegister();
			}
		})
	},
	submitRegister:function(){
		//1.获取数据
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			email:$.trim($('[name="email"]').val()),
		}
		//2.验证数据
		var validateResult = this.validate(formData)
		//3.发送请求
		if(validateResult.status){//验证通过
			formErr.hide()
			_user.register(formData,function(){
				window.location.href = './result.html?type=register'
			},function(msg){
				formErr.show(msg)
			})
		}
		else{//验证失败
			formErr.show(validateResult.msg)
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		//密码不能为空
		if(!_util.validate(formData.password,'require')){
			result.msg = '密码不能为空'
			return result;
		}
		//密码格式不正确
		if(!_util.validate(formData.password,'password')){
			result.msg = '密码格式不正确'
			return result;
		}
		//两次密码不一致
		if(formData.password != formData.repassword){
			result.msg = '两次密码不一致'
			return result;			
		}
		result.status = true;
		return result;

	}
}
$(function(){
	page.init();
})