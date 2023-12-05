import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  toggleCheckbox = id =>
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));

  deleteTodo = id =>
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleCheckbox={this.toggleCheckbox}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
