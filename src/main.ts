import { createApp } from 'vue';
import { setupRouter } from './router';
import App from './App.vue';

async function setupApp() {
  // 创建Vue实例
  const app = createApp(App);

  // 注册路由模块
  await setupRouter(app);

  // 挂载
  app.mount('#app');
}

setupApp();
