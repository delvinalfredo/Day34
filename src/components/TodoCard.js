import React, { Component } from 'react';
import './TodoCard.css';

class TodoCard extends Component {
  constructor() {
    super()
    this.clickDelete = this.clickDelete.bind(this)
  }

  clickDelete() {
    console.log(this.props.todo)
    this.props.deleteTodoList(this.props.todo)
  }

  render() {
    return (
      <div className='card-container'>
        <div className='content-container'>
          <h2>{this.props.todo.title}</h2>
          <p>{this.props.todo.description}</p>
        </div>
        <button onClick={this.clickDelete}>Delete</button>
      </div>
    )
  }
}

export default TodoCard;