
    function animate(obj,attr,target){
	    clearInterval(obj.timer);
	    var iSpend = 0;
	    obj.timer = setInterval(function(){
		    var current = parseFloat(getComputedStyle(obj,false)[attr]);
		    if(attr == 'opacity'){
		    	  current = Math.round(current * 100);
		    }
		    if(current < target){
		    	iSpend = 10;
		    }else{
		    	iSpend = -10;
		    }
		    if(Math.abs(target - current) == Math.abs(iSpend)){
		    	if(attr == 'opacity'){
		    		obj.style.opacity = target / 100;
		    	}else{
		    		obj.style[attr] = target + 'px';
		    	}
		    	clearInterval(obj.timer);
		    }else{
		    	if(attr == 'opacity'){
		    	   obj.style.opacity = (current + iSpend) / 100;	
		    	}else{
		    		obj.style[attr] = current + iSpend + 'px';
		    	}
		      }
		    },30);
	    // console.log(obj,attr,target);
	    }