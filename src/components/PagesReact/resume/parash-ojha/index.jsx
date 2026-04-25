import React from 'react';

import Layout from 'components/Layout/Layout';
import FetchedDataTemplete from 'components/CV/FetchedDataTemplete';
const truemark = '/images/company-logo/truemark-vertical-logo.png';
const projectSoono = '/images/clients/mack/projects/mysoono-com.png';
const projectTriviaDay = '/images/clients/reneldy/projects/triviaday-net.png';
const projectFlexonet = '/images/clients/ronni/projects/flexonet.png';
import {
  TECH_CONSTANTS,
  EXP_CONSTANTS,
  DM_STACK_CONSTANTS,
} from 'src/constants/formConstants';

const pageMetaData = {
  title: 'Parash Ojha | React JS Engineer From Kathmandu',
  description: 'Truemark | Software Development Team | Nepal | Remote',
  keywords:
    'About Truemark, Truemark Technology, Remote Software Development Team',
  slug: 'resume/parash-ojha',
  // featuredImage: { src: onlineMarketing },
};

const profile = {
  basics: {
    name: 'Parash Ojha',
    firstName: 'Parash', // this is added : doesnot contain in api
    authorId: 'Parash', // this is added : doesnot contain in api
    label: 'React JS Engineer @ Truemark Technology',
    image: truemark,
    summary:
      'I am software engineer with more than 4 years of experience working in almost every area possible. I have a particular passion for JavaScript. I can create REST and APIs from scratch and has worked with libraries and frameworks like React Native, Angular, React.js, and Backbone. I have worked on wide range of projects that required a breadth of knowledge and excellent communication skills.',
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
      name: 'MongoDB',
      level: 'Intermediate',
      keywords: [],
      rating: 5,
      // yearsOfExperience: "2+",
    },
    {
      name: 'Adobe xd',
      level: 'Intermediate',
      keywords: [],
      rating: 5,
      // yearsOfExperience: "2+",
    },
    {
      name: 'PSD to HTML',
      level: 'Intermediate',
      keywords: [],
      rating: 5,
      // yearsOfExperience: "2+",
    },
    {
      name: 'Web Design',
      level: 'Intermediate',
      keywords: [],
      rating: 5,
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
        'Involved in Enterprise level software development process for different agencies',
        'Developing web templates using Bootstrap, React, Node and mongoDB.',
      ],
      isCurrentRole: true,
      location: 'Kathmandu, Nepal',
      name: 'Truemark Technology',
      position: 'React JS Engineer',
      startDate: 'November 2018',
      start: { year: 2018, month: 11 },
      summary: '',
      url: 'https://www.truemark.dev/',
      website: 'https://www.truemark.dev/',
    },
    {
      company: 'Xelwel Innovation Nepal',
      description: '',
      end: { year: 2018, month: 1 },
      endDate: '2018-01-04',
      isCurrentRole: false,
      name: 'Xelwel Innovation Nepal',
      location: 'Kathmandu, Nepal',
      position: 'Frontend Developer',
      startDate: 'November 2017',
      start: { year: 2017, month: 11 },
      summary: '',
      highlights: [,
        'Lead UI/UX website designer for a fast-paced design firm.',
        'Developing web templates using Bootstrap,JQuery and plugins.',
        'Handled all composition, color illustration, typography and branding for client projects.',
        'Developing web templates using Bootstrap, React, Node and mongoDB.',
      ],
    },
    {
      company: 'Splendor Digitial Nepal',
      description: '',
      name: 'Splendor Digitial Nepal',
      end: { year: 2017, month: 10 },
      endDate: '2017-10-04',
      isCurrentRole: false,
      location: 'Kathmandu, Nepal',
      position: 'Frontend Developer',
      startDate: 'February 2017',
      start: { year: 2017, month: 2 },
      summary: '',
      url: '',
      website: '',
      highlights: [,
        'PSD to HTML & CSS, Pixel perfect and semantic coding.',
        'Developing web templates using Bootstrap, React, Node and mongoDB.'
      ],
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
      keywords: ['Node', 'Adobe xd', 'React JS', 'React Native'],
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
      end: { year: 2018, month: 10 },
      gpa: '',
      score: '',
      start: { year: 2014, month: 10 },
      location: 'Kathmandu, Nepal',
      url: '',
      website: '',
      institution: 'New Summit College',
      studyType: 'Bachelors of Science in Computer Science and Information Technology',
      startDate: '2014',
      endDate: '2018',
    },
    {
      activities: '',
      area: 'High School',
      courses: [],
      description: '',
      end: { year: 2014, month: 6 },
      gpa: '',
      score: '',
      start: { year: 2012, month: 2 },
      location: 'Kathmandu, Nepal',
      url: '',
      website: '',
      institution: 'Nepal Mega College',
      studyType: 'High school',
      startDate: '2012',
      endDate: '2014',
    }
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
