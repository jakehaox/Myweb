/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:09:36
*/

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Table, Divider, Tag } from 'antd';
import moment from 'moment'
import { actionCreator } from './store'
import Layout from 'common/layout'

const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:isAdmin=>isAdmin?'是':'否'
}, {
  title: 'email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '手机',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '注册时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];

class User extends Component{
  componentDidMount(){
    this.props.handleUserPage()
  }
    render(){
      const { list } = this.props;
      const dataSource = list.map(user=>{
        return {
          key:user.get('_id'),
          username: user.get('username'),
          isAdmin: user.get('isAdmin'),
          email: user.get('email'),
          phone:user.get('phone'),
          createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
        }
      }).toJS()
        return (
          <div className="User">
            <Layout>
              <Table dataSource={dataSource} columns={columns} />
            </Layout>
          </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    list:state.get('user').get('list'),
  }
}

const mapDispatchToProps = (dispath)=>{

  return {
    handleUserPage:()=>{
      const action = actionCreator.getPageAction()
      dispath(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)