;(function($){
    $.fn.extend({
		setCss:function(obj1,obj2){
			console.log($nDiv == this);
			return this.each(function($nDiv){
				var $nDiv = $(this)
				if (!obj2) {
					console.log($nDiv.css(obj1));
				}else{
					console.log($nDiv.css(obj1,obj2));
				}
			});
		}
	})
})(jQuery);
	/*
	$.fn.extend({
		setCss:function(obj1,obj2){
			console.log($nDiv == this);
			return this.each(function($nDiv){
				var $nDiv = $(this)
				if (!obj2) {
					console.log($nDiv.css(obj1));
				}else{
					console.log($nDiv.css(obj1,obj2));
				}
			});
		}
	})
	*/
