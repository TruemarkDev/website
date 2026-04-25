import React from 'react';
import { Row, Col } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const UXBannerSection = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag">
              SERVICES
            </div>
            <h2 className='mb-4'>Design for mobile and web products</h2>
            <p>Creating the same distinct style and brand identity for all platforms using best-proven</p>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <Row className="row row-eq-height">
            <Col lg={4} md={6} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between pattern p-5 h-100 align-items-center align-items-md-start">
                <div className='web-design m-auto'>
                  Web Design
                </div>
                <div className='m-auto-lg'><h5 className="mb-3">Web Design</h5></div>
                <p>Client-centered web design for laptops, tablets and mobile devices in FullHD quality. We help your shape your Brand identity, ensure page load optimization, and responsiveness of your site.</p>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between pattern p-5 h-100 align-items-center align-items-md-start position-relative overflow-hidden">
                 <div className='mobile-design m-auto'>
                    Mobile Design
                </div>
                <div className='m-auto-lg'><h5 className="mb-3">Mobile Design</h5></div>
                <p>Creative and modern design for all screen sizes and platforms: iOS, Android, tablets, watches. We follow guidelines, provide native look and feel and ensure smooth interactions.</p>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between pattern p-5 h-100 align-items-center align-items-md-start ">
                 <div className='product-design m-auto'>
                    Product Design
                </div>
                <div className='m-auto-lg'><h5 className="mb-3">Product Design</h5></div>
                <p>We combine thorough trend research and in-depth brand analysis to prototype the future look of your product that will fully comply with your vision, corporate direction and brand design.</p>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </section>
);

export default UXBannerSection;
