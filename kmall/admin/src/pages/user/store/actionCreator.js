/*
* @Author: TomChen
* @Date:   2019-04-11 20:15:26
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:09:18
*/
import * as types from './actionTypes.js'
import { request } from 'util'
import { GET_USERS } from 'api'

const setPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getPageAction = (page)=>{
	return (dispatch)=>{
		request({
			url:GET_USERS,
			data:{
				page:page
			}
		})
		.then(result=>{
			console.log('asdfasdfasdf',result)
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
