import React from 'react';
import PropTypes from 'prop-types';

const IconBlockWithText = ({ logoImg, iconText }) => (
  <div className="wrapper">
    <div className="img-holder mb-3 ">
      <img src={logoImg} className="img-fluid m-0" />
    </div>
    {iconText}
  </div>
);

IconBlockWithText.defaultProps = {
  technologyCard: false,
};

IconBlockWithText.propTypes = {
  logoImg: PropTypes.object.isRequired,
  iconText: PropTypes.string.isRequired,
};

export default IconBlockWithText;
