import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import { parseImgur } from '../../api/images';

import { config } from '../../../data';

const defaultColor = config.posts.defaultHeaderBackgroundColor;

const Header = ({
  color, img, title, subTitle, authorImage, authorName,
}) => (
  <div className="col-12 header" style={{ padding: 0 }} id="header">
    <div
      className="img-container"
      style={
        img
          ? {
            backgroundColor: `#${color}`,
            backgroundImage: `url(${img})`,
            marginTop: -58,
          }
          : {
            backgroundColor: `#${color}`,
            marginTop: -58,
          }
      }
    >
      {title && <h1 className="u-title">{title}</h1>}
      {subTitle && (
        <div className="u-subtitle">
          <div className="m-left">
            {authorImage && (
              <img
                src={parseImgur(authorImage, 'small-square')}
                className="author-image"
                alt={authorName}
              />
            )}
            <span className="author-name">{authorName}</span>
          </div>
          <span className="text">{subTitle}</span>
        </div>
      )}
    </div>
  </div>
);

Header.propTypes = {
  color: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
};

Header.defaultProps = {
  color: defaultColor,
  img: null,
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
};

export default Header;
