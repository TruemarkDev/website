import React from 'react';

import TechStackSection from 'components/Company/Section/TechStackSection';
import SingleCaseStudySection from 'components/CaseStudy/Section/SingleCaseStudySection';
import Layout from 'components/Layout/Layout';
import CompanyStatsSection from 'components/Stats/Section/CompanyStatsSection';
import SoftwareTeamSection from 'components/Team/Section/SoftwareTeamSection';
import TeamBuildingBlogs from 'components/Blog/Section/TeamBuildingBlogs';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';

import ResourceHeroSection from 'components/HeroSection/ResourceHeroSection';
import EngagementModelBannerSection from 'components/Banner/EngagementModelBannerSection';
import ProcessSection from 'components/Company/Section/ProcessSection';
import EstimateForm from 'components/Estimate/EstimateForm';
import { graphql } from 'gatsby';
import { BlogSection } from '@truemark/gatsby-theme-effortless-blog';

const pageMetaData = {
  title: 'Truemark | Work with best software developers from Nepal',
  description:
    "Truemark | We provide 'Talented Nepalese Engineers' to ambitious companies around the world",
  keywords: 'Web development team, hire, Nepal',
  slug: 'hire/resources',
  // featuredImage: { src: onlineMarketing },
};

const ResourcesPage = ({ data }) => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <ResourceHeroSection />
    <CompanyStatsSection employeeCount={25} />
    <EstimateForm forId="estimate" />
    <TechStackSection />
    <SingleCaseStudySection />
    <EngagementModelBannerSection />
    <ProcessSection />
    <BlogSection
      blogs={data.featuredBlogs}
      headerTag="Insights on"
      heading="Building Right Development Team"
      buttonText="View All "
      blogRedirectRoute="/blog"
    />
    <SoftwareTeamSection />
  </Layout>
);

export const pageQuery = graphql`
  query {
    featuredBlogs: allMdx(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: ["digital marketing"] } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            uid
            description
            category
            tags
            slug
            title
            date
            featuredImage {
              childImageSharp {
                resize(width: 630) {
                  src
                  width
                  height
                }
              }
            }
            toc
            author {
              id
              name
              avatar {
                childImageSharp {
                  resize(width: 65) {
                    src
                    height
                    width
                  }
                }
              }
            }
          }
          fields {
            timeToRead {
              text
            }
          }
        }
      }
    }
  }
`;

export default ResourcesPage;
