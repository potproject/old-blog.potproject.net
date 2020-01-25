const contentfulCDNHost = `https://images.ctfassets.net/${process.env.API_SPACE_ID}`;

// small-square = Small Square (90×90)
// big-square = Big Square (160×160)
// small = Small Thumbnail (160×160)
// medium = Medium Thumbnail (320×320)
// large = Large Thumbnail (640×640)
// huge = Huge Thumbnail (1024×1024)

// OptimizeImages
// Reference: https://www.contentful.com/developers/docs/references/images-api/
const parseImgur = (image, size = '') => {
  if (image && image.indexOf(contentfulCDNHost) === 0) {
    let w = null;
    let h = null;
    switch (size) {
      case 'small-square':
        w = 90;
        h = 90;
        break;
      case 'big-square':
      case 'small':
        w = 160;
        h = 160;
        break;
      case 'medium':
        w = 320;
        h = 320;
        break;
      case 'large':
        w = 640;
        h = 640;
        break;
      case 'huge':
        w = 1024;
        h = 1024;
        break;
      default:
        break;
    }
    const url = new URL(image);
    const params = url.searchParams;
    if (w !== null && h !== null) {
      params.append('w', w);
      params.append('h', h);
    }
    return url.href;
  }
  return image;
};
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
