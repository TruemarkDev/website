import React from 'react';
import PropTypes from 'prop-types';

const SingleTestimonialSection = ({
  feedback,
  author: {
    avatar, name, organization, position
  },
}) => {
  const authorPosCompany = `${position}, ${organization}`;

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 single-case-study position-relative">
            <div className="quoted-text font-weight-normal top">
              <div className="quote" />
              {feedback}
            </div>
            <div className="case-study-user mt-3">
              <div className="user-detail d-flex align-items-center flex-md-row flex-column mb-0">
                <img
                  className="img-fluid img-thumbnail user-image me-lg-4 me-md-0"
                  alt="case study client"
                  src={avatar}
                />
                <div className="text-center text-lg-start text-md-center">
                  <h5 className="m-0 mb-1 text-primary">{name}</h5>
                  <p className="text-secondary m-0">{authorPosCompany}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SingleTestimonialSection.propTypes = {
  feedback: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    organization: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};

export default SingleTestimonialSection;
