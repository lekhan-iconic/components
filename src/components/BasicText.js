import React from "react";

const BasicText = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.para}</p>
    </div>
  );
};

export default BasicText;
