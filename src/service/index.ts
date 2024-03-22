import { createServiceConfig } from '@/utils/proxy-service';
import { createRequest } from './request';

const { baseURL, proxyPattern } = createServiceConfig(import.meta.env);

/** 是否网络请求代理 */
const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({
  baseURL: isHttpProxy ? proxyPattern : baseURL
});
