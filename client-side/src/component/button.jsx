import React from "react";

function Button(props) {
  return (
    <>
      <button className="custom-btn btn-3" type={props.type}>
        <span>{props.name}</span>
      </button>
    </>
  );
}

export default Button;
