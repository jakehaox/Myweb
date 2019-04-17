/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:09:36
*/

import React,{ Component } from 'react'

import { Table, Divider, Tag } from 'antd';
import Layout from 'common/layout'



import './index.css'
const dataSource = [{
  key: '1',
  name: 'admin',
  isAdmin: true,
  email:'test@kuazhu.coom',
  phone:'17337032832',
  createdAt: '2019-04-19 10:52:00'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '用户名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '是否是管理员',
  dataIndex: 'admin',
  key: 'admin',
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
}{
  title: '手机号码',
  dataIndex: 'phone',
  key: 'phone',
},{
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
},];

<Table dataSource={dataSource} columns={columns} />
class User extends Component{
    render(){
        return (
        	<div className="User">
        		<Layout>
        			<Table dataSource={dataSource} columns={columns} />
        		</Layout>
        	</div>
        )
    }
}


export default User