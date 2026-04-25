import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

const SocialShare = ({ description, path, tags, className }) => {
  const url = `https://www.truemark.dev${path || '/'}`;
  const classNames = ['social-box-container', 'mt-4', 'mt-md-0'];
  classNames.push(className);
  return (
    <div className={classNames.join(' ')}>
      <div className="d-flex social-icon-box justify-content-between align-items-center">
        <div className="share py-2 px-3 w-100 text-center">SHARE</div>
        <div className="d-flex">
          <div className="social-icon">
            <FacebookShareButton
              url={url}
              quote={description}
              className="py-2 px-3"
            >
              <FontAwesomeIcon className="fill-white" icon={faFacebookF} />
            </FacebookShareButton>
          </div>
          <div className="social-icon">
            <TwitterShareButton
              hashtags={tags}
              url={url}
              title={description}
              className="py-2 px-3"
            >
              <FontAwesomeIcon className="fill-white" icon={faTwitter} />
            </TwitterShareButton>
          </div>
          <div className="social-icon">
            <LinkedinShareButton
              url={url}
              quote={description}
              className="py-2 px-3"
            >
              <FontAwesomeIcon className="fill-white" icon={faLinkedinIn} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
