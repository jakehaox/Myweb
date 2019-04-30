/*
* @Author: TomChen
* @Date:   2019-04-23 19:31:31
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-28 17:27:03
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('util/pagination')
require('./index.css')
var _util = require('util')
var _product = require('service/product')
var _cart = require('service/cart')
var tpl = require('./index.tpl')
var page = {
	init:function(){
		this.$elem = $('.cart-box');
		this.loadCart();
		this.bindEvent();
	},
	loadCart:function(){
		var _this = this;
		_cart.getCart(function(cart){
			if(cart.cartList.length>0){
				//处理图片
				cart.cartList.forEach(function(item){
					item.product.mainImg = item.product.images.split(',')[0]
				})
				console.log(cart);
				var html = _util.render(tpl,cart);
				_this.$elem.html(html);
			}else{
				_this.$elem.html('<p class="empty-msg">购物车空空如也!</p>')	
			}
		},function(){
			_this.$elem.html('<p class="empty-msg">加载购物车失败!稍后再试</p>')	
		})

	},
	bindEvent:function(){
		var _this = this;
		//单条商品的选中/取消
		this.$elem.on('click','.select-one',function(){
			var $this = $(this);
			var productId = $this.parents('.product-item').data('product-id')
			//选中
			if($this.is(":checked")){
				_cart.selectOne({productId:productId},function(cart){
					_this.renderCart(cart);
				},function(msg){
					_util.showErrorMsg(msg)
				})
			}
			//取消
			else{
				_cart.unselectOne({productId:productId},function(cart){
					_this.renderCart(cart);
				},function(msg){
					_util.showErrorMsg(msg)
				})				
			}
		})
		//2.全选/全不选
		this.$elem.on('click','.select-all',function(){
			var $this = $(this);
			//全选中
			if($this.is(":checked")){
				_cart.selectAll(function(cart){
					_this.renderCart(cart);
				},function(msg){
					_util.showErrorMsg(msg)
				})
			}
			//全取消
			else{
				_cart.unselectAll(function(cart){
					_this.renderCart(cart);
				},function(msg){
					_util.showErrorMsg(msg)
				})				
			}
		})
		//3.删除一条
		this.$elem.on('click','delete-one',function(){
			if(_util.confirm('您确定要删除该条购物车记录吗?')){
				var $this = $(this);
				var productId = $this.parents('.product-item').data('product-id')
				_cart.deleteOne({productId:productId},function(cart){
					_this.renderCart(cart);
				},function(msg){
					_util.showErrorMsg(msg)
				})				
			}
		})

	}
}
$(function(){
	page.init();
})