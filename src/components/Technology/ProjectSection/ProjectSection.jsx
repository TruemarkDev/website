import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ProjectTestimonialCard from './ProjectTestimonialCard';

const ProjectSection = ({ technology, sectionTitle, projects = { edges: [] } }) => {
  const filteredProjects = projects.edges.filter(({ node: { frontmatter } }) => {
    const { technologies, featuredIn } = frontmatter;
    return (
      technologies
      && technologies.includes(technology)
      && featuredIn
      && featuredIn.includes(technology)
    );
  });

  return (
    <section className="technology project-section">
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="header text-center">
              <h2 className="text-capitalize">{sectionTitle}</h2>
            </div>
          </Col>
          {filteredProjects.map(({ node: { frontmatter } }, idx) => (
            <ProjectTestimonialCard key={frontmatter.title ?? idx} project={frontmatter} />
          ))}
        </Row>
      </div>
    </section>
  );
};

ProjectSection.propTypes = {
  technology: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
};

export default ProjectSection;
