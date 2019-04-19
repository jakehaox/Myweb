
import {connect} from 'react-redux';
import React,{ Component } from 'react'
import { actionCreator } from './store'
import {
  Form, Input, Tooltip, Icon,Breadcrumb, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
const { Option } = Select;

import Layout from 'common/layout'

class CategoryAdd extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.handleLogin(values);
          }
       });
    }
    render(){
      const { getFieldDecorator } = this.props.form;
      const { isAddFetching } = this.props.isFetching;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
    };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
        },
      },
    };
    return (
    	<div className="CategoryAdd">
    		<Layout>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                  <Breadcrumb.Item>添加分类</Breadcrumb.Item>
                </Breadcrumb>  
                <Form {...formItemLayout}>
                    <Form.Item  label="分类名称">
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入分类名称!'  }],
                      })(
                        <Input placeholder="分类名称" style={{width:300}} />
                      )}
                    </Form.Item>
                    <Form.Item  label="父级分类">
                      {getFieldDecorator('pid', {
                        rules: [{ required: true, message: '请输选择父级分类!'  }],
                      })(
                        <Select style={{ width:300 }}>
                            <Option value="0">根分类</Option>
                        </Select>
                      )}
                    </Form.Item>
                    <From.Item {...tailFormItemLayout}>
                    <Button 
                        type="primary"
                        loading={this.props.isFetching}
                        onClick={this.handleSubmit}
                    >
                        提交
                    </Button>
                    </From.Item>
                </Form> 
    		</Layout>
    	</div>
        )
    }
}
const WrappedCategoryAdd = Form.create()(CategoryAdd);
const mapStateToProps = (state)=>{
  return {
    isAddFetching:state.get('categroy').get('isAddFetching'),
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleAdd:()=>{
        console.log(values)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WrappedCategoryAdd)