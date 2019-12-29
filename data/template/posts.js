const data = {
  items: [
    {
      sys: {
        id: 'zsefvgy',
        createdAt: '2017-09-21T06:01:35.114Z',
        updatedAt: '2017-09-21T06:01:35.114Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'blogPost',
          },
        },
        locale: 'ja-jp',
      },
      fields: {
        title: 'Blog Title',
        tags: ['JavaScript'],
        url: 'your-awesome-blog-post-url',
        createdDate: `${new Date()}`,
        content: '## Test\n\nContent\n\n## abcd\n\ncontent1123123',
        headerImgur: 'https://i.imgur.com/gf1pKau.png',
        headerBackgroundColor: '4a913c',
        redirectPath: '',
      },
    },
  ],
};

const response = {
  data,
  code: 200,
  message: 'Mock Data',
};

module.exports = response;
