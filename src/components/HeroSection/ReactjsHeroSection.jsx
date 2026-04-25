import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const heroImage = '/images/reactjs/hero-image.png';
const bell = '/images/gatsby/bell.svg';
const ReactjsHeroSection = () => {
  return (
    <section className="bg-hero1 position-relative overflow-hidden pt-5 pb-0">
      <div className="position-relative container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
            <div className="open-project rounded-pill d-flex mb-4">
              <img src={bell} alt="bell" />
              <p className="mb-0">
                We are currently open for ReactJS projects.{' '}
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
            <div className="header-tag mb-2">VISUAL EXCELLENCE</div>
            <h1 className="mb-4 text-secondary">
              Build beautifully designed, high-performance apps with ReactJS
            </h1>
            <p className="text-secondary">
              ReactJS is a powerful JavaScript library that allows developers
              to build{' '}
              <span className="text-primary">
                beautifully designed, high-performance applications
              </span>
              . With its intuitive interface and fast, flexible architecture,
              ReactJS makes it easy to create stunning user experiences that load
              quickly and perform smoothly.
            </p>
            <p className="text-secondary">
              <span className="text-primary">So why wait?</span> Start building
              your dream app today with{' '}
              <span className="text-primary">ReactJS</span>.
            </p>
            <ButtonWithModal text="Request A Quote" />
          </div>
          <div className="col-lg-6 position-relative  mb-sm-0 mb-md-0 d-flex justify-content-end">
            <img src={heroImage} alt="hero image" className="img-fluid" />
          </div>
          <div className="pink position-absolute"></div>
          <div className="blue position-absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default ReactjsHeroSection;
