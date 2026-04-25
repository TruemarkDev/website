import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Layout from 'components/Layout/Layout';

import HeroSection from 'components/CaseStudy/Section/HeroSection';
import SingleTestimonialSection from 'components/CaseStudy/SingleTestimonial';
import BackStory from 'components/CaseStudy/BackStory';
import ProjectPlanning from 'components/CaseStudy/ProjectPlanning';
import ProjectChallenge from 'components/CaseStudy/ProjectChallenge/Index';
import ProjectFeatures from 'components/CaseStudy/ProjectFeatures';
import ResultSection from 'components/CaseStudy/ResultSection/Index';
import TechnologyUsedSection from 'components/CaseStudy/TechnologyUsedSection/Index';
import CaseStudyCTA from 'components/CaseStudy/CaseStudyCTA';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';

const shortcodes = {
  HeroSection,
  SingleTestimonialSection,
  BackStory,
  ProjectPlanning,
  ProjectChallenge,
  ProjectFeatures,
  ResultSection,
  TechnologyUsedSection,
  CaseStudyCTA,
  TestimonialSection,
};

const CaseStudyTemplate = ({ data: { mdx }, children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <Layout>{children}</Layout>
    </MDXProvider>
  );
};

export default CaseStudyTemplate;

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, type: { eq: "case-study" } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;
