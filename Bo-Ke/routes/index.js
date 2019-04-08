
const express = require('express')
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')

const router = express.Router()

async function getCommonData(){
	
	const categoriesPromise = CategoryModel.find({},'name').sort({order:-1});
	const topArticlesPromise = ArticleModel.find({},'_id click title').sort({click:-1}).limit(10);

	const categories = await categoriesPromise;
	const topArtcles = await topArticlesPromise

	return {
		categories,
		topArtcles
	}
}

//显示首页
router.get("/",(req,res)=>{
	getCommonData()
	.then(data=>{
		const {categories,topArtcles} = data;
		ArticleModel.getPaginationArticles(req)
		.then(pageArticles=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				topArtcles,
				//首页文章分页数据
				articles:pageArticles.docs,
				page:pageArticles.page,
				list:pageArticles.list,
				pages:pageArticles.pages,
			})	
		})
			
	})

})
//处理文章数据的ajax请求
router.get('/articles',(req,res)=>{
	ArticleModel.getPaginationArticles(req)
	.then(data=>{
		res.json({
			status:0,
			data
		})
	})
})
//详情页
router.get('/view/:id',(req,res)=>{
	const {id} = req.params
	getCommonData()
	.then(data=>{
		const { categories,topArtcles} = data;
		ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
		.populate({path:"user",select:'username'})
		.populate({path:'category',select:'name'})
		.then(article=>{
			res.render('main/detail',{
				userInfo:req.userInfo,
				categories,
				topArtcles,
				article
				
			})	
		})
	})
})

//列表页
router.get('/list/:id',(req,res)=>{
	const {id} = req.params
	getCommonData()
	.then(data=>{
		const { categories,topArtcles} = data;
		ArticleModel.getPaginationArticles(req,{category:id})
		.populate({path:"user",select:'username'})
		.populate({path:'category',select:'name'})
		.then(article=>{
			res.render('main/detail',{
				userInfo:req.userInfo,
				categories,
				topArtcles,
				article
				
			})	
		})
	})
})
module.exports = router