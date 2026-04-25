import React from 'react';

import Layout from 'components/Layout/Layout';
import HeroSectionTemplate from 'components/HeroSection/UIUXHeroSection';
import UXBannerSection from 'components/Banner/UXBannerSection';
import UIUXDesignApproach from 'components/UiUx/UIUXDesignApproach';
import UIUXDesignProcess from 'components/UiUx/UIUXDesignProcess';
import OurTools from 'components/UiUx/OurTools';
import SoftwareTeamSection from 'components/Team/Section/SoftwareTeamSection';
import Faq from 'components/UiUx/Faq';


const pageMetaData = {
  title: 'Truemark | UI/UX',
  description: 'Hire Best UI/UX Designer from Nepal | Truemark',
  keywords: 'UI/UX Design Services, truemark',
  slug: 'services/design',
};

const UIUXDesignServices = () => (
    <Layout pageMetaData={pageMetaData } path={pageMetaData.slug}>
        <HeroSectionTemplate />
        <UXBannerSection />
        <UIUXDesignApproach />
        <UIUXDesignProcess />
        <OurTools />
        <SoftwareTeamSection />
        <Faq />
    </Layout>
);

export default UIUXDesignServices;
