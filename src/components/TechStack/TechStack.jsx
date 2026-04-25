import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'constants/customIcons';

const largeSizes = ['md', 'lg'];

const TechStack = ({
  icon = ['truemark', 'react-icon'],
  name = '',
  bgColor = '',
  size = 'xs',
  iconClass = '',
  iconColor = '',
}) => (
  <div
    className={`tech-stack d-flex align-items-center ${
      largeSizes.includes(size) ? 'flex-column mt-3' : 'flex-row'
    }`}
  >
    <div
      className={`icon ${bgColor} ${size} d-flex justify-content-center align-items-center rounded-circle shadow-sm me-2`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`d-flex align-items-center m-auto ${iconClass}`}
        color={iconColor}
      />
    </div>
    <p className={`mb-0 ${largeSizes.includes(size) && 'mt-3'}`}>{name}</p>
  </div>
);

export default TechStack;

TechStack.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
  bgColor: PropTypes.string,
  iconClass: PropTypes.string,
  name: PropTypes.string,
  iconColor: PropTypes.string,
};
