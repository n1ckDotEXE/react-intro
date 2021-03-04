import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

import "./Child1-ul.css";

export class Child1UL extends Component {
  state = {
    toggleInput: "",
  };

  handleToggleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
  };

  render() {
    return (
      <ul>
        {this.props.todoList.map((item) => {
          let strikeThroughClass = `${
            item.isDone ? "strike-through-isDone" : ""
          }`;

          return (
            <React.Fragment key={item.id}>
              {/* <li style={{ textDecoration: item.isDone ? "line-through" : "" }}> */}
              {/* <li className={`${item.isDone ? "strike-through-isDone" : ""}`}> */}
              {/* <li style={{ textDecoration: item.isDone && "line-through" }}> */}
              {/* <li className={strikeThroughClass}>{item.todo}</li>{" "} */}

              {item.isEditToggle ? (
                <input
                  value={this.state.toggleInput}
                  style={{ marginRight: 10 }}
                  onChange={this.handleToggleOnChange}
                  name="toggleInput"
                />
              ) : (
                <li className={strikeThroughClass}>{item.todo}</li>
              )}

              <Button
                propsClassName={"btn btn-success button-style"}
                propsName={"Edit"}
                propsOnClick={() => this.props.handleEditToggle(item.id)}
              />
              <Button
                propsClassName={"btn btn-warning button-style"}
                propsOnClick={() => this.props.handleIsDone(item.id)}
                propsName={"Done"}
              />
              <Button
                propsClassName={"btn btn-danger button-style"}
                propsOnClick={() => this.props.handleDeleteByID(item.id)}
                propsName={"Delete"}
              />
              {/* <button
              className="btn btn-warning button-style"
              onClick={() => props.handleIsDone(item.id)}
            >
              Done
            </button>
            <button
              className="btn btn-danger button-style"
              onClick={() => props.handleDeleteByID(item.id)}
              //onClick={this.handleDeleteByID(item.id)}
            >
              Delete
            </button> */}
              <br />
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}

Child1UL.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteByID: PropTypes.func.isRequired,
  handleIsDone: PropTypes.func.isRequired,
};

export default Child1UL;
