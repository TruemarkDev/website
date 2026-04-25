import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';

import CareerEmpty from './CareerEmpty';
import CareerListTab from './CareerListTab';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: [
            { frontmatter: { date: DESC } }
            { frontmatter: { vacancyCount: ASC } }
          ]
          filter: {
            frontmatter: { type: { eq: "job" }, positionOpen: { eq: true } }
          }
        ) {
          edges {
            node {
              frontmatter {
                uid
                lucidHireJobId
                description
                jobDescriptions
                skills
                perks
                vacancyCount
                positionOpen
                slug
                title
                featuredImage {
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
      const openPositions = data.allMarkdownRemark.edges;
      const areWeHiring =
        openPositions.length > 0 ? 'Interested ? We are hiring' : 'You want to';
      const title =
        openPositions.length > 0 ? 'Current Openings' : 'Work With Us ?';
      const sectionClassName =
        openPositions.length > 0 ? '' : 'position-relative overflow-hidden';
      const rowClassName = openPositions.length > 0 ? '' : 'position-relative';
      const svgClassName = openPositions.length > 0 ? 'd-none' : 'd-block';
      const headerClassName =
        openPositions.length > 0 ? '' : 'position-relative career-header-text';

      return (
        <section
          id="openpositions"
          className={`open-positions ${sectionClassName}`}
        >
          <div className={`position-absolute half-ellipse ${svgClassName}`}>
            <svg
              width="201"
              height="189"
              viewBox="0 0 201 189"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9938 206.232C9.89033 190.867 3.90241 173.859 1.37197 156.179C-1.15847 138.5 -0.181873 120.495 4.246 103.192C8.67387 85.8903 16.4663 69.6296 27.1784 55.339C37.8905 41.0483 51.3124 29.0075 66.6779 19.904C82.0433 10.8005 99.0514 4.81256 116.731 2.28212C134.411 -0.248312 152.416 0.728286 169.718 5.15616C187.02 9.58403 203.281 17.3765 217.571 28.0886C231.862 38.8006 243.903 52.2226 253.006 67.5881L232.546 79.7101C225.034 67.0315 215.099 55.9566 203.307 47.1177C191.515 38.2788 178.098 31.849 163.822 28.1954C149.545 24.5418 134.689 23.736 120.101 25.824C105.512 27.9119 91.4785 32.8528 78.7999 40.3644C66.1214 47.876 55.0465 57.8113 46.2076 69.603C37.3687 81.3947 30.9389 94.8119 27.2853 109.089C23.6317 123.365 22.8259 138.222 24.9138 152.81C27.0018 167.398 31.9426 181.432 39.4542 194.11L18.9938 206.232Z"
                fill="#DCC9E3"
              />
            </svg>
          </div>
          <Container>
            <Row className={rowClassName}>
              <Col md={12}>
                <div className={`header text-center ${headerClassName}`}>
                  <div className="header-tag">{areWeHiring}</div>
                  <h2>{title}</h2>
                </div>
              </Col>
              {openPositions.length > 0 ? (
                <CareerListTab positions={openPositions} />
              ) : (
                <CareerEmpty />
              )}
            </Row>
          </Container>
        </section>
      );
    }}
  />
);
