import React, { Component } from "react";
import * as Data from "./data";
import ValueComponent from "./components/ValueComponent";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filterFields: this.getFilterFields(),
      operatorFields: this.getOperatorFields(),
      currentOperators: [],
      selectedOperator: {},
      selectedFilterField: {},
      selectedValue: null
    };
  }

  getFilterFields = () => {
    return Data.filterFields.map(x => {
      return {
        ...x,
        name: Data.columnFields.find(C => C.id == x.columnFieldId).name
      };
    });
  };

  getOperatorFields = datatypeID => {
    return Data.fieldOperator.map(f => {
      return {
        ...f,
        name: Data.operator.find(o => o.id == f.operatorId).name
      };
    });
  };

  getOperatorByTypeId = typeid => {
    return this.state.operatorFields.filter(x => x.dataTypeId == typeid);
  };

  componentDidMount = () => {
    this.setState({
      selectedFilterField: this.state.filterFields[1],
      currentOperators: this.getOperatorByTypeId(
        this.state.filterFields[1].dataTypeId
      )
    });
  };

  onColumnFieldChange = event => {
    let id = Number(event.currentTarget.value);
    let selectedFilterField = this.state.filterFields.find(x => x.id == id);
    this.setState({
      currentOperators: this.getOperatorByTypeId(
        selectedFilterField.dataTypeId
      ),
      selectedFilterField,
      selectedValue: null
    });
  };
  onValueChange = (event, params) => {
    this.setState({ selectedValue: event.currentTarget.value });
  };

  render() {
    const {
      filterFields,
      operatorFields,
      currentOperators,
      selectedFilterField,
      selectedValue
    } = this.state;
    return (
      <div>
        <div style={{ float: "left" }}>
          <select
            value={selectedFilterField.id}
            onChange={this.onColumnFieldChange}
          >
            {filterFields.map(f => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select style={{ float: "left" }}>
            {currentOperators.map(f => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <ValueComponent
            value={selectedValue}
            dataTypeId={selectedFilterField.dataTypeId}
            onChange={this.onValueChange}
            options={Data.statuses}
          />
        </div>

        <div>
          <button> Add Filter</button>
        </div>
      </div>
    );
  }
}
