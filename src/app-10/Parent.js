import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Child1UL from "./Child1-ul";
import Child2Form from "./Child2-form";

import "./Parent.css";

class Parent extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "walk the dog",
        isDone: false,
      },
      {
        id: uuidv4(),
        todo: "buy milk",
        isDone: false,
      },
      {
        id: uuidv4(),
        todo: "wash dishes",
        isDone: false,
      },
    ],
    inputTodo: "",
  };

  handleSubmitTodo = (event) => {
    event.preventDefault();

    let newTodoArray = [
      ...this.state.todoList,
      { id: uuidv4(), todo: this.state.inputTodo, isDone: false },
    ];

    this.setState({
      todoList: newTodoArray,
      inputTodo: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputTodo: event.target.value,
    });
  };

  handleDeleteByID = (id) => {
    console.log(id);

    let filteredTodoListArray = this.state.todoList.filter(
      (item) => item.id !== id
    );

    this.setState({
      todoList: filteredTodoListArray,
    });
  };

  handleIsDone = () => {
    console.log(64);
  };

  render() {
    return (
      <div className="parent-container">
        <Child2Form
          //onSubmit={this.handleSubmitTodo}
          handleSubmitTodo={this.handleSubmitTodo}
          handleOnChange={this.handleOnChange}
          inputTodo={this.state.inputTodo}
        />
        <Child1UL
          todoList={this.state.todoList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
        />
      </div>
    );
  }
}

export default Parent;
