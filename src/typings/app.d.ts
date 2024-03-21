declare namespace App {
  namespace Service {
    /** 其它基本URL键 */
    type OtherBaseURLKey = 'demo';

    /** 服务配置项 */
    interface ServiceConfigItem {
      /** 后台服务基本地址 */
      baseURL: string;
      /** 后台服务基本地址代理模式 */
      proxyPattern: string;
    }

    /** 其它服务配置项 */
    interface OtherServiceConfigItem extends ServiceConfigItem {
      key: OtherBaseURLKey;
    }

    /** 后台服务配置 */
    interface ServiceConfig extends ServiceConfigItem {
      other: OtherServiceConfigItem[];
    }

    /** 简单服务配置 */
    interface SimpleServiceConfig extends Pick<ServiceConfigItem, 'baseURL'> {
      other: Record<OtherBaseURLKey, string>;
    }
  }
}
