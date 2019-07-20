import React, { Component } from 'react'

export class Todos extends Component {
    render() {
        const todoList = this.props.todos.map((todo) => {
            return (
                <li className="list-group-item" onClick={() => {this.props.todoDone(todo.id)}} style={{ cursor: "pointer" }} key={todo.id}>{todo.content}</li>
            );
        });
    
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    {todoList}
                </ul>
            </div>
        )
    }
}

export default Todos
