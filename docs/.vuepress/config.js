module.exports = {
  title: 'Nix',
  description: 'Make a API in seconds',
  home:true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'raphaelkieling/Nix',
    repoLabel: 'Contribute!',
    sidebar: [
      '/',
      '/start',
      '/advanced',
      '/module',
      '/deploy',
      '/todo',
      '/contributing'
    ]
  }
}