import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faUsers,
  faProjectDiagram,
  faCheckCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const EngagementModelBannerSection = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag">
              Do you have specific needs ? We are flexible with
            </div>
            <h2>Our Engagement Models</h2>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <Row className="row row-eq-height">
            <Col lg={4} md={6} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between text-center pattern p-5 h-100 align-items-center align-items-md-start">
                <div className="icon-holder mb-4">
                  <FontAwesomeIcon
                    icon={faLaptop}
                    className="stroke-icon secondary"
                  />
                </div>
                <h5 className="mb-3">Service</h5>
                <ul className="list-group  text-center text-md-start  text-secondary mb-3 ms-0">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Write Test Cases
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Update Project
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    DevOps as Services
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />{' '}
                    QA Service
                  </li>
                </ul>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                  title="Estimate Cost For Service Model Engagement"
                  subTitle="Let our experts know about your project so they can get back to you with estimations customized to your needs."
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between pattern p-5 h-100 align-items-center align-items-md-start position-relative overflow-hidden">
                <div className="position-absolute label px-4 py-1">
                  <p className="text-white mb-0 py-1 ps-2 text-center">
                    20% OFF
                  </p>
                </div>
                <div className="icon-holder mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="stroke-icon secondary"
                  />
                </div>
                <h5 className="mb-3">Developer/Team</h5>
                <ul className="list-group  text-center text-md-start  text-secondary mb-3 ms-0">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Developer/ Team
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Short-term project/ Long-Term Development
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Bug Fixes & Tech/ Customer Support
                  </li>
                </ul>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                  title="Estimate Cost For Hiring Ready To Code Developer / Team"
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
              <div className="engagement-model d-flex flex-column justify-content-between pattern p-5 h-100 align-items-center align-items-md-start ">
                <div className="icon-holder mb-4">
                  <FontAwesomeIcon
                    icon={faProjectDiagram}
                    className="stroke-icon secondary"
                  />
                </div>
                <h5 className="mb-3">Project (fix-cost)</h5>
                <ul className="list-group  text-center text-md-start  text-secondary mb-3 ms-0">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Short-Term Projects/Specs
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    App or Web Development
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="me-2 text-primary"
                    />
                    Integration or Migration Work
                  </li>
                </ul>
                <ButtonWithModal
                  className="outlined mt-4 w-100"
                  modalType="estimate"
                  title="Get Fixed Price Estimation For Your Project"
                >
                  Estimate Now
                </ButtonWithModal>
              </div>
            </Col>
          </Row>
        </div>

        <div className="mt-5">
          <div className="position-relative overflow-hidden rounded-3 shadow-lg">
            <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around  process-cta text-center py-4 px-4">
              <h4 className="rm-sm-2 py-2">
                Cannot decide the model for your project?
              </h4>
              <ButtonWithModal
                className="outlined"
                modalType="estimate"
                title="Talk to an Expert"
                subTitle="Let our experts know about your project and they will get back to you with engagement model best suited for your needs."
              >
                Talk to An Expert
                <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
              </ButtonWithModal>
            </div>
            <div className="cta-btn-right position-absolute"></div>
            <div className="cta-btn-left position-absolute"></div>
            <div className="background-blur-right position-absolute"></div>
            <div className="background-blur-left position-absolute"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EngagementModelBannerSection;
