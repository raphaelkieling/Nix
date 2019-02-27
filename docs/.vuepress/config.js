module.exports = {
  home:true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/raphaelkieling/Nix' }
    ],
    sidebar: [
      '/',
      '/start',
      '/advanced',
      '/module',
      '/todo',
      '/contributing'
    ]
  }
}