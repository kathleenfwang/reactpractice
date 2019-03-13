import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'; 

class App extends Component {
  render() {
    return (

      <div className="App">
       <TodoItem item = "learn react" completed = {false}/>
       <TodoItem item = "kpop dancing" completed = {true}/>
       <TodoItem item = "drink water" completed = {false}/>

      </div>
    );
  }
}

export default App;