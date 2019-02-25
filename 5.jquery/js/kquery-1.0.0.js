
(function(window){
   var kQuery = function(){
   	  return new kQuery.prototype.init();
   }
   kQuery.prototype ={
   	    constructor:kQuery,
   	    init:function(){

   	    }
   };
   kQuery.prototype.init.prototype = kQuery.prototype;
   	window.kQuery = window.$ = kQuery; 
})(window);