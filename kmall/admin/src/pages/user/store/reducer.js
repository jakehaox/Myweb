/*
* @Author: TomChen
* @Date:   2019-04-11 18:56:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:51:38
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	list:[{
		  _id: '1',
		  username: 'admin2',
		  isAdmin: true,
		  email: 'test@kuazhu.com',
		  phone:'13621231234',
		  createdAt:'2019-10-11 14:34:56'
		}],
})
export default (state=defaultState,action)=>{

	return state;
}