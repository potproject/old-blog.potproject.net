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
  name: 'potpro',
  email: '',
  iconUrl: 'https://potproject.net/icon/icon210.png',
  License: 'by',
  url: 'https://blog.potproject.net',
  about: '/2018/05/01/about-me/',
  // Sidebar
  wordings: ['Full-stuck engineer(Not Full-stack)', ''],
  githubUsername: 'potproject',
  twitterUsername: 'potpro',
  mastodonUrl: 'https://mastodon.potproject.net/',
  friends: [],
  // Plugins
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-84737574-3',
  navbarList: [
    //  {
    //    href: '/stats/',
    //    title: 'Blog Stats',
    //  },
  ],
  redirectors: [
    {
      fromPath: '/',
      toPath: '/page/1/',
    },
  ],
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
