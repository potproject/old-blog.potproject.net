const redirect = require('./redirect');

module.exports = {
  title: 'blog.potproject.net',
  githubRepoName: 'potproject/blog.potproject.net',
  maxPostsInPage: 10,
  timeZone: 'Asia/Tokyo',
  availableLanguages: {
    php: 'php',
    go: 'go',
    golang: 'go',
    js: 'javascript',
    javascript: 'javascript',
    html: 'xml',
    css: 'css',
    python: 'python',
    bash: 'bash',
    shell: 'bash',
    yaml: 'yaml',
    yml: 'yaml',
    nginx: 'nginx',
    conf: 'nginx',
    json: 'json',
  },
  meta: {
    description: '独り言とか技術的なこと。',
    keyword: 'IT, blog, ブログ, 日記, JavaScript, PHP, Golang',
    theme_color: '#4a913c',
    favicon: 'https://potproject.net/icon/icon210.png',
    google_site_verification: '',
    short_name: 'potpro',
  },
  posts: {
    defaultHeaderBackgroundColor: '4a913c',
  },
  name: 'potpro (ぽとぷろ)',
  email: '',
  iconUrl: 'https://potproject.net/icon/icon210.png',
  License: 'by',
  url: 'https://blog.potproject.net',
  about: '',
  // Sidebar
  wordings: [
    'Full-stuck engineer(Not Full-stack)',
    'JS/PHP/Go/Docker/Nginxなど。技術または趣味よりの発信ブログです。このブログ自体も自分がnetlify/gatsbyJS/Reactで書いてます。一部の記事はgithubアカウントでコメントできます。',
  ],
  githubUsername: 'potproject',
  twitterUsername: 'potpro',
  mastodonUrl: 'https://mastodon.potproject.net/',
  friends: [],
  // Plugins
  usingGA: true,
  // gaOptimizeId: '', -> move to .env[GA_TRACKING_ID]
  // gaTrackId: '', -> move to .env[GA_OPTIMIZE_ID]
  navbarList: [
    //  {
    //    href: '/stats/',
    //    title: 'Blog Stats',
    //  },
  ],
  redirectors: [...redirect],
  gitalk: {
    // clientID: 'SECRET', -> move to .env[GITHUB_AUTH_CLIENTID]
    // clientSecret: 'SECRET', -> move to .env[GITHUB_AUTH_CLIENTSECRET]
    repo: 'blog.potproject.net',
    owner: 'potproject',
    admin: ['potproject'],
    distractionFreeMode: false,
  },
  stats: {
    title: 'no',
    description: 'no',
    image: 'no',
  },
};
