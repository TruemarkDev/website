import React from 'react';

import Layout from 'components/Layout/Layout';
import WriteTestsHeroSection from 'components/HeroSection/WriteTestsHeroSection';
import QualityAssuranceSection from 'components/WriteTests/Sections/QualityAssuranceSection';
import AboutSection from 'components/WriteTests/Sections/AboutSection';
import ToolsSection from 'components/WriteTests/Sections/ToolsSection';
import WhyChooseUsSection from 'components/WriteTests/Sections/WhyChooseUsSection';

const pageMetaData = {
  title: 'Truemark | Write Test For React And Ruby',
  description: 'Improve your Test Coverage, Outsource writing tests | Truemark',
  keywords: 'Write Tests, write-tests, truemark',
  slug: 'services/maintenance/tests',
};

const WriteTestsPage = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <WriteTestsHeroSection/>
    <QualityAssuranceSection/>
    <AboutSection/>
    <ToolsSection/>
    <WhyChooseUsSection/>
  </Layout>
);

export default WriteTestsPage;
