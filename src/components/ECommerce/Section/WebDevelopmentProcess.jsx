import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import IconPlanning from 'images/ecommerce/Frame1.svg?url';
import IconWireframing from 'images/ecommerce/frame6.svg?url';
import IconDesign from 'images/ecommerce/frame2.svg?url';
import IconProjectRelease from 'images/ecommerce/frame4.svg?url';
import IconQuality from 'images/ecommerce/frame5.svg?url';
import IconImplementation from 'images/ecommerce/frame3.svg?url';

const WebDevelopmentProcess = () => (
  <section className="ui-ux-process position-relative overflow-hidden">
    
    <div className="container mb-4 mb-md-5 mb-lg-5">
        <div className="row">
          <div className="col-md-12 mt-4 mb-4">
            <div className='position-relative overflow-hidden rounded-3 shadow-lg'>
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 pb-4">We can simplify tech aspect of your e-Commerce business</h4>
                <ButtonWithModal text="TRY NOW" modalType="" />
              </div>
              <div className='cta-btn-right position-absolute'></div>
              <div className='cta-btn-left position-absolute'></div>
              <div className='background-blur-right position-absolute'></div>
              <div className='background-blur-left position-absolute'></div>
            </div>
          </div>
        </div>
      </div>

    <div className="container">
      <div className="header text-center mb-5 pb-2">
        <div className="header-tag text-uppercase">
          we help you turn your idea into reality with
        </div>
        <h2 className="mb-1 mb-md-5 mb-lg-5">Our Web Development Process</h2>
      </div>
      <div className="row justify-content-between">
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-understanding h-100 p-4 position-relative">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img className="img-fluid m-auto" src={IconPlanning} alt="" />
              </span>
              <h4 className="m-0">Planning</h4>
            </div>
            <p>
              Creating a vision for the website or app, Market research and
              Brainstorm ideas along with Competitor analysis{' '}
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-research h-100 p-4 position-relative">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img
                  className="img-fluid m-auto"
                  src={IconWireframing}
                  alt=""
                />
              </span>
              <h4 className="m-0">Wireframing</h4>
            </div>
            <p>Understanding the needs and Design lo-fi and Hi-fi</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-architecture h-100 p-4 position-relative">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img className="img-fluid m-auto" src={IconDesign} alt="" />
              </span>
              <h4 className="m-0">Design</h4>
            </div>
            <p>Creating and prototyping user interface</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-develop h-100 p-4 position-relative">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img
                  className="img-fluid m-auto"
                  src={IconProjectRelease}
                  alt=""
                />
              </span>
              <h4 className="m-0">Project Release</h4>
            </div>
            <p>Launch the project</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-mockups h-100 p-4 position-relative">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img className="img-fluid m-auto" src={IconQuality} alt="" />
              </span>
              <h4 className="m-0">Quality Analysis and Testing</h4>
            </div>
            <p>
              Testing the developed process i.e. Check security, usability,
              functionality, performance and compatibility
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3 pb-3">
          <div className="rounded process process-wireframes h-100 p-4">
            <div className="d-flex flex-wrap align-items-center mb-4 text-center">
              <span className="icon rounded-circle me-2 p-1 d-flex">
                <img
                  className="img-fluid m-auto"
                  src={IconImplementation}
                  alt=""
                />
              </span>
              <h4 className="m-0">Implementation</h4>
            </div>
            <p>
              Developing the design with Backend Development and Overall
              Intergaration
            </p>
          </div>
        </div>
      </div>
    </div>
   
    <div className="container mb-2 mb-md-5 mb-lg-5">
        <div className="row">
          <div className="col-md-12 mt-4 mb-4">
            <div className='position-relative overflow-hidden rounded-3 shadow-lg'>
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around  process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 pb-4">Integrate our development process in your project</h4>
                <ButtonWithModal text="GET A QUOTE" modalType="" />
              </div>
              <div className='cta-btn-right position-absolute'></div>
              <div className='cta-btn-left position-absolute'></div>
              <div className='background-blur-right position-absolute'></div>
              <div className='background-blur-left position-absolute'></div>
            </div>
          </div>
        </div>
      </div>
  </section>
);

export default WebDevelopmentProcess;
