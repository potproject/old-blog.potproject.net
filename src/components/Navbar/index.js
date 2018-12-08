import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

import GithubCorner from '../GithubCorner';

import NavItem from './NavItem';
import { gotoPage } from '../../api/url';
import './index.scss';
import { config } from '../../../data';

const { title, githubRepoName, navbarList } = config;

const NavbarClass = ['navbar', 'navbar-expand-md', 'sticky-top', 'custom-navbar'];

const Navbar = () => (
  <nav id="m-navbar" className={`${NavbarClass.join(' ')} navbar-night`}>
    <div className="container">
      <button
        type="button"
        className="navbar-brand btn btn-default"
        onClick={() => {
          ReactGA.event({
            category: 'User',
            action: 'Click navbar logo',
          });
          gotoPage('/');
        }}
      >
        {title}
      </button>
      {navbarList.length > 0 && (
        <button
          className="navbar-toggler"
          type="button"
          id="collapseNavbarButton"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-2">
          {navbarList.map(item => (
            <NavItem url={item.href} name={item.title} list={item.list} key={item.href} />
          ))}
        </ul>
      </div>
      <GithubCorner url={`https://github.com/${githubRepoName}`} />
    </div>
  </nav>
);

export default Navbar;
