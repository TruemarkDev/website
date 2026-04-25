import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Col, Row } from 'reactstrap';
// gatsby-plugin-image removed in Astro migration; raw <img> below uses src.
const getImage = (img) => img;

import ButtonWithModal from 'components/Button/ButtonWithModal';
const triviaDay = '/images/portfolio/trivia-day.png';
const triviaDayBg = '/images/portfolio/trivia-day-bg.jpg';
const travelbook = '/images/portfolio/travelbook.png';
const travelbookBg = '/images/portfolio/travelbook-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import PortfolioItemModal from 'components/Modal/PortfolioItemModal';
import Projects from 'constants/portfolioItems/data';

const PlatformLabels = ({ platforms, platformLabelClassName }) => {
  const classNames = ['badge', 'outline', 'me-2'];
  classNames.push(platformLabelClassName);

  return platforms.map((platform) => (
    <span key={platform} className={classNames.join(' ')}>{platform}</span>
  ));
};

const VisitButton = ({ caseStudyUrl, webUrl }) => {
  if (caseStudyUrl) {
    return (
      <Link
        to={caseStudyUrl}
        className="btn btn-lg white outlined px-md-4 mt-4 me-2 btn-text-hover"
      >
        VIEW CASE STUDY
      </Link>
    );
  }

  if (webUrl) {
    return (
      <a
        href={webUrl}
        target="_blank"
        className="btn btn-lg white outlined px-1 px-md-4 mt-4 me-4 btn-text-hover"
        rel="noreferrer"
      >
        VISIT WEBSITE
      </a>
    );
  }

  return null;
};

const DetailsButton = ({ showModal, title }) => {
  const areDetailsAvailable = Projects.find((item) => item.name === title);

  if (!areDetailsAvailable) return null;

  return (
    <button type="button" className="btn btn-lg white outlined px-1 px-md-4 mt-4 me-2 btn-text-hover" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={showModal}>
      VIEW DETAILS
    </button>
  );
};


const AvailableOn = ({ iosUrl, androidUrl }) => {
  if (!iosUrl && !androidUrl) return null;
  return (
    <div className="d-flex mt-3 justify-content-start align-items-center text-white">
      <span className="me-3">Available on:</span>
      {iosUrl && (
        <a
          target="_blank"
          href={iosUrl}
          className="  d-flex justify-content-center align-items-center store-download
 me-3"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faAppStore} />
        </a>
      )}
      {androidUrl && (
        <a
          target="_blank"
          href={androidUrl}
          className="  d-flex justify-content-center align-items-center store-download
 me-3"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGooglePlay} />
        </a>
      )}
    </div>
  );
};

const PortfolioItem = ({
  className = 'that-visa',
  platforms,
  platformLabelClassName,
  headingClassName,
  title,
  featuredImage,
  description,
  caseStudyUrl,
  androidUrl,
  iosUrl,
  webUrl,
  bgImage,
}) => {
  const classNames = ['portfolio', 'py-0'];
  classNames.push(className);
  const featuredImageSrc = getImage(featuredImage);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>

      {modalIsOpen && (
        <PortfolioItemModal
          title={title}
          toggle={toggleModal}
          isOpen={modalIsOpen}
        />
      )}

      <section
        className={classNames.join(' ')}
        style={
          bgImage && {
            backgroundImage: `url(${bgImage.childImageSharp.resize.src})`,
          }
        }
      >
        <div className="portfolio-overlay h-100">
          <Container className="h-100">
            <Row className="justify-content-between align-items-center h-100">
              <Col lg={5} md={7}>
                <div className="portfolio-details">
                  <PlatformLabels
                    platforms={platforms}
                    platformLabelClassName={platformLabelClassName}
                  />
                  <h2 className="heading text-white mt-2 mb-2">{title}</h2>
                  <p className="description text-white mb-2">{description}</p>
                  <VisitButton webUrl={webUrl} caseStudyUrl={caseStudyUrl} />
                  <DetailsButton showModal={toggleModal} title={title} />
                  <AvailableOn androidUrl={androidUrl} iosUrl={iosUrl} />
                </div>
              </Col>
              <Col
                lg={6}
                md={5}
                className="d-flex justify-content-end align-items-end showcase"
              >
                {/* <GatsbyImage
                  image={featuredImageSrc}
                  alt="bannerImage"
                  className="mb-0 img-fluid showcase-img"
                /> */}
                {featuredImage && (
                  <img className='img-fluid'
                    src={
                      featuredImage.childImageSharp?.gatsbyImageData?.src ||
                      featuredImage.childImageSharp?.resize?.src ||
                      featuredImage.src
                    }
                  />
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </section>

    </div>
  );
};

export default PortfolioItem;
