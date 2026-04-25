import React from 'react';
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocation,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Faq from 'components/FaqSection/ContactFaqSection';
import ContactHeroSection from 'components/HeroSection/ContactHeroSection';
import ContactForm from 'components/Modal/Form/ContactForm';

const ContactPageBody = ({ siteMetadata }) => {
  const { addresses, email, social } = siteMetadata;
  const { usa, nepal } = addresses;
  const { facebookUrl, linkedinUrl, twitterUrl } = social;

  return (
    <>
      <ContactHeroSection />
      <div className="container lg-mt-5 lg-mb-5">
        <div className="contact-us rounded p-3 p-lg-4">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 mb-lg-0">
              <div className="information rounded position-relative">
                <h2 className="pt-4 px-4">Contact Information</h2>
                <div className="p-4">
                  <div className="mb-4">
                    <h4>
                      <span className="pe-3">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      Email
                    </h4>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4>
                      <span className="pe-3">
                        <FontAwesomeIcon icon={faLocation} />
                      </span>
                      Location
                    </h4>
                    <div className="d-flex align-items-center">
                      <div className="nepal"></div>
                      <h6>{nepal.country}</h6>
                    </div>
                    <p>{nepal.kathmandu.title}</p>
                    <div className="d-flex align-items-center">
                      <div className="dover"></div>
                      <h6>{usa.country}</h6>
                    </div>
                    <p>{usa.delaware.title}</p>
                  </div>

                  <div className="mb-5">
                    <h4>
                      <span className="pe-3">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      Call Us
                    </h4>
                    <p>
                      <a href={`tel:${nepal.phone1}`}>{nepal.phone1}</a> (Nepal)
                    </p>
                    <p>
                      <a href={`tel:${nepal.phone2}`}>{nepal.phone2}</a>
                    </p>
                  </div>

                  <div className="social-icons">
                    <ul className="nav nav-pills d-flex">
                      <li className="nav-item">
                        <a href={facebookUrl}>
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="me-2 pe-3"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href={twitterUrl}>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="me-2 pe-3"
                          />
                        </a>
                      </li>
                      <li className="nav-item me-0">
                        <a href={linkedinUrl}>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="me-0"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mb-lg-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
};

export default ContactPageBody;
