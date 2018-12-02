import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faZhihu,
  faFacebookF,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const installFontAwesome = () => {
  library.add(
    faCircle,
    faComment,
    faChevronUp,
    faEnvelope,
    faMastodon,
    faTwitter,
    faGithub,
    faZhihu,
    faFacebookF,
  );
};

export default installFontAwesome;
