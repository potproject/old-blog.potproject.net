// s = Small Square (90×90)
// b = Big Square (160×160)
// t = Small Thumbnail (160×160)
// m = Medium Thumbnail (320×320)
// l = Large Thumbnail (640×640)
// h = Huge Thumbnail (1024×1024)

// TODO: Contentful Image API optimization
/* eslint-disable no-unused-vars */
const parseImgur = (image, size = 'large') => image;
const parseTitle = (title, text) => `title="${title || text}"`;

const parseImageTag = ({ href, title, text }) => `<img class="lozad d-block mx-auto" data-src=${parseImgur(href, 'large')} ${parseTitle(
  title,
  text,
)} />`;

const getGalleryImage = ({ href, title, text }) => parseImageTag({
  href,
  title,
  text,
});

module.exports = {
  parseImgur,
  parseImageTag,
  getGalleryImage,
};
