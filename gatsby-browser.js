/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga';

import { config } from './data';

import installFontAwesome from './src/api/installFontAwesome';

const {
  url, gaTrackId, gaOptimizeId, usingGA,
} = config;

installFontAwesome();

const isLocalDevelopment = () => window && window.location && window.location.origin !== url;

if (isLocalDevelopment() === false && usingGA) {
  ReactGA.initialize(gaTrackId);

  // Google Optimizer
  if (gaOptimizeId) {
    ReactGA.ga('require', gaOptimizeId);
  }
  console.log('Welcome to online environment.');
}

export const onRouteUpdate = (state) => {
  if (isLocalDevelopment() === false && usingGA) {
    ReactGA.pageview(state.location.pathname);
  }
};
