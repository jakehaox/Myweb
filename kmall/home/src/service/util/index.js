var _util = {
	request:function(options){
		var _this = this;
		$.ajax({
			method:options.method || 'get',
			url:options.url || '',
			dataType:options.dataType || 'json',
			data:options.data || '',
			success:function(result){
				//成功
				if(result.code == 0){
					options.success && options.success(result.data)
				}
				//失败
				else if(result.code == 1){
					options.error && options.error(result.message)
				}
				//没有权限
				else if(result.code == 10){
					//跳转到登录页面
					_this.goLogin();
				}
			},
			error:function(err){
				options.error && options.error(err.statusText)
			}

		})
	},
	showErrorMsg:function(msg){
		alert(msg)
	},
	showSuccessMsg:function(msg){
		alert(msg)
	},
	goLogin:function(){
		window.location.herf = './user-login.html'
	},
	goHome:function(){
		window.location.herf = '/'
	},
	validate:function(value,type){
		var value = $.trim(value)
		//非空验证
		if(type == require){
			return !! value;
		}
		//用户名格式验证
		if(type == userName){
			return /^[a-zA-Z0-9]{3,6}$/.test(value);
		}
		//密码格式验证
		if(type == password){
			return /^[a-zA-Z0-9_]{3,6}$/.test(value);
		}
	}
}

module.exports = _util;