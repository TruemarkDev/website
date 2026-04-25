const logo = '/images/company-logo/logo_red.svg';
const CONTEXT = 'https://schema.org';
const COMPANY_NAME = 'Truemark Technology';

const getJobSchemaOrgJSONLD = ({ pageMetaData, siteMetadata }) => {
  const { siteUrl } = siteMetadata;

  const {
    uid,
    title,
    datePosted,
    validityInDays,
    monthsOfExperience,
    educationRequirements,
    salaryMin,
    salaryMax,
    remoteEligible,
    description,
    category,
    skills,
    image,
    tags,
    slug,
    jobDescriptions,
    perks,
    positionOpen,
    keywords,
    featuredImage,
    remoteOnly,
    vacancyCount,
  } = pageMetaData;

  const EDUCATION_REQUIREMENTS = educationRequirements.map((category) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: category,
  }));

  const REMOTE_JOB =
    remoteEligible || remoteOnly ? { jobLocationType: 'TELECOMMUTE' } : {};
  const JOB_LOCATION_TYPE = {
    ...REMOTE_JOB,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pabitranagar, Kathmandu',
        addressRegion: 'BAGMATI',
        postalCode: '44600',
        addressCountry: 'NP',
      },
    },
  };

  return {
    '@context': CONTEXT,
    '@type': 'JobPosting',
    title: title,
    description: description,
    identifier: {
      '@type': 'PropertyValue',
      name: COMPANY_NAME,
      value: uid,
    },
    datePosted: datePosted,
    validThrough: validityInDays,
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'NEPAL',
    },
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      sameAs: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/${String(logo)}`,
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'NPR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: salaryMin,
        maxValue: salaryMax,
        unitText: 'MONTH',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'NEPAL',
    },
    ...JOB_LOCATION_TYPE,
    hiringOrganization: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      sameAs: siteUrl,
    },
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: monthsOfExperience,
    },
    educationRequirements: EDUCATION_REQUIREMENTS,
    directApply: true,
    experienceInPlaceOfEducation: true,
  };
};

export default getJobSchemaOrgJSONLD;
