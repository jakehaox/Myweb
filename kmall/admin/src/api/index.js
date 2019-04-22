/*
* @Author: TomChen
* @Date:   2019-04-16 18:28:31
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:40:03
*/
const SERVER = 'http://127.0.0.1:3000/';

export const ADMIN_LOGIN = SERVER +  'admin/login'
export const USER_LOGOUT = SERVER +  'user/logout'
export const ADMIN_COUNT = SERVER +  'admin/count'
export const GET_USERS = SERVER +  'admin/users'
export const ADD_CATEGORY = SERVER +  'category'
export const GET_CATEGORIES = SERVER +  'category'
export const UPDATE_CATEGORY_ORDER = SERVER +  'category/updateOrder'
export const UPDATE_CATEGORY_NAME = SERVER +  'category/updateName'
export const UPLOAD_PRODUCT_IMAGE = SERVER + 'product/uploadImage'