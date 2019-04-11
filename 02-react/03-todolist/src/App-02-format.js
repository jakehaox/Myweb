

import React,{ Component,Fragment } from 'react'
import Item from './Item.js'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		/*
		this.setState({
			list:[...this.state.list,this.state.val]
			val:''
		})
		*/
		/*
		this.setState((preState)=>{
			return{
				list:[...preState.list,preState.val],
				val:''
			}
		})
		*/
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
			
    }
    handleChange(ev){
    	/*
    	this.setState({
    		val:ev.target.value
    	})
    	*/
    	const val = ev.target.value
    	this.setState(()=>({
    		val:ev.target.value
    		val
    	}));

    }
    handleDel(index){
    	const list = [...this.state.list]
    	list.splice(index,1)
    	/*
    	this.setState({
    		list
    	})
    	*/
    	this.setState(()=>({
    		list
    	}));
    }
    getItems(){
    	return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
		})
    }
	render(){
		console.log('')
		return (
			<div className="App">
				<input onChange={this.handleChange} value={this.state.val}/>
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

export default App