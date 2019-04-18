

import React,{ Component } from 'react'
import {Breadcrumb} from 'antd'
import Layout from 'common/layout'


class CategoryAdd extends Component{
    render(){
        return (
        	<div className="CategoryAdd">
        		<Layout>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                    <Breadcrumb.Item>添加分类</Breadcrumb.Item>
                  </Breadcrumb>            
        		</Layout>
        	</div>
        )
    }
}

export default CategoryAdd