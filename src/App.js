import React, { Component } from 'react'
import Todos from './Todos'
import Header from './Header'
import AddTodo from './AddTodo'

export class App extends Component {
	state = {
		todos : [
			{id:1, content: 'belajar react js'},
			{id:2, content: 'belajar javascript'},
		]
	}

	addTodo = (todo) => {
		const newTodo = {
			id: (Math.random()*100),
			content: todo.content
		}

		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	todoDone = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				return todo.id !== id;
			})
		});
	}

	render() {
		return (
		<div className="container">
			<Header/>
			<Todos todoDone={this.todoDone} todos={this.state.todos}/>
			<AddTodo addTodo={this.addTodo} />
		</div>
		)
	}
}

export default App
