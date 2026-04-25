import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faTrophy,
  faProjectDiagram,
  faSmileBeam,
} from '@fortawesome/free-solid-svg-icons';

const CompanyStatsSection = ({ employeeCount }) => (
  <aside className="company-stats">
    <div className="container">
      <div className="row">
        <div className="col-md-12 stat-box d-flex flex-row flex-wrap ">
          <div className="stat d-flex align-items-center m-2">
            <div className="icon-holder">
              <FontAwesomeIcon icon={faUsers} className="stroke-icon" />
            </div>
            <div className="text-holder">
              <h2 className="m-0">{`${employeeCount}+`}</h2>
              <small>Experts</small>
            </div>
          </div>
          <div className="stat d-flex align-items-center m-2">
            <div className="icon-holder">
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="stroke-icon"
              />
            </div>
            <div className="text-holder">
              <h2 className="m-0">2017</h2>
              <small>Serving Since</small>
            </div>
          </div>
          <div className="stat d-flex align-items-center m-2">
            <div className="icon-holder">
              <FontAwesomeIcon icon={faTrophy} className="stroke-icon" />
            </div>
            <div className="text-holder">
              <h2 className="m-0">25+</h2>
              <small>Projects</small>
            </div>
          </div>
          <div className="stat d-flex align-items-center m-2">
            <div className="icon-holder">
              <FontAwesomeIcon icon={faSmileBeam} className="stroke-icon" />
            </div>
            <div className="text-holder">
              <h2 className="m-0">25+</h2>
              <small>Happy Clients</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default CompanyStatsSection;
