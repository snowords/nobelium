const BLOG = {
  title: "Snoword's Blog",
  author: 'Snoword',
  email: '33chijian@gmail.com',
  link: 'https://snoword.online',
  description: '如来说世界，皆非世界，是名世界。',
  lang: 'zh-CN',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2020, // if leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showAbout: true, // WIP
  showArchive: true, // WIP
  autoCollapsedNavBar: false, // the automatically collapsed navigation bar
  socialLink: 'https://twitter.com/snoword1024',
  githubLink: 'https://github.com/snowords',
  seo:{
    keywords: ['Blog', 'Website', 'Notion', 'Snoword'],
    googleSiteVerification: 'beUFeNNyZVeRqPbjnjIDdt6d6EFxtwYhAcynXXLE9u0' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  changeLogPageId: 'cb7d2e9d431749a89506b4300b5e9e98', // 更新日志的页面ID
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      // measurementId: 'G-BGZTQRN52S' // e.g: G-XXXXXXXXXX
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'Resume', // The repository of store comments
      owner: 'snowords',
      admin: ['snowords'],
      clientID: 'e608fba0dff44a15ed1a',
      clientSecret: '4a7021f0867c0fef3608463089918387b2001d51',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '048128b5-ea56-41bf-b035-9d95fa314c65', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
