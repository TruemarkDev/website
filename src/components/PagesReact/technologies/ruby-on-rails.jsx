import React from 'react';

import Layout from 'components/Layout/Layout';
import RubyonRailsHeroSection from 'components/HeroSection/RubyonRailsHeroSection';
import OurServices from 'components/RubyOnRails/OurServices';
import HeroSectionTemplate from 'components/HeroSection/HeroSectionTemplate';
import ProjectSection from 'components/Technology/ProjectSection/ProjectSection';
import WhyChooseRuby from 'components/RubyOnRails/WhyUseRuby';
import WhyChooseUs from 'components/RubyOnRails/WhyChooseUs';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';
import softwareTestimonials from 'constants/testimonials/software';
import Faq from 'components/RubyOnRails/Faq';
import RubyandRailsProjects from 'components/UpgradeYourApplication/RubyOnRailsProjects';

const pageMetaData = {
  title: 'Truemark | Ruby on Rails',
  description: 'Hire Best Ruby on Rails developers from Nepal | Truemark',
  keywords: 'ruby development, ror, truemark',
  slug: 'technologies/ruby-on-rails',
};

const RubyOnRailsTechnologies = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <RubyonRailsHeroSection/>
    <WhyChooseRuby/>
    <OurServices/>
    {/* <TestimonialSection
      items={softwareTestimonials}
      sectionTitle="ABOUT OUR SERVICES"
      sectionSubheading="From Our Customers"
    /> */}
    <RubyandRailsProjects />
    <WhyChooseUs/>
    <Faq/>
  </Layout>
);

export default RubyOnRailsTechnologies;
