import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const heroImageLight = '/images/ruby-on-rails/hero-image.png';
const heroImageDark = '/images/ruby-on-rails/hero-image-dark.png';
const RubyonRailsHeroSection = () => {
  return (
    <section className="bg-hero1 position-relative overflow-hidden pt-5 pb-sm-0 pb-lg-5">
      <div className="container">
        <div className="position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
              <div className="header-tag mb-2">
              GET YOUR IDEA TO MARKET QUCIKLY WITH
              </div>
              <h1 className="mb-4 text-secondary">Ruby on Rails Development Services</h1>
              <p className="text-secondary">
                <a href="https://spreecommerce.org/ruby-on-rails-most-popular-among-top-y-combinator-companies/" target='_blank'>8 out of 10 most valued Y Combinator startups are built using Ruby on Rails.</a> <br />
                Ruby on Rails is a <span className="text-primary">framework of choice</span> for many startups who need <span className="text-primary">to build quick, re-iterate and move froward.</span> <br />
                Our team of expert Ruby on Rails Developers have worked with indie developers and venture backed startups, in tackling even the most challenging software projects.
              </p>
              <ButtonWithModal text="Request A Quote" />
            </div>
            <div className="col-lg-6 position-relative  mb-sm-0 mb-md-0 d-flex justify-content-end my-image">
              <img
                src={heroImageLight}
                alt="hero image"
                className="img-fluid hero-light"
              />
              <img
                src={heroImageDark}
                alt="hero image"
                className="img-fluid hero-dark"
              />
            </div>
            <div className="pink position-absolute"></div>
            <div className="blue position-absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RubyonRailsHeroSection;
