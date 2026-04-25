import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import celebration from 'images/services/celebration.svg?url';
import MoreTrafficImage from 'images/ecommerce/More-Traffic-image.png?url';

const DMBannerSection = () => (
  <section>
    <div className="container">
      <div className="row flip-content-sm align-items-md-center">
        <div className="col-lg-6 col-md-12 col-sm-12 text-lg-start text-md-center text-center">
          <h2 className="mt-3 mb-2">Get more traffic to your website</h2>
          <p className="text-secondary mt-2">
            Increase your conversion rate and boost your ROI. We focus on:
          </p>

          <div className="d-flex flex-column flex-md-row flex-lg-column mt-lg-4 mt-5 ps-lg-1 ps-0">
            <div className="media d-flex">
              <div className="icon-holder  d-flex justify-content-center align-items-center primary">
                <FontAwesomeIcon icon={faSearchengin} />
              </div>
              <div className="media-body">
                <h4 className="mb-lg-1 mb-2">SEO Strategy</h4>
                <p className="text-secondary mb-0">
                  Optimize your website for better visibility and branding.
                </p>
              </div>
            </div>

            <div className="media d-flex">
              <div className="icon-holder  d-flex justify-content-center align-items-center primary">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div className="media-body">
                <h4 className="mb-lg-1 mb-2">Content Strategy</h4>
                <p className="text-secondary mb-0">
                  Represent your business as a brand through valuable content.
                </p>
              </div>
            </div>

            <div className="media d-flex">
              <div className="icon-holder  d-flex justify-content-center align-items-center primary">
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <div className="media-body">
                <h4 className="mb-lg-1 mb-2">Social Media Strategy</h4>
                <p className="text-secondary mb-0">
                  Reach your customers with right message.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={MoreTrafficImage}
            alt="Celebrate success"
            className="img-fluid flip-img"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DMBannerSection;
