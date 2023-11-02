import { useEffect, useRef } from "react";
import { loadScript } from "ui";

export default function Web() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    void loadScript({
      url: "http://localhost:7002",
      appName: "web",
    }).then((microApp) => {
      microApp.default["App"](ref.current!, { basename: "/web" });
    });
  });
  return <div ref={ref} />;
}
