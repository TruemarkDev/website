import React from 'react';

import Layout from 'components/Layout/Layout';
import UpgradeYourApplicationHeroSection from 'components/HeroSection/UpgradeYourApplicationHeroSection';
import WhyUpgradeRailsVersion from 'components/UpgradeYourApplication/WhyUpgradeRailsVersion';
import WorkTogether from 'components/UpgradeYourApplication/WorkTogether';
import WhyChooseUs from 'components/UpgradeYourApplication/WhyChooseUs';
import Faq from 'components/UpgradeYourApplication/Faq';

const pageMetaData = {
  title: 'Truemark | Upgrade Your Application',
  description: 'Best Upgrade Your Application Service in Nepal | Truemark',
  keywords: 'upgrade your application, upgrade-your-application, truemark',
  slug: 'technologies/upgrade-your-application',
};

const UpgradeYourApplicationPage = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <UpgradeYourApplicationHeroSection/>
    <WhyUpgradeRailsVersion/>
    <WorkTogether/>
    <WhyChooseUs/>
    <Faq/>
  </Layout>
);

export default UpgradeYourApplicationPage;