import { MicroComponent } from "ui";

export default function Web() {
  return (
    <MicroComponent
      url={"http://localhost:7002"}
      appName={"web"}
      componentName={"App"}
      props={{ basename: "/web" }}
    />
  );
}
