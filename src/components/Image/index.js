import React from 'react';
import PropTypes from 'prop-types';

import { parseImgur } from '../../api/images';

import './index.scss';

const Image = ({ href, title, text }) => (
  <img
    className="lozad mb-3 align-self-center resized"
    data-src={parseImgur(href, 'large')}
    title={title || text}
    alt={title || text}
  />
);

Image.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Image;
