/* eslint max-len: 1 */
const moment = require('moment-timezone');
const Remarkable = require('remarkable');
const {
  title, meta, name, url,
} = require('./data/template/config');

const { theme_color: themeColor, short_name: shortName } = meta;
const { config } = require('./data/index');

const { timeZone } = config;
const defaultColor = config.posts.defaultHeaderBackgroundColor;

const { description } = meta;

const extractData = (site, edge) => {
  const url = `${site.siteMetadata.siteUrl}/${moment(edge.node.createdDate)
    .tz(timeZone)
    .format('YYYY/MM/DD')}/${edge.node.url}`;

  const md = new Remarkable({});
  const descriptionContent = md.render(edge.node.content);

  return {
    title: edge.node.title,
    description: descriptionContent,
    date: moment(edge.node.createdDate)
      .tz(timeZone)
      .format('YYYY/MM/DD HH:mm'),
    url,
    guid: url,
  };
};

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title,
    description,
    siteUrl: url,
    author: name,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-webpack-bundle-analyzer',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title,
              description,
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allPostMarkdown } }) => allPostMarkdown.edges.map(edge => extractData(site, edge)),
            query: `
              {
                  allPostMarkdown(limit: 10,sort: {fields: [createdDate], order: DESC}) {
                    edges {
                      node {
                        content
                        title
                        url
                        createdDate
                      }
                    }
                  }
                }
            `,
            output: '/atom.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: shortName,
        start_url: '/',
        background_color: `#${defaultColor}`,
        theme_color: themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-offline',
      options: {
        importWorkboxFrom: 'local',
        cacheId: 'blog-offline',
        skipWaiting: true,
        clientsClaim: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
