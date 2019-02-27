module.exports = {
  home:true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    repo: 'raphaelkieling/Nix',
    repoLabel: 'Contribute!',
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