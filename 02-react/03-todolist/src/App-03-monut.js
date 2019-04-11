

import React,{ Component,Fragment } from 'react'
import Item from './Item.js'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(nextProps,prevState){
		console.log('App getDerivedStateFromProps(nextProps,prevState)',nextProps,prevState);
		return {
		
		}
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log('App shouldComponentUpdate(nextProps,nextState)',nextProps,nextState);
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps,preState)
	}
	componentDidUpdate(prevProps,prevState,snapshot){
		console.log('App componentDidUpdate(prevProps,prevState,snapshot) ',prevProps,prevState,snapshot)
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		})
			
    }
    handleChange(ev){
    	const val = this.input.value
    	this.setState(()=>({
    		val
    	}));

    }
    handleDel(index){
    	const list = [...this.state.list]
    	list.splice(index,1)
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
		console.log('.App render...')
		return (
			<div className="App">
				<input 
					onChange={this.handleChange} 
					value={this.state.val}
					ref={(input)=>{
						this.input = input
					}}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul ref={(ul)=>{this.ul=ul}}>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

export default App