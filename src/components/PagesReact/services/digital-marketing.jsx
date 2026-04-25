import React from 'react';

import { graphql } from 'gatsby';

import Layout from 'components/Layout/Layout';
import FeaturedDMBlog from 'components/Blog/Section/FeaturedDMBlogs';
import DMTeamSection from 'components/Team/Section/DMTeamSection';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';
import CompanyStatsSection from 'components/Stats/Section/CompanyStatsSection';
import DMHeroSection from 'components/HeroSection/DMHeroSection';
import DmServiceSection from 'components/Service/Section/DmServiceSection';
import DMBannerSection from 'components/Banner/DMBannerSection';
import { BlogSection } from '@truemark/gatsby-theme-effortless-blog';
import digitalMarketingTestimonials from 'constants/testimonials/digitalMarketing';

const pageMetaData = {
  title: 'Truemark | Digital Marketing',
  description: 'Truemark | Top Digital Marketing agency in Nepal',
  keywords: 'digital marketing, truemark',
  slug: 'services/digital-marketing',
};

const DigitalMarketingPage = ({ data }) => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <DMHeroSection />
    <CompanyStatsSection employeeCount={5} />
    <DmServiceSection />
    <DMBannerSection />
    <TestimonialSection items={digitalMarketingTestimonials} />
    <BlogSection
      blogs={data.featuredBlogs}
      heading="Latest from the blog"
      headerTag="Seo Blog"
      buttonText="View All Blogs"
      blogRedirectRoute="/blog"
    />
    <DMTeamSection />
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

export default DigitalMarketingPage;
