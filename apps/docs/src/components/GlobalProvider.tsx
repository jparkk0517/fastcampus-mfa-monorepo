import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
import { useShadowDOM } from "./ShadowDOM";

const cache = createCache();

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const shadowRoot = useShadowDOM();
  return (
    <Provider store={store}>
      <StyleProvider
        cache={cache}
        container={shadowRoot as unknown as HTMLElement}
      >
        {children}
      </StyleProvider>
    </Provider>
  );
}
