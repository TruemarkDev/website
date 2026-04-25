import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import bannerImage from 'images/ui-ux/ui-ux.png?url';
const UIUXHeroSection = () => (
  <section className="ui-ux-services overflow-hidden">
    <div className="container container-ui-ux position-relative">
      <div className="row flip-content-sm align-items-center">
        <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 rm-content-container">
          <h1 className="mb-4 text-secondary">UI/UX Design services</h1>
          <p className="text-secondary mb-5 fs-3 fw-normal">
            Our design team is focused on creating user experiences and interface that are focused on user need and also align with business goals.
          </p>
          <ButtonWithModal text="START PROJECT" />
        </div>
        <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 hero-banner-img text-center position-relative mt-3 mt-md-0 mt-lg-0">
          <img className='img-fluid opacity-75' src={bannerImage} alt="" />
          <div className='ui-ux-service-text text-lg-start opacity-75 w-100 border'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 pe-lg-0'>
                        <div className='p-5 p-md-2 p-lg-5 border-right border-bottom'>
                            <h3>Brand strategy</h3>
                            <p>Defining your brand together: what you stand for and how you want to compete</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 ps-lg-0'>
                        <div className='p-5 p-md-2 p-lg-5 border-bottom'>
                            <h3>Brand naming</h3>
                            <p>The start of your story: making it meaningful, memorable and easy to say</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 pe-lg-0'>
                        <div className='p-5 p-md-2 p-lg-5 border-right'>
                            <h3>Brand voice</h3>
                            <p>Choosing your words carefully: finding the right personality for your brand</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 ps-lg-0'>
                        <div className='p-5 p-md-2 p-lg-5'>
                            <h3>Copywriting</h3>
                            <p>Reaching your audience: words with clarity and authenticity</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UIUXHeroSection;
