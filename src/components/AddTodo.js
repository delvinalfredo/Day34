import React, { Component } from 'react'
import './AddTodo.css'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      todoTitle: '',
      todoDescription: ''
    }
    this.clickAdd = this.clickAdd.bind(this)
  }

  updateTitle(event) {
    const val = event.target.value;
    this.setState({
      ...this.state,
      todoTitle: val
    })
  }

  updateDescription(event) {
    const val = event.target.value;
    this.setState({
      ...this.state,
      todoDescription: val
    })
  }

  clickAdd() {
    const newTodo = {
      title: this.state.todoTitle,
      description: this.state.todoDescription
    }
    this.props.updateTodoList(newTodo)
    this.setState({
      todoTitle: '',
      todoDescription: ''
    })
  }

  render() {
    return (
      <div className='add-todo-container'>
        <input value={this.state.todoTitle} onChange={event => this.updateTitle(event)} className='add-todo-title' type="text" placeholder='Todo Title'></input>
        <input value={this.state.todoDescription} onChange={event => this.updateDescription(event)} className='add-todo-description' type="text" placeholder='Todo Description'></input>
        <button onClick={this.clickAdd} className='add-todo-button'>Add</button>
      </div>
    )
  }
}

export default AddTodo
