import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const bannerImage = '/images/case-study/trivia-day/trivia-day-screenshot.png';
const thatVisa = '/images/clients/arbin/projects/that-visa.png';
const travelBook = '/images/clients/dean/projects/travelbook-com.png';
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ projects }) => {
  const portfolios = projects.map((project) => {
    const {
      title: name,
      platforms,
      description,
      webUrl,
      iosUrl,
      androidUrl,
      caseStudyUrl,
      className,
      bgImage,
      featuredImage,
    } = project.node.frontmatter;

    return (
      <PortfolioItem
        key={project.node.id || name}
        name={name}
        platforms={platforms}
        title={name}
        description={description}
        webUrl={webUrl}
        iosUrl={iosUrl}
        androidUrl={androidUrl}
        className={className || 'that-visa'}
        featuredImage={featuredImage}
        platformLabelClassName="badge-primary-outline"
        headingClassName="text-black"
        caseStudyUrl={caseStudyUrl}
        bgImage={bgImage}
      />
    );
  });

  return <div>{portfolios}</div>;
};

export default PortfolioList;
