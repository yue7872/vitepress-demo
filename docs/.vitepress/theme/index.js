import Theme from 'vitepress/theme';
import Test from '../components/Test.vue';
import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

// import组件

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock);
    app.component('Test', Test) // 注册组件;
  },
}
