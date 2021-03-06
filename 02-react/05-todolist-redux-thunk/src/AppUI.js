

import React,{ Component,Fragment } from 'react'
import { Input,Button,Row, Col,List  } from 'antd';


import './App.css'

//UI组件
const AppUI = (props)=>{
	const {handleChange,val,handleAdd,list,handleDel} = props;
	return( 
		<div className="App">
			<Row>
				<Col span={12}>
					<Input 
						onChange={handleChange} 
						value={val}
					/>
				</Col>
				<Col span={12}>
					<Button type="primary" onClick={handleAdd}>新增</Button>
				</Col>
			</Row>
			<List
				style={{marginTop:10}}
			  	bordered
			  	dataSource={list}
			  	renderItem={(item,index) => (<List.Item onClick={()=>{handleDel(index)}}>{item}</List.Item>)}
			/>				
		</div>
	)
}
export default AppUI