import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build/plugins';

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as Env.ImportMeta;
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('/', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: setupVitePlugins(viteEnv),
  };
});
