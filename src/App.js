import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
