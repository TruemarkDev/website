import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import ButtonWithModal from "components/Button/ButtonWithModal";
import CopyRight from "components/Footer/CopyRight";

const truemarkWhiteLogo = "/images/company-logo/logo_white.svg";
const IconNepal = "/images/footer/nepal.svg";
const IconUSA = "/images/footer/dover.svg";
const Footer = ({
  ctaTitle = "Need help turning your dream idea into profitable software?",
}) => (
  <footer className="pb-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-12  pb-4 d-flex align-items-center flex-column text-center justify-content-center justify-content-md-baseline text-md-start flex-lg-row justify-content-between footer-separator">
          <h4 className="text-white mb-4 mb-lg-0">{ctaTitle}</h4>
          <ButtonWithModal>
            {"Let's start a project "}
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </ButtonWithModal>
        </div>
        <div className="col-lg-12 py-4 mt-lg-0 mt-3 d-flex flex-column justify-content-center justify-content-md-baseline flex-lg-row justify-content-lg-between contact-bar footer-separator align-items-center">
          <img
            src={truemarkWhiteLogo}
            alt="digital marketing banner"
            className="img-fluid footer-white-logo mb-4 mb-lg-0"
          />

          <div className="address  mb-4 mb-lg-0">
            <p className="text-white m-0 mb-2  text-center text-md-start">
              <span className="rounded-circle bg-gradient icon-address me-2 p-1 d-inline-block text-center">
                <img src={IconUSA} alt="Delaware" className="img-fluid" />
              </span>
              8 The Green STE R, Dover, Delaware, USA, 19901
            </p>
            <p className="text-white m-0 mb-md-2  text-center text-md-start">
              <span className="rounded-circle bg-gradient icon-address me-2 p-1 d-inline-block text-center">
                <img src={IconNepal} alt="kathmandu" className="img-fluid" />
              </span>
              Pabitranagar (Gongabu), Kathmandu, Nepal, 44600
            </p>
          </div>
          <div className="phone  mb-4 mb-md-0">
            <p className="text-white mb-lg-2 ">
              <FontAwesomeIcon icon={faMobile} className="me-2" />
              <a href="tel:980-3572935">+977 980-3572935</a>
            </p>
            <p className="text-white mb-lg-2 ">
              <FontAwesomeIcon icon={faMobile} className="me-2" />
              <a href="tel:984-9247553">+977 984-9247553</a>
            </p>
          </div>
          <div className="social-icons">
            <ul className="nav nav-pills d-flex justify-content-center text-white">
              <li className="nav-item">
                <a target="_blank" href="https://www.facebook.com/truemarkDev/">
                  <FontAwesomeIcon icon={faFacebookF} className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" href="https://twitter.com/truemarkDev/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="nav-item me-0 text-white">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/truemark-technology/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-12 py-2 d-flex align-items-baseline flex-column text-left text-md-center flex-lg-row justify-content-lg-between footer-separator">
          <ul
            className="nav nav-pills  text-white flip-content-sm contact-bar  d-flex justify-content-start align-items-flex-start
 ms-0"
          >
            <li className="nav-item ms-0 my-2">Technologies :</li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/spree/">Spree</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/react-js/">ReactJS</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/gatsby-js/">Gatsby Js</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/ruby-on-rails/">Ruby on Rails</a>
            </li>
          </ul>
        </div>

        <div className="col-md-12 py-2 d-flex align-items-baseline flex-column text-left text-md-center flex-lg-row justify-content-lg-between footer-separator">
          <ul
            className="nav nav-pills  text-white flip-content-sm contact-bar  d-flex justify-content-start align-items-flex-start
 ms-0"
          >
            <li className="nav-item ms-0 my-2">Services :</li>
            <li className="nav-item ms-0 my-2">
              <a href="/hire/resources/">On Demand Software Developers</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/spree/">E-commerce Development</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/technologies/gatsby-js/">Static Site Development</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/services/design/">On Demand Designers</a>
            </li>
            {/* <li className="nav-item ms-0 my-2">
              <a href="/services/digital-marketing">Digital Marketing</a>
            </li> */}
            <li className="nav-item ms-0 my-2">
              <a href="/services/maintenance/tests/">Write Tests</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/services/maintenance/upgrade/">
                Upgrade Your Application
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-12 py-2 d-flex align-items-baseline flex-column text-left text-md-center flex-lg-row justify-content-lg-between footer-separator">
          <ul
            className="nav nav-pills  text-white flip-content-sm contact-bar  d-flex justify-content-start align-items-flex-start
 ms-0"
          >
            <li className="nav-item ms-0 my-2">Company :</li>
            <li className="nav-item ms-0 my-2">
              <a href="/about/">About Us</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/portfolio/">Portfolio</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/blog/">Blog</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/careers/">Careers</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/contact/">Contact Us</a>
            </li>
            <li className="nav-item ms-0 my-2">
              <a href="/trainee/">Fresh Engineers Enrollment Program</a>
            </li>
          </ul>
        </div>
        <CopyRight />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  ctaTitle: PropTypes.string,
};

export default Footer;
