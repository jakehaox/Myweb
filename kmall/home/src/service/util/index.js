

var _util ={
	request:function(options){
		$.ajax({
			method:options.method || 'get',
			url:options.url || '',
			dataType:options.dataType || 'json',
			data:options.data || ''
		})
	}
}