import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';

import wrapLayout from '../api/layout';

const NotFoundPage = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h4>404 Not Found：</h4>
        {data.allSitePage.edges.map(page => (
          <Link to={page.node.path} href={page.node.path} key={page.node.path}>
            <li>{page.node.path}</li>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query getAllPages {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

NotFoundPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default wrapLayout(NotFoundPage);
