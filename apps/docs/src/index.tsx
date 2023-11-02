import React, { ReactNode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import indexStyle from "./index.css";
import ShadowDOM from "./components/ShadowDOM";

const App = lazy(() => import("./App"));

const render = (container: HTMLElement, component: ReactNode) => {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ShadowDOM>
        <style>{indexStyle}</style>
        <Suspense fallback="loading">{component}</Suspense>
      </ShadowDOM>
    </React.StrictMode>
  );
};

export default {
  App: (container: HTMLElement) => {
    render(container, <App />);
  },
};
