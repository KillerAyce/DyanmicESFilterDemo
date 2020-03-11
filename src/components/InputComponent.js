import React from "react";

const InputComponent = ({ type, onChange, value }) => {
  return (
    <div>
      <input type={type} onChange={onChange} value={value}></input>
    </div>
  );
};

export default InputComponent;
