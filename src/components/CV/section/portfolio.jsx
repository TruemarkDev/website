import React, { useRef } from 'react';
import { Link } from 'gatsby';
import {
  Row, Col, Badge, Card, CardImg, CardBody,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserCircle,
  faLayerGroup,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import Slider, { SlideControls } from 'components/Slider/Slider';

const PortfolioItem = ({ project, md }) => {
  const title = project.title || project.name;
  const image = project.image || project.images[0];
  const tools = project.tools || project.keywords;
  const { url } = project;
  const { caseStudyLink } = project;

  const projectLink = caseStudyLink ? (
    <Link to={caseStudyLink} className="btn btn-outline-light">
      View Details
    </Link>
  ) : (
    <a
      target="_blank"
      rel="noreferrer"
      href={url}
      className="btn btn-outline-light"
    >
      View Details
    </a>
  );
  return (
    <Col md={md}>
      <Card className="px-1 mb-3 mb-md-0">
        <div className="position-relative">
          <CardImg
            top
            width="100%"
            src={image}
            alt="Card image cap"
            className="mb-0"
          />
          <div className="overlay d-flex justify-content-center align-items-center">
            {projectLink}
          </div>
        </div>
        <CardBody className="p-2">
          <div className="skills">
            {tools.map((tool) => (
              <Badge key={tool} color="primary" className='mx-2'>
                {tool}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const UserPortfolio = ({ projects }) => {
  const slideRef = useRef();

  const featuredProjects = projects.filter((project) => project.isFeatured);
  if (featuredProjects.length <= 0) return null;

  const portfolioItems = featuredProjects.map((project) => (
    <PortfolioItem
      md={featuredProjects.length > 1 ? 12 : 6}
      key={project.title}
      project={project}
    />
  ));

  return (
    <div className="cv-portfolio" id="portfolio">
      <Row>
        <Col xs={6}>
          <h3 className="h6 mb-3">
            <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
            Portfolio
          </h3>
        </Col>
        <Col xs={6}>
          {portfolioItems.length > 1 && <SlideControls ref={slideRef} />}
        </Col>
      </Row>
      <Row>
        <Slider ref={slideRef} slideCount={portfolioItems.length}>
          {portfolioItems}
        </Slider>
      </Row>
    </div>
  );
};

export default UserPortfolio;
