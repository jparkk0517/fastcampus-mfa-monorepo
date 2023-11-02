import React, {
  ReactNode,
  ReactPortal,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const shadowRootContext = createContext<ShadowRoot | null | undefined>(null);

export const useShadowDOM = () => {
  const shadowRoot = useContext(shadowRootContext);
  return shadowRoot;
};

export default function ShadowDOM({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [portal, setPortal] = useState<ReactPortal | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.shadowRoot) return;

    ref.current.attachShadow({ mode: "open" });
  });

  useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.shadowRoot) return;
    const _portal = createPortal(children, ref.current.shadowRoot);
    setPortal(_portal);
  }, [children]);

  return (
    <shadowRootContext.Provider value={ref.current?.shadowRoot}>
      <div ref={ref}>{portal}</div>
    </shadowRootContext.Provider>
  );
}
