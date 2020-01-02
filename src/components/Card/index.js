import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import Tag from '../Tag';

import { isBrowser } from '../../api';
import { parseImgur } from '../../api/images';

import './index.scss';

import { parseUrl } from '../../api/url';

import { config } from '../../../data';

const defaultColor = config.posts.defaultHeaderBackgroundColor;

const imageStyle = (headerImage, color) => {
  if (headerImage === null) {
    return { backgroundColor: `#${color}` };
  }
  return {
    backgroundColor: `#${color}`,
    backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
  };
};

class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.image = props.image;
    this.backgroundColor = props.backgroundColor;
    this.title = props.title;
    this.state = { loaded: false };
  }

  componentDidMount() {
    if (isBrowser()) {
      const observer = lozad(this.el, {
        rootMargin: '100px 0px',
        load: () => (this.setState({ loaded: true })),
      });
      observer.observe();
    }
  }

  render() {
    const { loaded } = this.state;
    return (
      <Link to={this.url} href={this.url} title={this.title === '' ? this.url : this.title}>
        <div ref={(el) => { this.el = el; }} className="wrapper" style={imageStyle(loaded ? this.image : null, this.backgroundColor)} />
      </Link>
    );
  }
}

const Card = ({
  title, date, url, headerImage, headerBackgroundColor, content, tags,
}) => {
  const postUrl = parseUrl(date, url);
  const finalTags = tags || [];

  return (
    <div className="col-sm-12 pb-4">
      <div className="custom-card">
        {headerImage && (
          <CardHeader
            url={postUrl}
            image={headerImage}
            backgroundColor={headerBackgroundColor}
            title={title}
          />
        )}
        <div className="data">
          <div className="content">
            <div className="stats">
              <span className="date">{date}</span>
              {finalTags.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </div>
            <Link to={postUrl} href={postUrl} title={title}>
              <h4 className="title">{title}</h4>
            </Link>
            <p className="d-none d-md-block">{`${content}...`}</p>
            <Link className="more-link" to={postUrl} href={postUrl}>
              本文を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};

CardHeader.defaultProps = {
  backgroundColor: defaultColor,
  title: '',
};

Card.defaultProps = {
  headerImage: '',
  tags: [],
};

export default Card;
