import { MicroComponent } from "ui";

export default function Legacy() {
  return (
    <MicroComponent
      url={"http://localhost:7003"}
      appName={"legacy"}
      componentName={"App"}
      props={{ basename: "/legacy" }}
      isLegacy
    />
  );
}
