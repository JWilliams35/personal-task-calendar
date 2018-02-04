import React, {Component} from 'react';
import './css/App.css';
import Header from './component/header.js';
import TodoInput from './component/todoInput';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput />
        </div>
      </div>
    )
  }
}
export default App;