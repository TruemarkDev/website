import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const ProjectStatsColumn = ({ icon, title, stats }) => (
  <div className="d-flex align-items-center flex-row align-items-md-start flex-md-column">
    <div className="icon  d-flex justify-content-center align-items-center mb-0 mb-md-2 text-white">
      <FontAwesomeIcon icon={icon} className="stroke-icon " />
    </div>
    <div className="detail">
      <p className="text-white mb-1">{title}</p>
      <h4 className="mb-0 text-white">{stats}</h4>
    </div>
  </div>
);

ProjectStatsColumn.defaultProps = {
  icon: faClock,
  title: '<Change title>',
  stats: '<Change stats>',
};

export default ProjectStatsColumn;
