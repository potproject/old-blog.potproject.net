import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import Tag from '../../components/Tag';
import Header from '../../components/Header';
import ShareBox from '../../components/ShareBox';
import SEO from '../../components/SEO';

import { url as baseURL } from '../../../data';

import wrapLayout from '../../api/layout';

const parseDate = date => dayjs(date)
  .locale('ja')
  .format('YYYY/MM/DD');
const tagCenter = 'col-12 col-md-10 col-lg-8 m-auto';

const getTag = (item) => {
  const { url, createdDate } = item.node;
  let { tags } = item.node;
  if (!tags) {
    tags = [];
  }
  const date = parseDate(createdDate);
  const postPath = url === 'about' ? url : `${date}/${url}`;
  return {
    tags,
    title: item.node.title,
    url: postPath,
    createdDate,
  };
};

const lenOf = (array = []) => array.length;

const Item = ({ url = '', title = '', createdDate = '' }) => (
  <li key={title}>
    <Link href={url} to={url}>
      {`${title} (${parseDate(createdDate)})`}
    </Link>
  </li>
);

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  createdDate: PropTypes.string,
};

Item.defaultProps = {
  url: '',
  title: '',
  createdDate: '',
};

const TagSession = ({ tag = 'tag', articles = [], isActive = false }) => (
  <div className={tagCenter} id={tag}>
    <h3
      style={{
        color: isActive ? 'red' : 'black',
      }}
    >
      {tag}
    </h3>
    <ol>
      {articles.map(article => (
        <Item
          url={article.url}
          title={article.title}
          createdDate={article.createdDate}
          key={article.title}
        />
      ))}
    </ol>
  </div>
);

TagSession.propTypes = {
  tag: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
  isActive: PropTypes.bool,
};

TagSession.defaultProps = {
  tag: '',
  articles: [],
  isActive: false,
};

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
};

class TagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {},
      showAllTags: false,
    };
  }

  componentWillMount() {
    const tags = {};
    const { data } = this.props;
    const { edges } = data.tags;
    const temp = edges.map(item => getTag(item));

    temp.forEach((x) => {
      const { title, url, createdDate } = x;

      for (let i = 0, n = x.tags.length; i < n; i += 1) {
        const item = { title, url, createdDate };
        if (tags[x.tags[i]]) {
          tags[x.tags[i]].push(item);
        } else {
          tags[x.tags[i]] = [item];
        }
      }
    });
    this.setState({ tags });
  }

  compareTag(a, b) {
    const { tags } = this.state;
    return lenOf(tags[b]) - lenOf(tags[a]);
  }

  toggleAllTags() {
    this.setState(state => ({
      showAllTags: !state.showAllTags,
    }));
  }

  render() {
    const { showAllTags, tags } = this.state;
    const { data, location } = this.props;
    const { header } = data;

    const rawTags = Object.keys(tags);
    const sortedTags = rawTags.sort((a, b) => this.compareTag(a, b));

    const hotTags = !showAllTags ? rawTags.slice(0, 5) : rawTags;

    const tagUrl = `${baseURL}/tags`;

    return (
      <div className="row">
        <Header
          img={header.headerImage}
          title={header.title}
          titleVisible={header.titleVisible}
          subTitle={header.subTitle}
          subTitleVisible={header.subTitleVisible}
        />

        <div className={tagCenter}>
          <h2 style={{ ...style, justifyContent: 'space-between' }}>


            最も人気のあるタグ：
            <button type="button" className="btn btn-info" onClick={() => this.toggleAllTags()}>


              すべてのタグを表示する
            </button>
          </h2>

          <div
            style={{
              ...style,
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}
          >
            {hotTags.map(item => (
              <Tag name={item} count={tags[item].length} key={item} />
            ))}
          </div>
        </div>

        {sortedTags.map(tag => (
          <TagSession
            tag={tag}
            articles={tags[tag].filter((v, i, a) => a.indexOf(v) === i)}
            isActive={decodeURI(location.hash) === `#${tag}`}
            key={tag}
          />
        ))}

        <ShareBox url={tagUrl} hasCommentBox={false} />

        <SEO
          title={header.title}
          siteTitleAlt={header.title}
          description="すべての記事"
          url={tagUrl}
          isPost={false}
          image={header.headerImage}
        />
      </div>
    );
  }
}

TagPage.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          tags: PropTypes.string,
          title: PropTypes.string,
          url: PropTypes.string,
          createdDate: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query myTags {
    header(purpose: { eq: "Tags" }) {
      headerImage
      title
      titleVisible
      subTitle
      subTitleVisible
    }
    tags: allPostMarkdown {
      edges {
        node {
          tags
          title
          url
          createdDate
        }
      }
    }
  }
`;
export default wrapLayout(TagPage);
