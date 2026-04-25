import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const heroImage = '/images/upgrade-your-application/hero-banner-image.png';
const UpgradeYourApplicationHeroSection = () => {
  return (
    <section className="bg-hero overflow-hidden pt-5 pt-lg-0 pb-sm-0 pb-md-0">
        <div className="hero-section-container position-relative container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 rm-content-container">
              <div className="header-tag mb-2">
              STILL RUNNING AN OLD RAILS/REACTJS VERSION?
              </div>
              <h1 className="mb-4 text-secondary">
                Upgrade Your Application
              </h1>
              <p className="text-secondary">
              We all know running our application with latest verison of programming language and framework makes app runs faster and secure. Unplanned upgrades can introduce countless bugs and consumes precious development hours.
              </p>
              <p>
                At <span className='text-primary'>Truemark</span>, we help teams <span className='text-primary'>upgrade your application</span> so that your core development team can keep on shipping new features without interruption.
              </p>
              <ButtonWithModal text="Request A Quote" />
            </div>
            <div className="col-lg-5 position-relative mb-sm-0 mb-md-0 text-center">
              <img
                className="img-fluid"
                src={heroImage}
                alt=""
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default UpgradeYourApplicationHeroSection;
