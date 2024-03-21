import AutoImport from 'unplugin-auto-import/vite';

export default function unplugin() {
  return [
    AutoImport({
      imports: ['vue', 'vue-router'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: 'src/typings/auto-imports.d.ts',
    }),
  ];
}
