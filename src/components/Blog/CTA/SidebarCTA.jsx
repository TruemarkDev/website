import React from 'react';
import PropTypes from 'prop-types';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const SidebarCTA = ({ ctaTitle, ctaText, buttonText }) => (
  <div className="sticky-cta">
    <div className="wrapper bg">
      <div className="overlay d-flex flex-column justify-content-center align-items-center  text-center  py-5 px-3">
        <h3 className="mb-3 text-white">{ctaTitle}</h3>
        <p className="mb-4 text-white">{ctaText}</p>
        <ButtonWithModal text={buttonText} />
      </div>
    </div>
  </div>
);

// TODO: @prakash fix passing class name for resolving bg and text

// .bg for default
// .bg-web for web cta
// .bg-logo for branding cta

SidebarCTA.defaultProps = {
  ctaTitle: 'Looking for a reliable vendor?',
  ctaText:
    'Get your free tech consultation and project estimation at no charge.',
  buttonText: 'Apply Now',
};

// SidebarCTA.defaultProps = {
//   ctaTitle: 'Ready to talk about your new logo?',
//   ctaText:
//     'Get your free tech consultation and project estimation at no charge.',
//   buttonText: 'Apply Now',
// };

// SidebarCTA.defaultProps = {
//   ctaTitle: 'You have a vision. We have a way to get you there.',
//   ctaText:
//     'Get your free tech consultation and project estimation at no charge.',
//   buttonText: 'Apply Now',
// };

SidebarCTA.propTypes = {
  ctaTitle: PropTypes.string,
  ctaText: PropTypes.string,
  buttonText: PropTypes.string,
};

export default SidebarCTA;
