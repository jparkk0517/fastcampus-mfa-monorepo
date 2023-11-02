import { useEffect, useRef } from "react";
import { loadScript } from "ui";

export default function ShoppingList() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    void loadScript({
      url: "http://localhost:7002",
      appName: "web",
    }).then((microApp) => {
      microApp.default["ShoppingList"](ref.current!);
    });
  });
  return <div ref={ref} />;
}
