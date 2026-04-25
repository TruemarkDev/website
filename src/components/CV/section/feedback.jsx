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
import PropTypes from 'prop-types';

export default ({ feedbacks }) => {
  if (feedbacks.length <= 0) return null;

  const feedbackItems = feedbacks.map((feedback) => {
    const {
      name, message, updatedDate, location,
    } = feedback;

    const clientAvatar = feedback.avatar || feedback.image;

    return (
      <Card className="mb-3" id="feedback">
        <div className="d-flex media mb-0">
          <div href="#" className="client">
            <img src={clientAvatar} className="img-fluid m-0" alt={name} />
          </div>
          <div body className="media-detail ps-0 ps-md-3 mt-3 mt-md-0">
            <h5 className="mb-2 media-heading">
              {`${name}, ${location} `}
              <span className="text-secondary ms-2">{`(${updatedDate})`}</span>
            </h5>
            <p className="text-secondary mb-0">{message}</p>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <div className="testimonial mt-5">
      <h3 className="h6 mb-3">
        <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
        Client's Feedback
      </h3>
      <Row>
        <Col md={12}>{feedbackItems}</Col>
      </Row>
    </div>
  );
};
