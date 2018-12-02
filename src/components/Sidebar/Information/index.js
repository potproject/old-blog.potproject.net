import React from 'react';

import PropTypes from 'prop-types';

import Friend from '../Friend';
import LatestPost from '../LatestPost';
import './index.scss';

const Information = ({ totalCount, posts }) => (
  <div className="d-none d-lg-block information my-2">
    <hr />
    <p>{`全 ${totalCount} 記事`}</p>
    <hr />
    <LatestPost posts={posts} />
    {false && <hr /> && <Friend />}
  </div>
);

Information.propTypes = {
  totalCount: PropTypes.number.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Information;
