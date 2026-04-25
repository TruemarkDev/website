import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// import heroImage from 'assets/images/upgrade-your-application/hero-banner-image.png'
// import bannerImageLight from 'assets/images/hero-section/about-us-banner.png';
// import bannerImageDark from 'assets/images/hero-section/about-us-banner-dark.png';

const bannerImageLight = '/images/upgrade-your-application/hero-banner-image.png';
const bannerImageDark = '/images/upgrade-your-application/hero-banner-image.png';
import ButtonWithModal from 'components/Button/ButtonWithModal';

const AboutHeroSection = () => (
  <section className="bg-hero overflow-hidden pt-4 pt-lg-0 pb-sm-0 pb-lg-5 about-us-page">
    <div className="container hero-section-container position-relative">
      <div className="hero-section position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative mb-4 mb-md-0">
            <p className="header mb-0 text-primary">ABOUT US</p>
            <h1 className="mb-4">
              True Mark of Quality
              <span className="d-block">
                <span className="text-primary">Software Development </span>
              </span>
            </h1>
            <p className="text-secondary">
              We love crafting great quality code without losing sight on the
              importance of business idea validation. We are agile, smart and
              result driven. We love getting things done and do it better
              everytime.
            </p>
            <ButtonWithModal
              text="Get Started"
              modalType="estimate"
              className="get-started-button h-100"
            />
            <a
              href="#process"
              className="btn btn-lg btn-primary outlined ms-0 ms-sm-4"
            >
              Our Process
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </a>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 rm-sm-4 p-md-3 p-0 hero-banner-img">
            <img
              src={bannerImageLight}
              alt="about truemark"
              className="img-fluid pt-4 ps-5 banner-image-light"
            />
            <img
              src={bannerImageDark}
              alt="about truemark"
              className="img-fluid pt-4 ps-5 banner-image-dark"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
