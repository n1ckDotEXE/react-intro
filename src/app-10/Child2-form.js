import React, { Component } from "react";

class Child2Form extends Component {
  render() {
    //this.props

    return (
      <form onSubmit={this.props.handleSubmitTodo}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Todo"
            name="inputTodo"
            onChange={this.props.handleOnChange}
            value={this.props.inputTodo}
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Child2Form;
