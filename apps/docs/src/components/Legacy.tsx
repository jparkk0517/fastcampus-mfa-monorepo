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
        basename: string;
        "time-stamp": number;
      };
    }
  }
}

export default function Legacy() {
  return (
    <micro-custom-element
      time-stamp={new Date().getTime()}
      app-name={"legacy"}
      url={"http://localhost:7003"}
      component-name={"App"}
      is-legacy="true"
      basename="/legacy"
    />
  );
}
