import React, { ReactNode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import indexStyle from "./index.css";
import ShadowDOM from "./components/ShadowDOM";
import GlobalProvider from "./components/GlobalProvider";

const App = lazy(() => import("./App"));
const MailList = lazy(() => import("./components/MailList"));

const render = (container: HTMLElement, component: ReactNode) => {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ShadowDOM>
        <style>{indexStyle}</style>
        <Suspense fallback="loading">
          <GlobalProvider>{component}</GlobalProvider>
        </Suspense>
      </ShadowDOM>
    </React.StrictMode>
  );
  return () => {
    root.unmount();
  };
};

export default {
  App: (container: HTMLElement, props?: Record<string, any>) => {
    const { basename = "" } = props ?? {};
    return render(container, <App basename={basename as string} />);
  },
  MailList: (container: HTMLElement) => {
    return render(container, <MailList />);
  },
};
