import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import "./index.css";

import App from "./App";
import Sns from "./components/Sns";

const render = (container, component) => {
  ReactDOM.render(<React.StrictMode>{component}</React.StrictMode>, container);

  return () => {
    unmountComponentAtNode(container);
  };
};

if (!window["legacy"]) {
  window["legacy"] = {
    default: {
      App: (container, props) => {
        const { basename = "" } = props ?? {};
        return render(container, <App basename={basename} />);
      },
      Sns: (container) => {
        return render(container, <Sns />);
      },
    },
  };
  const customEvent = new CustomEvent("legacy-init", {
    detail: window["legacy"]["default"]["App"],
  });
  document.dispatchEvent(customEvent);
}
