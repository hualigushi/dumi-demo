import { defineConfig } from 'dumi';

const repo = 'dumi-demo'; // 项目名
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Foo' }, // components会默认自动对应到src文件夹
    ],
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
