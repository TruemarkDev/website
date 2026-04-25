import React from 'react';

import Layout from 'components/Layout/Layout';
import FetchedDataTemplete from 'components/CV/FetchedDataTemplete';
const userImg = '/images/author/anil.jpg';
const projectSoono = '/images/clients/mack/projects/mysoono-com.png';
const projectTriviaDay = '/images/clients/reneldy/projects/triviaday-net.png';
const projectFlexonet = '/images/clients/ronni/projects/flexonet.png';
import {
  TECH_CONSTANTS,
  EXP_CONSTANTS,
  DM_STACK_CONSTANTS,
} from 'src/constants/formConstants';

const pageMetaData = {
  title: 'Anil Poudel | Senior Javascript Developer From Kathmandu',
  description: 'Truemark | Software Development Team | Nepal | Remote',
  keywords:
    'About Truemark, Truemark Technology, Remote Software Development Team',
  slug: 'resume/anil',
  // featuredImage: { src: onlineMarketing },
};

const profile = {
  basics: {
    name: 'Anil Poudel',
    firstName: 'Anil', // this is added : doesnot contain in api
    authorId: 'Anil', // this is added : doesnot contain in api
    label: 'Senior Javascript Engineer @ Truemark Technology',
    image: userImg,
    summary:
      'Specialize in cross platform mobile app  development, primarily using React Native; highly adaptable, always eager to learn and share; Love working with great teams to solve hard problems and build amazing products.',
    location: {
      address: '',
      postalCode: '',
      region: '',
      city: 'Kathmandu',
      countryCode: 'NP',
      country: 'Nepal', // this is added : doesnot contain in api
      timeZone: 'ASIA/KATHMANDU', // this is added : doesnot contain in api
    },
    platform: ['mobile', 'web'], // this is added : doesnot contain in api
    teamExperience: EXP_CONSTANTS.SENIOR, // this is added : doesnot contain in api
    technologyUsed: [
      // this is added : doesnot contain in api
      TECH_CONSTANTS.REACTJS,
      TECH_CONSTANTS.GATSBYJS,
      TECH_CONSTANTS.REACT_NATIVE,
    ],
    defaultRate: {
      // this is added : doesnot contain in api
      lowerValue: 20,
      upperValue: 50,
    },
    profiles: [],
  },
  clientFeedbacks: [], // this is added : doesnot contain in api

  otherExperiences: [], // should be in format of skills
  volunteer: [],
  skills: [
    {
      name: 'React JS',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: '2+',
    },
    {
      name: 'React Native',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: '2+',
    },
    {
      name: 'NodeJS',
      level: 'Expert',
      keywords: [],
      rating: 4,
      // yearsOfExperience: "2+",
    },
    {
      name: 'GraphQL',
      level: 'Intermediate',
      keywords: [],
      rating: 4,
      // yearsOfExperience: "2+",
    },
  ],

  work: [
    {
      company: 'Truemark Technology',
      description: '',
      end: {},
      endDate: '',
      highlights: [
        'As a Javascript Engineer, I am responsible for reviewing and writing modular, reusable and excellent quality code through implementation of best practices and code reviews.',
        'Working with team leads to improve the technical standards of the project.',
      ],
      isCurrentRole: true,
      location: 'Kathmandu, Nepal',
      name: 'Truemark Technology',
      position: 'Senior Javascript Engineer',
      start: { year: 2018, month: 3 },
      startDate: '2018-03-01',
      summary: '',
      url: 'https://www.truemark.dev/',
      website: 'https://www.truemark.dev/',
    },
  ],

  projects: [
    {
      name: 'Trivia Day',
      description: '',
      url: 'https://triviaday.net/',
      startDate: '',
      endDate: '',
      highlights: [],
      images: [projectTriviaDay],
      caseStudyLink: undefined, // this is added : doesnot contain in api
      showcase: [
        {
          images: [projectTriviaDay],
          title: '',
          description: '',
        },
      ],
      keywords: ['Node JS', 'Postgres', 'React Native'],
      isFeatured: true, // this is added : doesnot contain in api
      roles: [],
      entity: '',
      type: '',
    },
    {
      name: 'Soono',
      description: '',
      url: 'https://mysoono.com/',
      startDate: '',
      endDate: '',
      highlights: [],
      caseStudyLink: undefined, // this is added : doesnot contain in api
      images: [projectSoono],
      showcase: [
        {
          images: [projectSoono],
          title: '',
          description: '',
        },
      ],
      keywords: ['Ruby on Rails', 'Postgres', 'React JS'],
      isFeatured: true, // this is added : doesnot contain in api
      roles: [],
      entity: '',
      type: '',
    },
    {
      name: 'Flexonet',
      description: '',
      url: 'https://flexonet.dk/',
      startDate: '',
      endDate: '',
      highlights: [],
      caseStudyLink: undefined, // this is added : doesnot contain in api
      images: [projectFlexonet],
      showcase: [
        {
          images: [projectFlexonet],
          title: '',
          description: '',
        },
      ],
      keywords: ['Ruby on Rails', 'Postgres', 'React JS', 'React Native'],
      isFeatured: true, // this is added : doesnot contain in api
      roles: [],
      entity: '',
      type: '',
    },
  ],
  tools: [
    // this is added : doesnot contain in api
    {
      name: 'Amazon Web Services',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Digital Ocean',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Heroku',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Nginx',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Asana',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Trello',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Scrum',
      yearsOfExperience: 4,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
  ],

  education: [
    {
      activities: '',
      area: 'Computer Engineering',
      courses: [],
      description: '',
      end: { year: 2020, month: 11 },
      gpa: '',
      score: '',
      start: { year: 2016, month: 1 },
      location: 'Kathmandu, Nepal',
      url: '',
      website: '',
      institution: 'Asian School of Management and Technology',
      studyType: 'Bachelors of Information Management',
      startDate: '2016',
      endDate: '2020',
    },
  ],
  awards: [],
  publications: [],
  languages: [],
  interests: [],
  references: [],
  meta: {},
};

const AboutPage = () => (
  <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
    <FetchedDataTemplete profile={profile} />
  </Layout>
);

export default AboutPage;
