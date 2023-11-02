import { MicroComponent } from "ui";

export default function Web() {
  return (
    <MicroComponent
      url={"http://localhost:7003"}
      appName={"legacy"}
      componentName={"Sns"}
      isLegacy={true}
    />
  );
}
