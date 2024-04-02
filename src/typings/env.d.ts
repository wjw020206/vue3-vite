/**
 * 命名空间 Env
 *
 * 用于声明 import.meta 对象类型
 */
declare namespace Env {
  /** 路由模式类型 */
  type RouterHistoryMode = 'hash' | 'history' | 'memory';

  /** importMeta 接口 */
  interface ImportMeta extends ImportMetaEnv {
    /** 应用基础公共路径 */
    readonly VITE_BASE_URL: string;
    /** 应用名称 */
    readonly VITE_APP_TITLE: string;
    /** 是否启用网络代理 */
    readonly VITE_HTTP_PROXY?: CommonType.YesOrNo;
    /** 后端服务基本地址 */
    readonly VITE_SERVICE_BASE_URL: string;
    /** 其它后台服务基本地址 */
    readonly VITE_OTHER_SERVICE_BASE_URL: string;
    /** 路由历史记录模式 */
    readonly VITE_ROUTER_HISTORY_MODE?: RouterHistoryMode;
    /** 图标前缀开头 */
    readonly VITE_ICON_PREFIX: 'icon';
    /** 本地图片前缀开头 */
    readonly VITE_ICON_LOCAL_PREFIX: 'local-icon';
    /** 构建是否生成sourceMap */
    readonly VITE_SOURCE_MAP?: CommonType.YesOrNo;
  }
}
