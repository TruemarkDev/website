// TODO: @prakash this file does not contain html or react..move to constants or utils folder?

const logo = '/images/company-logo/logo_red.svg';
import getJobSchemaOrgJSONLD from 'components/SEO/getJobSchemaOrgJSONLD';

const context = 'https://schema.org';

const getSchemaOrgJSONLD = ({ siteMetadata, pageMetaData }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = siteMetadata;
  const {
    title,
    author,
    description,
    image,
    type,
    slug: url,
    date,
    keywords,
    category,
  } = pageMetaData;

  const isBlogPost = type === 'blog-post';
  const isJobs = type === 'job';
  const schemaOrgJSONLD = {
    '@context': context,
    '@type': 'WebSite',
    url: siteUrl,
    name: title || siteTitle,
    alternateName: siteTitle,
  };

  if (isJobs) return getJobSchemaOrgJSONLD({ pageMetaData, siteMetadata });
  if (!isBlogPost) return schemaOrgJSONLD;

  return {
    ...schemaOrgJSONLD,
    ...{
      '@context': context,
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': url,
            name: title,
            image: image.src,
          },
        },
      ],
    },
    ...{
      '@context': context,
      '@type': 'BlogPosting',
      url,
      name: title,
      alternateName: siteTitle,
      headline: title,
      keywords,
      genre: category,
      image: {
        '@type': 'ImageObject',
        url: image.src,
      },
      description,
      author: {
        '@type': 'Person',
        name: author.name,
      },
      publisher: {
        '@type': 'Organization',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/${String(logo)}`,
        },
        name: author.organization,
      },
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': siteUrl,
      },
      datePublished: date,
      dateModified: date,
    },
  };
};

export default getSchemaOrgJSONLD;
