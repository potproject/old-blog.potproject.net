import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { config } from '../../../data';

import Information from './Information';
import Subscription from './Subscription';

import './index.scss';

const {
  wordings,
  githubUsername,
  twitterUsername,
  mastodonUrl,
  email,
  iconUrl,
  about,
  name,
} = config;

const Icon = ({ href, icon, title }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
    title={title === '' ? href : title}
  >
    <span className="fa-layers fa-fw fa-2x">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const Sidebar = ({ post, totalCount, posts }) => (
  <header
    className={`intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1 ${
      post === true ? 'order-11' : 'order-1'
    }`}
  >
    <div className="about-me">
      <Link to={about} href={about} className="name">
        <img className="avatar" src={iconUrl} alt={name} />
        <h4>{name}</h4>
      </Link>
      <p className="mb-1">{wordings[0]}</p>
      <p className="mb-3">{wordings[1]}</p>
      <Icon
        href={`https://github.com/${githubUsername}`}
        icon={['fab', 'github']}
        title="github Link"
      />
      <Icon href={mastodonUrl} icon={['fab', 'mastodon']} title="mastodon Link" />
      <Icon
        href={`https://twitter.com/${twitterUsername}`}
        icon={['fab', 'twitter']}
        title="twitter Link"
      />
      {false && <Icon href={`mailto:${email}`} icon={['far', 'envelope']} />}
      <Subscription />
      <Information totalCount={totalCount} posts={posts} />
    </div>
  </header>
);

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

Sidebar.propTypes = {
  post: PropTypes.bool,
  totalCount: PropTypes.number,
  posts: PropTypes.array, // eslint-disable-line
};

Sidebar.defaultProps = {
  post: false,
  totalCount: 0,
};

Icon.defaultProps = {
  title: '',
};

export default Sidebar;
