import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import "./index.css";

import App from "./App";
import Sns from "./components/Sns";
import ShadowDOM from "./components/ShadowDOM";

const render = (container, component, cssPaths) => {
  ReactDOM.render(
    <React.StrictMode>
      <ShadowDOM>
        {cssPaths.map((cssPath) => (
          <link href={cssPath} rel="stylesheet"></link>
        ))}
        {component}
      </ShadowDOM>
    </React.StrictMode>,
    container
  );

  return () => {
    unmountComponentAtNode(container);
  };
};

if (!window["legacy"]) {
  window["legacy"] = {
    default: {
      App: (container, props) => {
        const { basename = "", cssPaths = [] } = props ?? {};
        return render(container, <App basename={basename} />, cssPaths);
      },
      Sns: (container, props) => {
        const { cssPaths = [] } = props ?? {};
        return render(container, <Sns />, cssPaths);
      },
    },
  };
  const customEvent = new CustomEvent("legacy-init", {
    detail: window["legacy"]["default"]["App"],
  });
  document.dispatchEvent(customEvent);
}
