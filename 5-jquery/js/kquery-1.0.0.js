
(function(window){
    var kQuery = function(selector){
   	  return new kQuery.fn.init(selector);
    }
    kQuery.fn = kQuery.prototype ={
   	    constructor:kQuery,
   	    init:function(selector){
   	    	//console.log("$:::",selector);
   	    	//1.布尔值是false
   	    	if(!selector){
                return this;
   	    	}
   	    	//2.函数
   	    	else if(kQuery.isFunction(selector)){
                console.log('function');
                window.addEventListener('DOMContentLoaded',selector)
                this[0] = document;
                this.length = 1;
                return this;
   	    	}
   	    	//3.字符串
   	    	else if(kQuery.isString(selector)){
   	    		//3.1 html代码
   	    		if(kQuery.isHtml(selector)){
                    var tempDom = document.createElement('div');
                    tempDom.innerHTML = selector;
                    for(var i = 0;i<tempDom.children.length;i++){
                    	this[i] = tempDom.children[i];
                    }
                    this.length = tempDom.children.length
                    ;
                    return this;
   	    		}
   	    		//3.2 选择器
   	    		else{
                    var doms = document.querySelectorAll(selector);
                    for(var i =0;i<doms.length;i++){
                    	this[i] = doms[i];
                    }
                    this.length = doms.length;
   	    		}
   	    	}
   	    	//4.数组
            else if(kQuery.isArray(selector)){
                for(var i = 0;i<selector.length;i++){
                    this[i] = selector[i];
                }
                this.length = selector.length;
            }
            //5.对象
            else{
            	this[0] = selector;
            	this.length = 1;
            }
        },
        get:function(num){
	        if(num){
	        	if (kQuery.isNumber(num)) {
	        		if (num >= 0) {
	        			return this[num];
	        		}else{
	        			// 0 1 2 3
	        			//3  = 4 + -1
	        			//2  = 4 + -2
	        			//-1 -->3-2
	        			//-2 -->2-1

	        			return this[this.length + num]
	        		}
	        	}
	        }else{
	            var arr = [];
	            for(var i = 0;i<this.length;i++){
	                arr.push(this[i]);
	            }
	            return arr;
	        }
	    },
	    
    }
	   
    kQuery.isFunction = function(str){
        return typeof str == 'function'
    }
    kQuery.isString = function(str){
        return typeof str == 'string'
    }
    kQuery.isHtml = function(str){
        return /<[^<>]+>/.test(str);
    }
    kQuery.isArray = function(str){
   	    return typeof str == 'object' && length in str;
    }
    kQuery.isNumber = function(str){
    	return typeof str == 'number';
    }
    kQuery.fn.init.prototype = kQuery.fn;

	window.kQuery = window.$ = kQuery; 
})(window);