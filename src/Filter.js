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
      selectedValue: "",
      savedList: { from: 0, size: 10, filters: [] }
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
    let defaultFilterField = this.getDefaultFilterField();
    let defaultOperatorFields = this.getOperatorByTypeId(
      defaultFilterField.dataTypeId
    );
    this.setState({
      selectedFilterField: defaultFilterField,
      currentOperators: defaultOperatorFields,
      selectedOperator: defaultOperatorFields[0]
    });
  };

  getDefaultFilterField = () => {
    return this.state.filterFields[1];
  };

  onColumnFieldChange = event => {
    let id = Number(event.currentTarget.value);
    let selectedFilterField = this.state.filterFields.find(x => x.id == id);
    this.setState({
      currentOperators: this.getOperatorByTypeId(
        selectedFilterField.dataTypeId
      ),
      selectedFilterField,
      selectedValue: ""
    });
  };

  onOperatorFieldChange = event => {
    let id = Number(event.currentTarget.value);
    let selectedOperatorField = this.state.operatorFields.find(x => x.id == id);
    this.setState({
      selectedOperatorField
    });
  };
  onValueChange = (event, params) => {
    this.setState({ selectedValue: event.currentTarget.value });
  };

  onAddFilter = () => {
    const {
      selectedFilterField,
      selectedOperator,
      savedList: { filters },
      selectedValue
    } = this.state;

    let index = filters.length + 1;
    let filter = {
      index,
      operatorId: selectedOperator.id,
      filterFieldId: selectedFilterField.id,
      value: selectedValue
    };
    let defaultFilterField = this.getDefaultFilterField();
    this.setState({
      savedList: { filters: [...filters, filter] },
      selectedFilterField: defaultFilterField,
      currentOperators: this.getOperatorByTypeId(defaultFilterField.dataTypeId),
      selectedOperator: this.getOperatorByTypeId(
        defaultFilterField.dataTypeId
      )[0],
      selectedValue: ""
    });
  };

  render() {
    const {
      filterFields,
      operatorFields,
      currentOperators,
      selectedFilterField,
      selectedValue,
      savedList: { filters },
      selectedOperator
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
          <select
            style={{ float: "left" }}
            onChange={this.onOperatorFieldChange}
            value={selectedOperator.id}
          >
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
          <button onClick={this.onAddFilter}> Add Filter</button>
        </div>

        <hr />
        <table>
          <thead>
            <th>Field Name</th>
            <th>operator Name</th>
            <th>Value</th>
          </thead>
          <tbody>
            {filters.map(f => (
              <tr>
                <td>{filterFields.find(x => x.id == f.filterFieldId).name} </td>
                <td> {operatorFields.find(x => x.id == f.operatorId).name} </td>
                <td> {f.value} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
