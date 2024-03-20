/**
 * 命名空间 Env
 *
 * 用于声明 import.meta 对象类型
 */
declare namespace Env {
  /** importMeta 接口 */
  interface ImportMeta extends ImportMetaEnv {
    /** 应用基础公共路径 */
    readonly VITE_BASE_URL: string;
    /** 应用名称 */
    readonly VITE_APP_TITLE: string;
  }
}
