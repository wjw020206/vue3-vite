import { ProxyOptions } from 'vite';
import { createServiceConfig } from '../../src/utils/proxy-service';

/**
 * 创建Vite代理
 * @param env 当前环境变量
 * @param isDev 是否开发模式
 */
export function createViteProxy(env: Env.ImportMeta, isDev: boolean) {
  const isEnableHttpProxy = isDev && env.VITE_HTTP_PROXY === 'Y';

  if (!isEnableHttpProxy) return undefined;

  const { baseURL, proxyPattern, other } = createServiceConfig(env);

  const proxy = createProxyItem({ baseURL, proxyPattern });

  other.forEach(item => {
    Object.assign(proxy, createProxyItem(item));
  });

  return proxy;
}

function createProxyItem(item: App.Service.ServiceConfigItem) {
  const proxy: Record<string, ProxyOptions> = {};

  proxy[item.proxyPattern] = {
    target: item.baseURL,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${item.proxyPattern}`), '')
  };

  return proxy;
}
