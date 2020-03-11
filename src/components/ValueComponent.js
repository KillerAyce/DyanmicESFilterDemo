import React from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const ValueComponent = props => {
  return <div>{renderComponentByType(props)}</div>;
};

function getSelectOptions(options) {
  return options.map(o => (
    <option key={o.id} value={o.id}>
      {o.text}
    </option>
  ));
}

function renderComponentByType({ onChange, dataTypeId, value, options }) {
  switch (dataTypeId) {
    case 2:
      return <InputComponent value={value} type="text" onChange={onChange} />;

    case 1:
      return <InputComponent value={value} type="number" onChange={onChange} />;

    case 4:
      return <InputComponent value={value} type="date" onChange={onChange} />;

    case 6:
      return (
        <SelectComponent
          value={value}
          options={getSelectOptions(options)}
          onChange={onChange}
        />
      );

    default:
      break;
  }
}

export default ValueComponent;
