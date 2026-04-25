import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container, Col } from 'reactstrap';
import androidButton from 'images/case-study/playstore.png?url';
import iosButton from 'images/case-study/appstore.png?url';
import bannerBackgroundImage from 'images/case-study/trivia-day/banner-background-screenshot.png?url';
import bannerImage from 'images/case-study/trivia-day/banner-screenshot.png?url';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppLinks = ({ appUrls: { ios, android, web } }) => (
  <Container>
    <Col className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="col-md-4 d-flex align-items-end justify-content-end">
        {android ? (
          <a
            href={android}
            rel="noreferrer"
            target="_blank"
            className="img-btn me-3"
          >
            <img src={androidButton} className="img-fluid mb-0" alt="google play store" />
          </a>
        ) : null}
        {ios ? (
          <a href={ios} rel="noreferrer" target="_blank" className="img-btn">
            <img src={iosButton} className="img-fluid mb-0" alt="apple store" />
          </a>
        ) : null}

        {web ? (
          <a href={web} rel="noreferrer" target="_blank" className="img-btn">
            <img src={iosButton} className="img-fluid mb-0" alt="Website link" />
          </a>
        ) : null}
      </div>
    </Col>
  </Container>
);

AppLinks.defaultProps = {
  appUrls: {
    web: undefined,
    ios: undefined,
    android: undefined,
  },
};

AppLinks.propTypes = {
  appUrls: {
    web: PropTypes.string,
    ios: PropTypes.string,
    android: PropTypes.string,
  },
};

const ResultSection = ({ title, description, appUrls }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="result-section" className="result-section">
      <Container>
        <div className="header text-center">
          <h2>{title}</h2>
        </div>
        <Col md={12}>
          <p className="result-section-description text-center text-secondary">
            {description}
          </p>
        </Col>
      </Container>
      <Slider {...settings}>
        <div>
          <img src={bannerImage} alt="bannerImage" className="result-image" />
        </div>
        <div>
          <img src={bannerImage} alt="bannerImage" className="result-image" />
        </div>
        <div>
          <img src={bannerImage} alt="bannerImage" className="result-image" />
        </div>
        <div>
          <img
            src={bannerBackgroundImage}
            alt="bannerImage"
            className="result-image"
          />
        </div>
        <div>
          <img src={bannerImage} alt="bannerImage" className="result-image" />
        </div>
        <div>
          <img
            src={bannerBackgroundImage}
            alt="bannerImage"
            className="result-image"
          />
        </div>
      </Slider>

      <AppLinks appUrls={appUrls} />
    </section>
  );
};

ResultSection.defaultProps = {
  title: 'Result',
  appUrls: {
    web: undefined,
    ios: undefined,
    android: undefined,
  },
};

ResultSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  appUrls: {
    web: PropTypes.string,
    ios: PropTypes.string,
    android: PropTypes.string,
  },
};

export default ResultSection;
