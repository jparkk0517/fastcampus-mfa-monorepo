import { loadLegacyScript, loadScript } from "./utils";

function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (match, letter: string) => {
    return letter.toUpperCase();
  });
}

class MicroCustomComponent extends HTMLElement {
  unmount?: () => void;
  constructor() {
    super();
  }

  static observedAttributes: string[] = [
    "url",
    "app-name",
    "component-name",
    "time-stamp",
  ];

  getProps(): Record<string, any> {
    const propsKeys = Array.from(this.attributes)
      .filter(
        (attribute) =>
          !MicroCustomComponent.observedAttributes.includes(attribute.name)
      )
      .map((attribute) => attribute.name);

    const props = propsKeys.reduce((prev, key) => {
      return {
        ...prev,
        [`${kebabToCamelCase(key)}`]: this.getAttribute(key),
      };
    }, {});

    return props;
  }

  async render(): Promise<void> {
    const url = this.getAttribute("url");
    const appName = this.getAttribute("app-name");
    const isLegacy = Boolean(this.getAttribute("is-legacy") ?? "false");
    const componentName = this.getAttribute("component-name");

    if (
      url === undefined ||
      appName === undefined ||
      componentName === undefined
    ) {
      throw new Error(`url, app-name, component-name 은 필수값입니다.`);
    }
    if (url && appName && componentName) {
      this.unmount && this.unmount();
      this.unmount = undefined;
      const microApp = isLegacy
        ? await loadLegacyScript({ url, appName })
        : await loadScript({ url, appName });
      if (!microApp) return;

      const render = microApp.default[`${componentName}`];
      if (!render) return;
      const props = this.getProps();
      this.unmount = render(this, { ...props, cssPaths: microApp.cssPaths });
    }
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) void this.render();
  }
  disconnectedCallback() {
    this.unmount && this.unmount();
    this.unmount = undefined;
  }
}

interface RegistCustomElementProps {
  name: string;
  observedAttributes?: string[];
}

export function registCustomElement({
  name,
  observedAttributes = [],
}: RegistCustomElementProps) {
  if (!customElements.get(name)) {
    customElements.define(
      name,
      class extends MicroCustomComponent {
        static observedAttributes: string[] = [
          ...super.observedAttributes,
          ...observedAttributes,
        ];
      }
    );
  }
}
