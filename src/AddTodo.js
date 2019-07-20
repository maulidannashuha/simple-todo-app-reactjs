import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        content : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        });
    }

    render() {
        return (
            <form className="mt-1" onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={this.state.content} onChange={this.handleChange} id="content" className="form-control" autoComplete="off"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary"> Tambah</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddTodo
