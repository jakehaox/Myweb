/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:09:22
*/

import React,{ Component } from 'react'

import Layout from 'common/layout'
import { Row, Col } from 'antd';


import './index.css'

class Home extends Component{
    render(){
        return (
        	<div className="Home">
        		<Layout>
				    <Row>
				      <Col span={8}>col-8</Col>
				      <Col span={8}>col-8</Col>
				      <Col span={8}>col-8</Col>
				    </Row>        		
				</Layout>
        	</div>
        )
    }
}


export default Home