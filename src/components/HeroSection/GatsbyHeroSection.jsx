import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const heroImage = '/images/gatsby/hero-banner-image.png';
const bell = '/images/gatsby/bell.svg';
const GatsbyHeroSection = () => {
  return (
    <section className="bg-hero-gatsby overflow-hidden pt-0 pb-sm-0 pb-md-0">
      <div className="bg-hero-gatsby-container position-relative container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 rm-content-container">
            <div className="open-project rounded-pill d-flex mb-4">
              <img src={bell} alt="bell" />
              <p className="mb-0">
                We are currently open for Gatsbyjs projects.{' '}
                <ButtonWithModal
                  text="Request A Quote"
                  className="request-a-quote mb-0"
                />
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2600_9924)">
                      <path
                        d="M6 4.30469L10 8.30469L6 12.3047"
                        stroke=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2600_9924">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.304688)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
            <div className="header-tag mb-2">
              Experience the power of gatsby
            </div>
            <h1 className="mb-4 text-secondary">Build lightning-fast website with Gatsby</h1>
            <p className="text-secondary">
              If you're looking to build a{' '}
              <span className="text-primary">fast and efficient website</span>{' '}
              or web application, <span className="text-primary">Gatsby</span>{' '}
              may be the perfect choice for you. Here at{' '}
              <span className="text-primary">Truemark</span>, we have a team of
              experienced developers who are proficient in Gatsby and can help
              you build a professional-grade website or web application that
              meets your specific needs and requirements.
            </p>
            <ButtonWithModal text="Request A Quote" />
          </div>
          <div className="col-lg-5 position-relative mb-sm-0 mb-md-0 text-center">
            <img className="img-fluid" src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatsbyHeroSection;
