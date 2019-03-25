/*
* @Author: Tom
* @Date:   2018-07-25 14:33:24
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-24 11:48:27
*/

(function($){

	function getRandom(min,max) {	
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
		let x = (0,wallWidth-wishWidth);
		let y = (0,wallHeight-wishHeight);
	})
	transform:matrix()



})(jQuery);	
