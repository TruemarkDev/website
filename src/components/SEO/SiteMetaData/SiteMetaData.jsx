import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import getSchemaOrgJSONLD from 'components/SEO/getSchemaOrgJSONLD';
import og from 'components/SEO/og';
import twitterCard from 'components/SEO/twitterCard';
import defaultCoverImage from 'images/meta-images/truemark-cover.jpg?url';

const SiteMetaData = ({ siteMetadata, pageMetaData, path }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
  } = siteMetadata;

  const {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    featuredImage: pageImage,
  } = pageMetaData;

  const title = pageTitle || siteTitle;
  const description = pageDescription || siteDescription;
  const keywords = pageKeywords || siteKeywords;
  const coverImage =
    pageImage && pageImage.src ? pageImage.src : defaultCoverImage;
  const imageUrl = process.env.WEBSITE_URL + String(coverImage);
  const schemaOrgConfig = getSchemaOrgJSONLD({ pageMetaData, siteMetadata });
  const canonicalUrl = path ? `${process.env.WEBSITE_URL}/${path}/` : `${process.env.WEBSITE_URL}/`;

  const helmetMeta = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords,
    },
    { name: 'author', content: 'Truemark Technology' },
    ...og({ title, description, image: imageUrl }),
    ...twitterCard({ title, description, image: imageUrl }),
  ];
  return (
    <Helmet title={title} meta={helmetMeta}>
      <html lang="en" data-theme="theme" />
      <link rel="canonical" href={canonicalUrl} />
      {/* <script src="https://www.googleoptimize.com/optimize.js?id=GTM-T4WV6XZ" /> */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgConfig)}
      </script>
      <script>
        {`document.documentElement.dataset.theme = window.localStorage.getItem('theme')
    `}
      </script>
    </Helmet>
  );
};

SiteMetaData.defaultProps = {
  pageMetaData: {},
};

SiteMetaData.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
  pageMetaData: PropTypes.object,
};

export default SiteMetaData;
