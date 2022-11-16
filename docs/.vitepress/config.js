import { applyPlugins } from '@ruabick/md-demo-plugins'

module.exports = {
  title: 'test',
  description: 'test',
  dest: 'docs/.vitepress/dist',
  themeConfig: {
    logo: '',
    nav: [
      {
        text: '组件',
        link: '/common/demo',
      },
    ],
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
  },
}
