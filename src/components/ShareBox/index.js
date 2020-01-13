import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const CommentButton = () => (
  <a
    className="share-button"
    title="Comment"
    style={{
      lineHeight: '1.7rem',
      color: '#337ab7',
      paddingLeft: '0.15rem',
    }}
    href="#gitalk-container"
  >
    <FontAwesomeIcon icon={['far', 'comment']} />
  </a>
);

const ShareBox = ({ url, hasCommentBox }) => (
  <div className="m-share-box">
    {false && (
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        title="Share Facebook"
        className="share-button"
      >
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </a>
    )}
    {hasCommentBox && <CommentButton />}

    <a
      title="Scroll to Top"
      className="share-button"
      href="#header"
      style={{
        lineHeight: '1.7rem',
        paddingLeft: '0.1rem',
      }}
    >
      <FontAwesomeIcon icon={['fas', 'chevron-up']} />
    </a>
  </div>
);

ShareBox.propTypes = {
  url: PropTypes.string.isRequired,
  hasCommentBox: PropTypes.bool,
};

ShareBox.defaultProps = {
  hasCommentBox: false,
};

export default ShareBox;
