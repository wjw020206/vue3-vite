/** 根据当前env创建服务配置
 * @param env 当前env环境变量
 */
export function createServiceConfig(env: Env.ImportMeta) {
  const { VITE_SERVICE_BASE_URL, VITE_OTHER_SERVICE_BASE_URL } = env;

  let other = {} as Record<App.Service.OtherBaseURLKey, string>;

  try {
    other = JSON.parse(VITE_OTHER_SERVICE_BASE_URL);
  } catch (error) {
    console.error('VITE_OTHER_SERVICE_BASE_URL不是一个有效的JSON字符串');
  }

  const httpConfig: App.Service.SimpleServiceConfig = {
    baseURL: VITE_SERVICE_BASE_URL,
    other,
  };

  const otherHttpKeys = Object.keys(
    httpConfig.other
  ) as App.Service.OtherBaseURLKey[];

  const otherConfig: App.Service.OtherServiceConfigItem[] = otherHttpKeys.map(
    (key) => {
      return {
        key,
        baseURL: httpConfig.other[key],
        proxyPattern: createProxyPattern(key),
      };
    }
  );

  const config: App.Service.ServiceConfig = {
    baseURL: httpConfig.baseURL,
    proxyPattern: createProxyPattern(),
    other: otherConfig,
  };

  return config;
}

/** 获取后台基础URL代理模式 */
function createProxyPattern(key?: App.Service.OtherBaseURLKey) {
  if (!key) {
    return '/proxy-default';
  }
  return `/proxy-${key}`;
}
