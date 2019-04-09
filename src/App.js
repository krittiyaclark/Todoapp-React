import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Watch React tutorials'},
      {id: 2, content: 'Build React projects'},
    ]
  }
  deleteTodo = (id) => {
    // Store the array to the variable and filter out
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos 
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        {/* passing the todos array to the component */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
