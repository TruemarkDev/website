import React from 'react';
import ButtonWithModal from 'components/Button/ButtonWithModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const bannerImage = '/images/ecommerce/E-Commerce-hero-section-image.png';
const SocialMediaMarkteing = '/images/ecommerce/social-media.png';
const ContentWriting = '/images/ecommerce/content-writing.png';
const Seo = '/images/ecommerce/seo.png';
const DMHeroSection = () => (
  <section className="bg-hero1 position-relative overflow-hidden pt-5 pb-5 mt-2">
    <div className="position-relative container DM-hero-section-container mt-3">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
          <div className="header-tag mb-2">DIGITAL MARKETING</div>
          <h1 className="mb-4 text-secondary">
            Complete solution to boost your digital presence
          </h1>
          <p className="text-secondary mb-5">
            Are you ready to take your business to the next level. Truemark helps
            you convert and retain more users while you run your business.
          </p>
          <ButtonWithModal text="Request A Quote" />
          <a
            href="#services"
            className="btn btn-lg btn-primary outlined ms-lg-2 ms-md-2"
          >
            Learn More
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </a>
        </div>
        <div className="col-lg-6 position-relative  mb-sm-0 mb-md-0 d-flex justify-content-end">
          <img src={bannerImage} alt="hero image" className="img-fluid bannerImage" />
          <span className="position-absolute bg-white border-radius tabs socialMedia shadow-sm">
              <img src={SocialMediaMarkteing} alt="" height="40px" width="40px"/>
              <span className="d-inline ms-2 text-secondary fs-4">Social Media Markteing</span>
            </span>
            <span className="position-absolute bg-white border-radius tabs contentWriting shadow-sm">
              <img src={ContentWriting} alt="" height="40px" width="40px"/>
              <span className="d-inline ms-2 text-secondary fs-4">Content Writing</span>
            </span>
            <div className="position-absolute bg-white border-radius tabs seo d-flex shadow-sm">
              <img src={Seo} alt="" height="40px" width="40px"/>
              <span className="d-inline ms-2 text-secondary fs-4">
                SEO (Search Engine Optimization)
              </span>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default DMHeroSection;
