import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

type RefreshRequestQueue = (config: AxiosRequestConfig) => void;

/** 封装axios请求类 */
export default class CustomAxiosInstance {
  instance: AxiosInstance;

  backendConfig: Service.BackendResultConfig;

  /** 是否刷新 */
  isRefreshing: boolean;

  retryQueues: RefreshRequestQueue[];

  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      codeKey: 'code',
      dataKey: 'data',
      msgKey: 'message',
      successKey: 200,
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
    this.isRefreshing = false;
    this.retryQueues = [];
  }

  /** 设置拦截器 */
  setInterceptor() {
    /** 设置请求拦截器 */
    this.instance.interceptors.request.use(
      (config) => {
        const handleConfig = { ...config };
        return handleConfig;
      },
      (axiosError: AxiosError) => {
        return Promise.reject(axiosError);
      }
    );
    /** 设置响应拦截器 */
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (axiosError: AxiosError) => {
        return Promise.reject(axiosError);
      }
    );
  }
}
