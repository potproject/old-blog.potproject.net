import React from 'react';

import PropTypes from 'prop-types';

const ExternalLink = ({
  href, title, target, rel,
}) => (
  <a href={href} rel={rel} target={target} className="external-link">
    {title}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};

ExternalLink.defaultProps = {
  target: '_blank',
  rel: 'external nofollow noopener',
};

export default ExternalLink;
