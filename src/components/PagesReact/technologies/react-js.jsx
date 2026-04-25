import React from 'react';

import Layout from 'components/Layout/Layout';
import HeroSectionTemplate from 'components/HeroSection/ReactjsHeroSection';
import WhyUseReact from 'components/Reactjs/WhyUseReact';
import ReactServices from 'components/Reactjs/OurServices';
import WhyChooseUs from 'components/Reactjs/WhyChooseUs';
import ChooseRightFramework from 'components/Reactjs/ChooseRightFramework';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';
import Faq from 'components/Reactjs/Faq';
import ReactJSProjects from 'components/TopProjects/ReactJSProjects'

import softwareTestimonials from 'constants/testimonials/software';

const pageMetaData = {
  title: 'Truemark | Reactjs',
  description: 'Hire Best Reactjs developers from Nepal | Truemark',
  keywords: 'reactjs development, react, truemark',
  slug: 'technologies/react-js',
};

const ReactjsTechnology = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <HeroSectionTemplate/>
    <WhyUseReact/>
    <ReactServices/>
    <ReactJSProjects />
    <ChooseRightFramework/>
    <TestimonialSection
      items={softwareTestimonials}
      sectionTitle="ABOUT OUR SERVICES"
      sectionSubheading="From Our Customers"
    />
    <WhyChooseUs/>
    <Faq/>
  </Layout>
);

export default ReactjsTechnology;
