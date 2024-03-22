/** 获取静态资源文件
 * @param url `../assets/imgs/` 下的文件路径
 */
export function getAssetsFile(url: string) {
  return new URL(`../assets/imgs/${url}`, import.meta.url).href;
}
