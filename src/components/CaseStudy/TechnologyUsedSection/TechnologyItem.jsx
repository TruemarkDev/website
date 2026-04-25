import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const TechnologyItem = ({ icon, techName, bgColor }) => (
  <li className="d-flex align-items-center">
    <div className={`${bgColor} icon shadow-sm me-2`}>
      <FontAwesomeIcon
        icon={icon}
        className="d-flex align-items-center h-100 w-50 m-auto "
      />
    </div>
    {techName}
  </li>
);

export default TechnologyItem;
