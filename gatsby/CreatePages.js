const path = require('path');
const moment = require('moment-timezone');

const { config } = require('../data');

const { redirectors = [], maxPostsInPage, timeZone } = config;

module.exports = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  redirectors.forEach(({ fromPath, isPermanent = false, toPath = '/' }) => {
    createRedirect({
      fromPath,
      isPermanent,
      redirectInBrowser: true,
      toPath,
    });
    // Uncomment next line to see forEach in action during build
    console.log(`Redirecting: ${fromPath} To: ${toPath}`);
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPostMarkdown(sort: { fields: [createdDate], order: DESC }) {
          edges {
            node {
              title
              createdDate
              id
              url
              redirectPath
            }
          }
        }
      }
    `).then((result) => {
      if (result.error) {
        console.error(result.error);
        return reject();
      }
      const posts = result.data.allPostMarkdown.edges;
      const pages = Math.ceil(posts.length / maxPostsInPage);

      for (let index = 0; index < pages; index += 1) {
        if (index === 0) {
          createPage({
            path: '/',
            component: path.resolve('./src/templates/page.js'),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              limit: maxPostsInPage,
              skip: index * maxPostsInPage,
            },
          });
        }
        createPage({
          path: `page/${index + 1}`,
          component: path.resolve('./src/templates/page.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            limit: maxPostsInPage,
            skip: index * maxPostsInPage,
          },
        });
      }

      posts.map(({ node }, index) => {
        const { createdDate, url, redirectPath } = node;
        const date = moment(createdDate)
          .tz(timeZone)
          .format('YYYY/MM/DD');
        const postPath = url === 'about' ? url : `${date}/${url}`;
        createPage({
          path: postPath,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            index,
          },
        });
        if (redirectPath) {
          createRedirect({
            fromPath: `/${redirectPath}`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: `/${postPath}`,
          });
          console.log(`Redirecting: /${redirectPath} To: /${postPath}`);
        }
        return true;
      });
      return resolve();
    });
  });
};
