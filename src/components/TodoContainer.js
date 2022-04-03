import React, { Component } from 'react'
import './TodoContainer.css';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard'

class TodoContainer extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [
      ]
    }

    this.updateTodoList = this.updateTodoList.bind(this)
    this.deleteTodoList = this.deleteTodoList.bind(this)
  }

  updateTodoList(todo) {
    const newTodo = {
      index: this.state.todoList.length + 1,
      title: todo.title,
      description: todo.description
    }
    const newTodoList = [
      ...this.state.todoList,
      newTodo
    ]
    this.setState({
      todoList: newTodoList
    })
  }

  deleteTodoList(todo) {
    const newTodoList = this.state.todoList.filter(item => item.title !== todo.title)
    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    return (
      <section>
        <AddTodo updateTodoList={this.updateTodoList} />
        {this.state.todoList.map(todo => {
          return (
            <TodoCard todo={todo} key={todo.index} deleteTodoList={this.deleteTodoList} />
          )
        })}
      </section>
    )
  }
}

export default TodoContainer;