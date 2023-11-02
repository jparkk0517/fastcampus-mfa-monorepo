export interface MicroAppProps {
  url: string;
  appName: string;
  componentName: string;
  props?: Record<string, any>;
  mainJsName?: string;
  isLegacy?: boolean;
}

export interface MicroApp {
  default: Record<
    string,
    (container: HTMLElement, props?: Record<string, any>) => () => void
  >;
  cssPaths?: string[];
}

interface AssetManifest {
  files: Record<string, string>;
  entrypoints: string[];
}

async function getAssetManifest(url: string): Promise<AssetManifest> {
  const { entrypoints, files } = await fetch(
    `${url}/asset-manifest.json`
  ).then<AssetManifest>((res) => res.json());
  return { entrypoints, files };
}

export const loadLegacyScript = async ({
  url,
  appName,
}: Omit<MicroAppProps, "componentName" | "props">): Promise<MicroApp> => {
  const { entrypoints } = await getAssetManifest(url);
  const mainJsPath = `${url}/${
    entrypoints.find((entrypoint) => entrypoint.endsWith(".js")) ?? ""
  }`;
  const cssPaths = entrypoints
    .filter((entrypoint) => entrypoint.endsWith(".css"))
    .map((cssPath) => `${url}/${cssPath}`);

  const microApp = window[`${appName}`];
  if (microApp) {
    return Promise.resolve({ ...microApp, cssPaths });
  }

  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement("script");
      script.src = `${mainJsPath}`;
      script.onload = () => {
        const microApp = window[`${appName}`];
        if (microApp) {
          resolve({ ...microApp, cssPaths });
        } else {
          reject(new Error(`${appName} loading 오류`));
        }
      };
      script.onerror = () => {
        reject(new Error(`${appName} loading 오류`));
      };

      document.head.append(script);
    } catch (error) {
      reject(new Error(`${appName} loading 오류`));
    }
  });
};

export const loadScript = async ({
  url,
  appName,
  mainJsName = "main.js",
}: Omit<MicroAppProps, "componentName" | "props">): Promise<MicroApp> => {
  const microApp = window[`${appName}`];
  if (microApp) {
    return Promise.resolve(microApp);
  }

  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement("script");
      script.src = `${url}/${mainJsName}`;
      script.onload = () => {
        const microApp = window[`${appName}`];
        if (microApp) {
          resolve(microApp);
        } else {
          reject(new Error(`${appName} loading 오류`));
        }
      };
      script.onerror = () => {
        reject(new Error(`${appName} loading 오류`));
      };

      document.head.append(script);
    } catch (error) {
      reject(new Error(`${appName} loading 오류`));
    }
  });
};

declare global {
  interface Window extends Record<string, MicroApp | undefined> {}
}
