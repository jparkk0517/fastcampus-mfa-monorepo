import { Component, FC, ReactNode, RefObject, createRef } from "react";
import { MicroAppProps, loadScript } from "./utils";

class _MicroComponent extends Component<MicroAppProps> {
  ref: RefObject<HTMLDivElement>;
  umount?: () => void;
  constructor(props: MicroAppProps) {
    super(props);
    this.ref = createRef<HTMLDivElement>();
    void this.init();
  }

  async init() {
    this.umount && this.umount();
    this.umount = undefined;
    const {
      url,
      appName,
      componentName,
      mainJsName = "main.js",
      props,
    } = this.props;
    const microApp = await loadScript({ url, appName, mainJsName });
    if (!microApp) return;
    const render = microApp.default[`${componentName}`];
    if (!render) return;
    if (!this.ref.current) return;
    this.umount = render(this.ref.current, props);
  }
  componentDidUpdate(): void {
    void this.init();
  }
  componentWillUnmount(): void {
    this.umount && this.umount();
    this.umount = undefined;
  }

  render(): ReactNode {
    return <div ref={this.ref} />;
  }
}

const MicroComponent = _MicroComponent as unknown as FC<MicroAppProps>;
export { MicroComponent };
