import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const { columns, datas, rowKey, onRowClick } = this.props;
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={rowKey(data)} onClick={() => onRowClick(data)}>
                {columns.map(({ key, render }) => {
                  const value = data[`${key}`];
                  const res = render ? render(value, data) : value;
                  return <td key={key}>{res}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
