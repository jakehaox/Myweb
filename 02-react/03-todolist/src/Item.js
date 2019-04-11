
import React,{ Component } from 'react'
import propTypes from 'prop-types'
class Item extends Component{
	constructor(props){
		console.log('Item constructor')
		super(props);
	}
	componentWillUnmount(){
		console.log('Item componentWillUnmount' )
	}
	render(){
		const {handleDel,content} = this.props;//结构赋值
 		return(
			<li onClick={handleDel}>
				{content}
			</li>

		)
	}
}
Item.propTypes = {
	handleDel:propTypes.func,
	content:propTypes.string.isRequired
}
Item.defaultProps = {
	content:'睡觉'
}
export default Item
