import React from "react";
import { MicroComponent } from "ui";

export default class MailList extends React.Component {
  render() {
    return (
      <MicroComponent
        url={"http://localhost:7001"}
        appName={"docs"}
        componentName={"MailList"}
      />
    );
  }
}
