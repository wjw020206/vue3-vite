import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import unplugin from './unplugin';
import VueDevTools from 'vite-plugin-vue-devtools';

/** 设置Vite插件 */
export function setupVitePlugins() {
  const plugins: PluginOption = [vue(), VueDevTools(), ...unplugin(), UnoCSS()];
  return plugins;
}
