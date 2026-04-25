import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from 'reactstrap';

const FeatureItem = ({
  featureIndex,
  heading,
  detail,
  image,
}) => {
  const evenIndex = featureIndex % 2 === 0;
  const sectionBackgroundClassName = evenIndex ? 'bg-light' : 'bg-white';
  const featureBackgroundClassName = evenIndex ? 'primary-bg' : 'secondary-bg';

  return (
    <div
      className={`${sectionBackgroundClassName} position-relative feature-section d-flex align-items-center`}
    >
      <Container className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col md={6} className="py-5">
          <div className="challange d-flex pe-0 pe-md-5">
            <div className="challenge-number mb-0 text-secondary">
              {featureIndex}
            </div>
            <div className="ms-3 mt-2">
              <div className="heading mb-3">
                <h3 className="mb-0 text-secondary">{heading}</h3>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: `${detail}` }}
              />
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className={`${featureBackgroundClassName} right-edge-box p-5 d-flex justify-content-center align-items-center`}
        >
          <img src={image} alt="feature screen" className="img-fluid mb-0" />
        </Col>
      </Container>
    </div>
  );
};

FeatureItem.propTypes = {
  featureIndex: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired
};

export default FeatureItem;
