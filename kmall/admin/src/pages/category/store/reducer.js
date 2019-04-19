/*
* @Author: TomChen
* @Date:   2019-04-11 18:56:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-17 20:46:45
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	isFetching:false,
	list:[],
	current:1,
	pageSize:0,
	total:0,
})
export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,
			total:action.payload.total				
		})
	}
	if(action.type == types.PAGE_REQUEST){
		return state.set('isFetching',true)
	}
	if(action.type == types.PAGE_DONE){
		return state.set('isFetching',false)
	}	
	if(action.type == types.ADD_REQUEST){
		return state.set('isAddFetching',true)
	}
	if(action.type == types.ADD_DONE){
		return state.set('isAddFetching',false)
	}	
	return state;
}