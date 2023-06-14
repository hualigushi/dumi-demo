import { defineConfig } from 'dumi';

const repo = 'dumi-demo'; // 项目名
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
    // nav: {
    //   mode: 'override',
    //   value: [
    //     {
    //       title: 'Docs',
    //       link: '/docs/api/api-api',
    //       children: [
    //         {
    //           title: 'API',
    //           link:'/docs/api/api-api',
    //         },
    //         {
    //           title: 'Guides',
    //           link:'/docs/guides/guides-debug',
    //           // children: [
    //           //   {
    //           //     title: 'Guides',
    //           //     link:'/docs/guides/guides-debug'
    //           //   }
    //           // ],
    //         },
    //       ]
    //     },
    //     {
    //       title: 'Blog',
    //       link: '/blog/umi-4-rc',
    //     },
    //   ]
    // },
  },
    base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
    publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  });
