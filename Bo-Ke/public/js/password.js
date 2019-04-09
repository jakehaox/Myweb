
;(function($){
	var passwordReg = /^\w{3,6}$/;
	$('#btn-sub').on('click',function(){
		var password = $('[name="password"]').val()
		var repassword = $('[name="repassword"]').val()
		//2.2 验证
		var $errs = $('.err');
		//用户名以字母开头,包含数组下划线的3-10位字符
		if(!usernameReg.test(username)){
			$errs.eq(0).html('密码3-6个字符')；
			return false;
		}else{
			$errs.eq(0).html('')
		}
	
		//密码输入一致
		if(password != repassword){
			$errs.eq(1).html('两次密码不一致');
			return false;
		}else{
			$err.eq(1).html('');
		}
	});

})(jQuery);