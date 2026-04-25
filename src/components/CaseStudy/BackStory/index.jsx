import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container } from 'reactstrap';
import bgImage from 'images/case-study/trivia-day/backstory.jpg?url';

const BackStory = ({ title, description }) => (
  <section className="py-5 py-md-0">
    <div className="position-relative backstory-section d-flex flex-column justify-content-center">
      {/* d-flex align-items-center flex-column flex-md-row */}
      <Container>
        <Col md={8} lg={6} className="pe-0 pe-md-5">
          <div className="header">
            <h2 className="left">{title}</h2>
          </div>
          <div
            className="text-secondary text-center text-md-start"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Col>
        <Col
          md={4}
          lg={6}
          className="right-edge-box d-flex justify-content-center align-items-center clip4 backstory-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </Container>
    </div>
  </section>
);

BackStory.defaultProps = {
  title: 'Backstory',
};

BackStory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default BackStory;
