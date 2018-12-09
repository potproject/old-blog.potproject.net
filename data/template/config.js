const redirect = require('./redirect');

module.exports = {
  title: 'blog.potproject.net',
  githubRepoName: 'potproject/blog.potproject.net',
  maxPostsInPage: 10,
  meta: {
    description: '独り言とか技術的なこと。',
    keyword: 'IT, blog, ブログ, 日記, JavaScript, PHP, Golang',
    theme_color: '#384f7c',
    favicon: 'https://potproject.net/icon/icon210.png',
    google_site_verification: '',
  },
  posts: {
    defaultHeaderBackgroundColor: '4a913c',
  },
  name: 'potpro',
  email: '',
  iconUrl: 'https://potproject.net/icon/icon210.png',
  License: 'by',
  url: 'https://blog.potproject.net',
  about: '',
  // Sidebar
  wordings: ['Full-stuck engineer(Not Full-stack)', ''],
  githubUsername: 'potproject',
  twitterUsername: 'potpro',
  mastodonUrl: 'https://mastodon.potproject.net/',
  friends: [],
  // Plugins
  usingGA: false,
  gaOptimizeId: '',
  gaTrackId: '',
  navbarList: [
    //  {
    //    href: '/stats/',
    //    title: 'Blog Stats',
    //  },
  ],
  redirectors: [...redirect],
  gitalk: {
    clientID: 'ff1d48da242250d67f88',
    clientSecret: '2881c83d3bb83f54c7c5cbd0a9bdc89edb2b6a29',
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
