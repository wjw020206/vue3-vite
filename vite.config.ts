import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build/plugins';
import { createViteProxy } from './build/config';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as Env.ImportMeta;

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('/', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 9528,
      proxy: createViteProxy(viteEnv, configEnv.command === 'serve'),
      open: true,
      fs: {
        // 不使用缓存来检查文件的状态
        cachedChecks: false
      }
    },
    plugins: setupVitePlugins()
  };
});
