import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import { ALL_MEMBERS } from 'constants/members';

const AuthorCTA = ({
  authorName,
  authorAvatar,
  authorDesignation,
  authorDetail,
  hireButton,
  moreButton,
}) => {
  const classNames = ['row blog-post-cta'];
  const firstName = authorName?.split(' ')[0];
  const memberAttributes = ALL_MEMBERS[firstName]?.attributes ?? {};

  return (
    <Col md={12}>
      <div
        className="author-cta  bg-light d-flex
      flex-column justify-content-center align-items-center text-center flex-md-row justify-content-md-start align-items-md-start text-md-start p-4 my-3"
      >
        <div className="author-avatar">
          <img
            className="author-avatar"
            src={authorAvatar.childImageSharp.resize.src}
            alt={authorName}
          />
        </div>
        <div className="author-detail pt-1">
          <div className="d-flex flex-column flex-md-row justify-content-md-between  mb-2">
            <div>
              <h4 className="mb-1 mt-md-0">{authorName}</h4>
              <p className="mb-0 designation text-secondary mb-3 mb-md-0">
                {authorDesignation}
              </p>
            </div>
            <ButtonWithModal
              text={`${hireButton} ${authorName}`}
              title={`Hire ${authorName}`}
              attributes={memberAttributes}
              modalType="estimate"
              className="mt-md-0 outlined mb-0 py-0"
            />
          </div>
          <p className="mb-3 detail">{authorDetail}</p>
          {/* <ButtonWithModal text={moreButton + ' ' + authorName} className="link" /> */}
        </div>
      </div>
    </Col>
  );
};

AuthorCTA.defaultProps = {
  authorName: 'John Doe',
  authorDesignation: 'Creative Writer',
  authorDetail:
    'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.',
  hireButton: 'Hire',
  moreButton: 'More from',
};

AuthorCTA.propTypes = {
  ctaTitle: PropTypes.string,
  ctaText: PropTypes.string,
  buttonText: PropTypes.string,
};

export default AuthorCTA;
