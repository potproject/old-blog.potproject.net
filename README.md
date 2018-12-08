# blog.potproject.net

# Detail

based on [gatsby-starter-calpa-blog](https://github.com/calpa/gatsby-starter-calpa-blog/)

Homepage:Work in Progress...

## Changed

### General

- Japanese Language Supported.
- Adding params `data/template/config.js`.
- **Not Using jQuery** And deleted.  
  `bootstrap.js(jQuery)` -> `Bootstrap.native`  
  `fancybox` -> none

### Config

- `zhihuUsername` is Deleted.

### Contentful Content Model : blogPost

- `tags` fields changed `string` to `Array<String>`.  
  `"Tag1, Tag2"` -> `["Tag1","Tag2"]`

- `jueJinLikeIconLink` And `jueJinPostLink` fields is Deleted.

### Sidebar

- Adding Twiiter Link
- Adding Mastodon Link
- Deleting Mail Link
