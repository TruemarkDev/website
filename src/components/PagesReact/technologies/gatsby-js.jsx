import React from 'react';

import Layout from 'components/Layout/Layout';
import HeroSectionTemplate from 'components/HeroSection/GatsbyHeroSection';
import WhyUseGatsby from 'components/Gatsby/WhyUseGatsby';
import GatsbyServices from 'components/Gatsby/GatsbyServices';
import WhyChooseUs from 'components/Gatsby/WhyChooseUs';
import Faq from 'components/Gatsby/Faq';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';
import softwareTestimonials from 'constants/testimonials/software';
import GatsbyJSProjects from 'components/TopProjects/GatsbyJSProjects';


const pageMetaData = {
  title: 'Truemark | Gatsby JS',
  description: 'Truemark | Top gatsbyjs developers in Nepal',
  keywords: 'gatsbyjs development, gatsby, truemark',
  slug: 'technologies/gatsby-js',
};

const GatsbyPage = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <HeroSectionTemplate/>
    <WhyUseGatsby/>
    <GatsbyServices/>
    <GatsbyJSProjects />
    <TestimonialSection
      items={softwareTestimonials}
      sectionTitle="ABOUT OUR SERVICES"
      sectionSubheading="From Our Customers"
    />
    <WhyChooseUs/>
    <Faq/>
  </Layout>
);

export default GatsbyPage;
