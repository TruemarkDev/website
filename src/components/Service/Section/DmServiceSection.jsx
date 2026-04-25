import React from 'react';
import DMServicesTab from '../Tab/DMServicesTab';

const DmServiceSection = () => (
  <div className="container mb-5" id="services">
    <div className="row">
      <div className="col-md-12 how-it-work shadow-lg mb-5">
        <div className="header text-center">
          <div className="header-tag pb-3">We Offer</div>
          <h2>Best Digital Marketing Services</h2>
        </div>
        <div className="content mt-5">
          <DMServicesTab />
        </div>
      </div>
    </div>
  </div>
);

export default DmServiceSection;
