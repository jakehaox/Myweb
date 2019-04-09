
const express = require('express')
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')
const ComentModel = require('../models/')
const router = express.Router()

async function getCommonData(){
	
	const categoriesPromise = CategoryModel.find({},'name').sort({order:-1});
	const topArticlesPromise = ArticleModel.find({},'_id click title').sort({click:-1}).limit(10);


	const categories = await categoriesPromise;
	const topArtcles = await topArticlesPromise;

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
	const { id } = req.query;
	const query = {};
	if(id){
		query.category = id
	}
	ArticleModel.getPaginationArticles(req)
	.then(data=>{
		res.json({
			status:0,
			data
		})
	})
})

async function getDetailDate(req){
	const {id} = req.params
	const commonDataPromise = getCommonData();//获取公共数据
    const articleDataPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})//获取article数据
							  .populate({path:"user",select:'username'})
							  .populate({path:'category',select:'name'})
	const commentPageDataPromise = ComentModel.getPaginactionComments(req,{article:id})

	const data = await commonDataPromise;
	const article = await articleDataPromise;
	const pageData = await commentPagePromise;

	const { categories,topArtcles} = data;


	return {
		categories,
		topArtcles,
		article,
		pageData
	}
}
//详情页
router.get('/view/:id',(req,res)=>{
	getCommonData(req)
	.then(data=>{
		const { categories,topArtcles,article,pageData} = data;
			res.render('main/detail',{
					userInfo:req.userInfo,
					categories,
					topArtcles,
					article,
					//回传分类id，为了详情页对应选中导航
					category:article.category._id
					//评论的分页数据
					comments:pageData.docs,
					page:pageData.page,
					list:pageData.list,
					pages:pageData.pages,

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