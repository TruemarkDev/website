import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserCircle,
  faLayerGroup,
  faBriefcase,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import {
  Row, Col, Badge, Card, CardImg, CardBody, Media,
} from 'reactstrap';

export default ({ experiences }) => {
  if (experiences.length <= 0) return null;

  return (
    <div className="other-experience mt-5" id="other-experience">
      <h3 className="h6 mb-3">
        <FontAwesomeIcon icon={faBriefcase} className="me-2" />
        Other Experience
      </h3>
      <Row>
        <Col lg={12} md={6} className="mb-3">
          <a href="#">
            <Row className="align-items-center">
              <Col lg={4} md={12} className="image-holder mb-3 mb-lg-0">
                <img
                  src="https://graygrids.com/wp-content/uploads/2019/06/preview-4.jpg"
                  alt="wp-content"
                  className="img-fluid mb-0"
                />
              </Col>
              <Col lg={8} md={12} className="detail">
                <h4 className="mb-2">
                  Design Tool Showdown – Adobe XD vs. Sketch (2019)
                  (Publication)
                </h4>
              </Col>
            </Row>
          </a>
        </Col>
        <Col lg={12} md={6}>
          <a href="#">
            <Row className="align-items-center">
              <Col lg={4} md={12} className="image-holder mb-3 mb-lg-0">
                <img
                  src="https://www.designhill.com/design-blog/wp-content/uploads/2019/03/graphic-design-portfolio-1-768x461.jpg"
                  alt="graphic design"
                  className="img-fluid mb-0"
                />
              </Col>
              <Col lg={8} md={12} className="detail">
                <h4 className="mb-2">
                  Adobe XD vs. Sketch – Which UX Tool Is Right for You?
                  (Publication)
                </h4>
              </Col>
            </Row>
          </a>
        </Col>
      </Row>
    </div>
  );
};
