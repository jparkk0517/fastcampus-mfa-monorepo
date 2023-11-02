import { DetailedHTMLProps, HTMLAttributes } from "react";
import { registCustomElement } from "ui";

registCustomElement({
  name: "micro-custom-element",
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "micro-custom-element": {
        "app-name": string;
        url: string;
        "component-name": string;
        "is-legacy": string;
      };
    }
  }
}

export default function Sns() {
  return (
    <micro-custom-element
      app-name={"legacy"}
      url={"http://localhost:7003"}
      component-name={"Sns"}
      is-legacy="true"
    />
  );
}
