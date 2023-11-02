import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { buttonType = "confirm", children, ...props } = this.props;
    return (
      <button
        {...props}
        type="button"
        className={`.button button-${buttonType}`}
      >
        {children}
      </button>
    );
  }
}
