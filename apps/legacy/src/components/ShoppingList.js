import React from "react";
import { MicroComponent } from "ui";

export default class ShoppingList extends React.Component {
  render() {
    return (
      <MicroComponent
        url={"http://localhost:7002"}
        appName={"web"}
        componentName={"ShoppingList"}
      />
    );
  }
}
