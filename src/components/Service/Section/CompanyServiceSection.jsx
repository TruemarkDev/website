import React from 'react';
import CompanyServicesTab from '../Tab/CompanyServicesTab';

const CompanyServiceSection = () => (
  <div className="container" id="services">
    <div className="row">
      <div className="col-md-12 how-it-work shadow-lg mb-5">
        <div className="header text-center">
          <div className="header-tag">We Offer</div>
          <h2>Best Engineering Services</h2>
          <div className="divider" />
        </div>
        <div className="content mt-5">
          <CompanyServicesTab />
        </div>
      </div>
    </div>
  </div>
);

export default CompanyServiceSection;
