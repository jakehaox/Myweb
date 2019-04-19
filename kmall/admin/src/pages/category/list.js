import React,{ Component } from 'react'
import { Link } from "react-router-dom"
import Layout from 'common/layout'
import {
  Form, Input, Tooltip, Icon,Breadcrumb, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
const { Option } = Select;

class CategoryList extends Component{
    render(){
    const { getFieldDecorator } = this.props.form;
    return (
        	<div className="CategoryList">
        		<Layout>
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                  <Breadcrumb.Item>分类列表</Breadcrumb.Item>
              </Breadcrumb>
        		</Layout>
        	</div>
        )
    }
}

export default CategoryList