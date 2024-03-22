import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import type { PluginOption } from 'vite';
import Components from 'unplugin-vue-components/vite';

export default function unplugin(viteEnv: Env.ImportMeta) {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

  const plugins: PluginOption[] = [
    AutoImport({
      imports: ['vue', 'vue-router'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: 'src/typings/auto-imports.d.ts'
    }),
    Components({
      dts: 'src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX })]
    }),
    Icons({
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, svg => svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '))
      },
      autoInstall: true,
      scale: 1,
      defaultClass: 'inline-block',
      compiler: 'vue3'
    })
  ];

  return plugins;
}
