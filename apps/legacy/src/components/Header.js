import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: "mailList",
    label: <Link to="/mailList">mailList</Link>,
  },
  {
    key: "shoppingList",
    label: <Link to="/shoppingList">shoppingList</Link>,
  },
  {
    key: "sns",
    label: <Link to="/sns">sns</Link>,
  },
];

export default class Header extends React.Component {
  state = {
    key: "",
  };
  handleChangeKey(key) {
    this.setState({ key });
  }

  render() {
    return (
      <div className="header">
        {items.map((item) => (
          <div
            key={item.key}
            className={`header-box ${
              item.key === this.state.key ? "selected" : ""
            }`}
            onClick={() => this.handleChangeKey.bind(this)(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}
