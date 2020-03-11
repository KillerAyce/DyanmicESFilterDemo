import React from "react";

const SelectComponent = ({ onChange, value, options }) => {
  return (
    <div>
      <select onChange={onChange} value={value}>
        {options}
      </select>
    </div>
  );
};

export default SelectComponent;
