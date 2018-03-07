import React, {Component} from 'react';
import './css/App.css';
import Header from './component/header.js';
import TodoInput from './component/Todo.js';

class App extends Component {
  constructor{props}{
    super(props);

    this.state= {
      todos:{
        {id: 0, text: "Continue working on this"},
        {id: 1, text: "Buy food"},
        {id: 2, text: "Go to sleep at a proper time"}
      },
      nextId: 3 
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    console.log("Task added: ",todoText);
  }

  removeTodo(id){
    console.log("Task removed: ", id);
  }
  
  render() {
    return(
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo}/>
        </div>
      </div>
    )
  }
}
export default App;