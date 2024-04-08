/** 根据当前env创建服务配置
 * @param env 当前env环境变量
 */
export function createServiceConfig(env: Env.ImportMeta) {
  const { VITE_SERVICE_BASE_URL, VITE_OTHER_SERVICE_BASE_URL, VITE_APP_BASE_API } = env;

  let other = {} as Record<string, string>;

  try {
    other = JSON.parse(VITE_OTHER_SERVICE_BASE_URL);
  } catch (error) {
    console.error('VITE_OTHER_SERVICE_BASE_URL不是一个有效的JSON字符串');
  }

  const httpConfig: App.Service.SimpleServiceConfig = {
    baseURL: VITE_SERVICE_BASE_URL,
    other
  };

  const otherHttpKeys = Object.keys(httpConfig.other) as string[];

  const otherConfig: App.Service.OtherServiceConfigItem[] = otherHttpKeys.map(key => {
    return {
      key,
      baseURL: httpConfig.other[key],
      proxyPattern: `${VITE_APP_BASE_API}-${key}`
    };
  });

  const config: App.Service.ServiceConfig = {
    baseURL: httpConfig.baseURL,
    proxyPattern: VITE_APP_BASE_API,
    other: otherConfig
  };

  return config;
}
