import React from 'react';

import Layout from 'components/Layout/Layout';
import TestimonialSection from 'components/Testimonial/Section/TestimonialSection';
import HelpMeChoose from 'components/ECommerce/Section/HelpMeChoose';
import DriveMoreSales from 'components/ECommerce/Section/DriveMoreSales';
import OurServices from 'components/ECommerce/Section/OurServices';
import EcommerceHeroSection from 'components/HeroSection/EcommerceHeroSection';

import softwareTestimonials from 'constants/testimonials/software';
import WebDevelopmentProcess from 'components/ECommerce/Section/WebDevelopmentProcess';

const pageMetaData = {
  title: 'Truemark | E-Commerce Development Service',
  description: 'Best E-Commerce Development Service in Nepal | Truemark',
  keywords: 'e-commerce development, e-commerce, truemark',
  slug: 'technologies/spree',
};

const SpreePage = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <EcommerceHeroSection />
    <HelpMeChoose />
    <DriveMoreSales />
    <OurServices />
    <WebDevelopmentProcess />
    <TestimonialSection
      items={softwareTestimonials}
      sectionTitle="ABOUT OUR SERVICES"
      sectionSubheading="From Our Customers"
    />
  </Layout>
);

export default SpreePage;
