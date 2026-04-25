import React from "react";
import ButtonWithModal from "components/Button/ButtonWithModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bannerImageWhite from 'images/layout/banner-white.svg?url';
import bannerImageBlack from 'images/layout/banner-black.svg?url';
import bannerImageLady from 'images/hero-section/img-lady.png?url';
import iconTime from 'images/hero-section/icon-time.svg?url';
import iconCoading from 'images/hero-section/icon-coading.svg?url';
import iconRemote from 'images/hero-section/icon-remote.svg?url';

const HomeHeroSection = () => (
  <section className="bg-hero overflow-hidden pt-4 pt-lg-0 pb-sm-0 pb-lg-5">
    <div className="container hero-section-container position-relative ">
      <div className="hero-section position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative mb-4 mb-md-0">
            <p className="header mb-0">
              For founders & businesses who care for
            </p>
            <h1 className="mb-4">
              Quality Focused
              <span className="d-block">
                Software <span className="text-primary">Development</span>
              </span>
            </h1>
            <p className="text mx-auto mb-4">
              Industry standard best coding practices, Consistent communication,
              On time <br className="d-none d-md-block" /> delivery are the core
              competencies of Truemark that makes us perfect remote{" "}
              <br className="d-none d-md-block" /> extension for any
              team/business.
            </p>
            <ButtonWithModal
              className="outlined"
              modalType="estimate"
              title="Schedule Free Consultation"
            >
              Schedule a call
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </ButtonWithModal>
          </div>
          <div className="col-lg-6 position-relative mb-lg-4 mb-sm-0  mb-md-0">
            <img
              className="banner-img img-fluid"
              src={bannerImageLady}
              alt=""
            />
            <span className="delivery position-absolute">
              <img src={iconTime} alt="" />
              <span className="d-inline ms-2">On Time Delivery</span>
            </span>
            <span className="practices position-absolute">
              <img src={iconCoading} alt="" />
              <span className="d-inline ms-2">Standard coding practices</span>
            </span>
            <span className="expertise position-absolute">
              <img src={iconRemote} alt="" />
              <span className="d-inline ms-2">
                Remote Communication Expertise
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHeroSection;
