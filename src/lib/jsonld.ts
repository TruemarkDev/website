import { siteMetadata } from './site-metadata';

const LOGO_PATH = '/images/company-logo/logo_red.svg';
const ORG_NAME = 'Truemark Technology';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}${LOGO_PATH}`,
    email: siteMetadata.email,
    sameAs: [
      siteMetadata.social.facebookUrl,
      siteMetadata.social.linkedinUrl,
      siteMetadata.social.twitterUrl,
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: siteMetadata.addresses.nepal.country,
        streetAddress: siteMetadata.addresses.nepal.kathmandu.title,
        telephone: siteMetadata.addresses.nepal.phone1,
      },
      {
        '@type': 'PostalAddress',
        addressCountry: siteMetadata.addresses.usa.country,
        streetAddress: siteMetadata.addresses.usa.delaware.title,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
  };
}

// Build a BreadcrumbList from a URL path like "blog/some-post" or "services/design".
// Each segment becomes a list item; segments are humanized (kebab-case → Title Case).
export function breadcrumbJsonLd(path: string) {
  const cleaned = path.replace(/^\/+|\/+$/g, '');
  if (!cleaned) return null;
  const segments = cleaned.split('/');
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteMetadata.siteUrl,
    },
  ];
  let cumulative = '';
  segments.forEach((seg, i) => {
    cumulative += `/${seg}`;
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: humanize(seg),
      item: `${siteMetadata.siteUrl}${cumulative}`,
    });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function humanize(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}
