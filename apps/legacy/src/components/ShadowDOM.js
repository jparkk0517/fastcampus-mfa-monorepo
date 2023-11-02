import React, { createRef } from "react";
import { createPortal } from "react-dom";

export default class ShadowDOM extends React.Component {
  state = {
    portal: null,
  };

  constructor(props) {
    super(props);
    this.ref = createRef();
  }
  componentDidMount() {
    if (!this.ref.current) return;
    if (this.ref.current.shadowRoot) return;
    this.ref.current.attachShadow({ mode: "open" });
    this.setState({
      portal: createPortal(this.props.children, this.ref.current.shadowRoot),
    });
  }

  render() {
    return <div ref={this.ref}>{this.state.portal}</div>;
  }
}
