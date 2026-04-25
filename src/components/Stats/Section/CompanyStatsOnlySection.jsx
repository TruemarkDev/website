import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faProjectDiagram,
  faSmileBeam,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const CompanyStatsOnlySection = ({ employeeCount }) => (
  <aside className="stat-only mt-5">
    <div className="container">
      <div className="row ">
        <div className="col-lg-12 w-100">
          <div className="banner-cta d-flex align-items-center flex-column flex-lg-row justify-content-lg-around  team-cta text-center py-5 px-0 px-md-4 shadow-lg">
            <div className="col-md-12 stat-box d-flex flex-row flex-wrap py-3">
              <div className="stat d-flex align-items-center m-2">
                <div className="icon-holder">
                  <FontAwesomeIcon icon={faUsers} className="stroke-icon" />
                </div>
                <div className="text-holder">
                  <h2 className="m-0">{`${employeeCount}+`}</h2>
                  <small className="text-secondary">Experts</small>
                </div>
              </div>
              <div className="stat d-flex align-items-center m-2">
                <div className="icon-holder ">
                  <FontAwesomeIcon icon={faClock} className="stroke-icon" />
                </div>
                <div className="text-holder">
                  <h2 className="m-0">2017</h2>
                  <small className="text-secondary">Serving Since</small>
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
                  <h2 className="m-0">25+</h2>
                  <small className="text-secondary">Projects</small>
                </div>
              </div>
              <div className="stat d-flex align-items-center m-2">
                <div className="icon-holder">
                  <FontAwesomeIcon icon={faSmileBeam} className="stroke-icon" />
                </div>
                <div className="text-holder">
                  <h2 className="m-0">25+</h2>
                  <small className="text-secondary">Happy Clients</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default CompanyStatsOnlySection;
