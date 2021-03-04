import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.propsOnClick} className={props.propsClassName}>
      {props.propsName}
    </button>
  );
};

export default Button;
