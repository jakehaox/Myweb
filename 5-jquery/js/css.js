// ;(function)($){  
// 	function init($elem){
// 		this.$elem = $elem;
// 		this.currentX = parseFloat(this.$elem.css('left'));
// 		this.currentY = parseFloat(this.$elem.css('top'));		
// 	}
// 	function to(x,y,cb){
//  		x = (typeof x == 'number') ? x : this.currentX;
// 		y = (typeof y == 'number') ? y : this.currentY;
// 		if(this.currentX == x && this.currentY == y) return;
// 		this.$elem.trigger('move');
// 		typeof cb == 'function' && cb();
// 		this.currentX = x;
// 		this.currentY = y;		
// 	}
// 	function silment($elem){
// 		init.call(this,$elem);
// 	}
// 	silment.prototype = {
// 			constructor:silment,
// 			to:function(x,y){
// 			to.call(this,x,y,function(){
// 				this.$elem.css({
// 					left:x,
// 					top:y
// 				});
// 				this.$elem.trigger('moved');				
// 			}.bind(this));
// 		},
// 		x:function(x){
// 			this.to(x);
// 		},
// 		y:function(y){
// 			this.to(null,y)
// 		}
//     }
//     var $elem = $('.box'); 
	
// }(jQuery);
;(function($){
	function SetBox($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.x = null;
		this.y = null;
		this.init()
	}

	SetBox.prototype = {
		constructor:SetBox,
		init:function(){
			this.$elem.css({
				width:this.options.width,
				height:this.options.height,
				background:this.options.backcround,
				position:"fixed",
				top:this.options.top,
				left:this.options.left
			})
		},
		leftTop:function(){
			this.$elem.css({left:0,top:0,right:'',bottom:''})
		},
		rightBottom:function(){
			this.$elem.css({right:0,bottom:0,left:'',top:''})
		},
		bindEvent:function(){
			this.x = this.$elem.offset().left;
			this.y = this.$elem.offset().top;
			console.log(this.x,this.y)
			if(this.x == 0){
				this.rightBottom();
			}else if(this.x != 0){
				this.leftTop();
			}
		},
		onClick:function(){
			this.bindEvent()
		}
	}

	SetBox.DEFAULT = {
		width:100,
		height:100,
		backcround:"red",
		top:'50px',
		left:'50px'
	}

	$.fn.extend({
		setBox:function(options){
			return this.each(function(){
				var $this = $(this);
				options = $.extend({},SetBox.DEFAULT,options)
				var oBox = new SetBox($this,options);
				$this.on('click',function(){
					oBox.onClick();
				})
			})
		}
	})
})(jQuery);
