import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

/** 设置Vite插件 */
export function setupVitePlugins(viteEnv: Env.ImportMeta) {
  const plugins: PluginOption = [vue()];
  return plugins;
}
