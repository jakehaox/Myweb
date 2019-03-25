
(function($){

	function getRandom(min,max) {//随机函数
		return Math.round(min + (max-min)*Math.random());
	}
	
	var $wall = $('.wall');
	var $wish = $('.wish');
	//获取父容器和自身宽高
	var wallWidth = $wall.width(),
		wallHeight = $wall.height(),
		wishWidth = $wish.width(),
		wishHeight = $wish.height();
	//1.设置许愿卡片拖动
	$wish.pep({  constrainTo: '.wall' })

	$wish.each(function(){
		let x = getRandom(0,wallWidth - wishWidth);
		let y = getRandom(0,wallHeight - wishHeight);
		$(this).css({
			transform: "matrix(1, 0, 0, 1, "+x+", "+y+")"
		})
	})




})(jQuery);	
