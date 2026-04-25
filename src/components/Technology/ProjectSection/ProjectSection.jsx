import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ProjectTestimonialCard from './ProjectTestimonialCard';

const ProjectSection = ({ technology, sectionTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          sort: {frontmatter: {uid: DESC}}
          filter: {frontmatter: {type: {eq: "project"}, featured: {eq: true}}}
        ) {
          edges {
            node {
              frontmatter {
                title
                webUrl
                caseStudyUrl
                technologies
                featuredIn
                owner
                position
                testimonialLong
                clutchUrl
                companyName
                featuredImage {
                  childImageSharp {
                    resize(width: 630) {
                      src
                      width
                      height
                    }
                  }
                }
                companyLogo {
                  childImageSharp {
                    resize(width: 630) {
                      src
                      width
                      height
                    }
                  }
                }
                ownerImage {
                  childImageSharp {
                    resize(width: 630) {
                      src
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const allProjects = data.allMarkdownRemark.edges;
      const filteredProjects = allProjects.filter((project) => {
        const {
          node: {
            frontmatter: { technologies, featuredIn },
          },
        } = project;

        return (
          technologies
          && technologies.includes(technology)
          && featuredIn
          && featuredIn.includes(technology)
        );
      });

      const projectTestimonialArray = filteredProjects.map(
        ({ node: { frontmatter } }) => (
          <ProjectTestimonialCard project={frontmatter} />
        )
      );

      return (
        <section className="project-section">
          <div className="container">
            <Row>
              <Col md={12}>
                <div className="header text-center">
                  <h2 className="text-capitalize">{sectionTitle}</h2>
                </div>
              </Col>
              {projectTestimonialArray}
            </Row>
          </div>
        </section>
      );
    }}
  />
);

ProjectSection.propTypes = {
  technology: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired
};

export default ProjectSection;
