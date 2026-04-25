import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HeroSectionImage from 'images/company/Career-page-hero-section-image.png?url';

const CareerHeroSection = () => {
  return (
    <section className="bg-hero1 position-relative overflow-hidden pt-5 pb-0">
      <div className="position-relative container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
            <div className="header-tag mb-2">You want to</div>
            <h1 className="mb-4 text-secondary">
              Be a part of a world class team
            </h1>
            <p className="text-secondary">
              We are agile, smart and result driven. We love getting things done
              and do it better everytime.
            </p>
            <p className="text-secondary mb-5">
              <strong>We believe our people are our greatest asset</strong> and
              we’re always looking for bright new people and personalities to
              join our company.
            </p>
            <a href="#openpositions" className="btn btn-lg btn-primary">
              See Open Positions
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </a>
          </div>
          <div className="col-lg-6 position-relative  mb-sm-0 mb-md-0 d-flex justify-content-end">
            <img
              src={HeroSectionImage}
              alt="hero image"
              className="img-fluid"
            />
          </div>
          <div className="pink position-absolute"></div>
          <div className="blue position-absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
