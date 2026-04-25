import React from 'react';

const bannerImageDark = '/images/resources/developer-image-dark.png';
const bannerImageLight = '/images/resources/developer-image-light.png';
import ButtonWithModal from 'components/Button/ButtonWithModal';

const ResourceHeroSection = () => (
  <section className="position-relative overflow-hidden developer-page">
    <div className="container hero-section-container position-relative">
      <div className="row flip-content-sm">
        <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
          <div className="header-tag mb-2">You want to work with</div>
          <h1 className="mb-4 text-secondary">Best Software Developers</h1>
          <p className="text-secondary">
            Get ready to take your business to the next level. <br />
            <span className="text-primary">Truemark</span> will help you build{' '}
            <span className="text-primary">world class software </span>
            for your <span className="text-primary">world class business.</span>
          </p>
          <p className="text-secondary">
            At Truemark, we love crafting great quality code without losing
            sight on the importance of business idea validation.
          </p>
          <ButtonWithModal text="Request A Quote" />
          {/* <button
            type="button"
            className="btn btn-lg btn-primary outlined ms-lg-2 ms-md-2"
          >
            Learn more
          </button> */}
        </div>
        <div className="col-lg-6 position-relative mt-4 mt-lg-0">
          <img
            className="banner-img img-fluid banner-image-light"
            src={bannerImageLight}
            alt="software developer banner"
          />
          <img
            src={bannerImageDark}
            alt="software developer banner"
            className="banner-img img-fluid banner-image-dark"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ResourceHeroSection;
