import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import unplugin from './unplugin';

/** 设置Vite插件 */
export function setupVitePlugins() {
  const plugins: PluginOption = [vue(), ...unplugin()];
  return plugins;
}
