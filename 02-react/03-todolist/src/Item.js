
import React,{ Component } from 'react'
import propTypes from 'prop-types'
class Item extends Component{

	render(){
		const {handleDel,content} = this.props;
 		return(
			<li onClick={handleDel}>
				{content}
			</li>

		)
	}
}
Item.propType = {
	handleDel:propTypes.func
	content:propTypes.string.isRequired
}
Item.defaultProps = {
	content:{}
}
export default Item
