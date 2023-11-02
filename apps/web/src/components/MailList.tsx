import { useEffect, useRef } from "react";
import { loadScript } from "ui";

export default function MailList() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    void loadScript({
      url: "http://localhost:7001",
      appName: "docs",
    }).then((microApp) => {
      microApp.default["MailList"](ref.current!);
    });
  });
  return <div ref={ref} />;
}
