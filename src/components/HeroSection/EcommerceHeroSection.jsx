import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const ecommerceOwner = '/images/hero-section/banner-man.png';
const EcommerceHeroSection = () => {
  return (
    <section className="bg-hero overflow-hidden pt-5 pt-lg-0 pb-sm-0 pb-md-0 pb-lg-5">
        <div className="hero-section-container position-relative container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 rm-content-container">
              <div className="header-tag mb-2">
                BUSINESS IDEA TURNED INTO REALITY
              </div>
              <h1 className="mb-4 text-secondary">
                Spree and Shopify E-Commerce Development Services
              </h1>
              <p className="text-secondary">
                Attract more online traffic and sales with a custom ecommerce
                website. <span className="text-primary">Truemark</span> will
                provide you custom, responsive ecommerce website development
                services built on <span className="text-primary">Shopify</span>{' '}
                and <span className="text-primary">Spree</span> to create any
                universal and unique features needed for smooth customer
                journeys.
              </p>
              <p className="text-secondary">
                Learn more to take your business to the next level.
              </p>
              <ButtonWithModal text="Request A Quote" />
            </div>
            <div className="col-lg-6 position-relative mb-lg-4 mb-sm-0 mb-md-0 text-center">
              <img
                className="banner-img img-fluid"
                src={ecommerceOwner}
                alt=""
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default EcommerceHeroSection;
