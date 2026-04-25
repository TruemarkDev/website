import React, { useState, useEffect } from 'react';

import PortfolioApi from 'services/api/PortfolioApi';

import Layout from 'components/Layout/Layout';
import FetchedDataTemplete from 'components/CV/FetchedDataTemplete';

const userImg = '/images/author/prakash.jpeg';
const reneldyAvatar = '/images/clients/reneldy/reneldy.jpeg';
const projectSoono = '/images/clients/mack/projects/mysoono-com.png';
const projectTravelBook = '/images/clients/dean/projects/travelbook-com.png';
const logo = '/images/company-logo/true-icon.svg';
import {
  TECH_CONSTANTS,
  EXP_CONSTANTS,
  DM_STACK_CONSTANTS,
} from 'src/constants/formConstants';

import mergeProfile from 'utils/mergeFetchedProfile';

const pageMetaData = {
  title: 'Prakash Poudel Sharma | Senior Ruby Developer From Kathmandu',
  description: 'Truemark | Software Development Team | Nepal | Remote',
  keywords:
    'About Truemark, Truemark Technology, Remote Software Development Team',
  slug: 'resume/prakash',
  // featuredImage: { src: onlineMarketing },
};

const profile = {
  basics: {
    name: 'Prakash Poudel Sharma',
    firstName: 'Prakash', // this is added : doesnot contain in api
    authorId: 'Prakash', // this is added : doesnot contain in api
    label: 'CTO @ Truemark Technology',
    image: userImg,
    summary:
      'I specialize in full-stack development, primarily using ReactJS, AngularJS, Ember.js in frontend and Ruby on Rails in backend; highly adaptable, always eager to learn and share; Love working with great teams to solve hard problems and build amazing products.',
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
      TECH_CONSTANTS.SOFTWARE_ARCHITECTURE,
      TECH_CONSTANTS.RAILS,
      TECH_CONSTANTS.PROJECT_MANAGEMENT,
      TECH_CONSTANTS.REACT_NATIVE,
    ],
    defaultRate: {
      // this is added : doesnot contain in api
      lowerValue: 20,
      upperValue: 50,
    },
    profiles: [],
  },
  clientFeedbacks: [
    // this is added : doesnot contain in api
    {
      name: 'Reneldy Senat',
      image: reneldyAvatar,
      location: 'Boston, USA',
      createdDate: '2018-12-24',
      updatedDate: '2018-12-24',
      message:
        'Prakash and his team have proven to be invaluable in the planning and development of over half a dozen of our projects.',
    },
  ],
  otherExperiences: [], // should be in format of skills
  volunteer: [],
  skills: [
    {
      name: 'Ruby on Rails',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: 7,
    },
    {
      name: 'React JS4',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: 4,
    },
    {
      name: 'React Native',
      level: 'Intermediate',
      keywords: [],
      rating: 3,
      yearsOfExperience: 4,
    },
    {
      name: 'Project Management',
      level: 'Advanced',
      keywords: [],
      rating: 4,
      yearsOfExperience: 4,
    },
  ],

  work: [
    {
      company: 'Truemark Technology',
      description: '',
      end: {},
      endDate: '',
      highlights: [
        'As a Chief Technology Officer, I am responsible for on-time delivery of projects, client communication and mentoring junior programmers.',
        'I work with team leads to improve the technical standards of the project.',
      ],
      isCurrentRole: true,
      location: 'Kathmandu, Nepal',
      name: 'Truemark Technology',
      position: 'CTO',
      start: { year: 2017, month: 10 },
      startDate: '2017-10-01',
      summary: '',
      url: 'https://www.truemark.dev/',
      website: 'https://www.truemark.dev/',
    },
    {
      name: 'Leapfrog Technology ',
      company: 'Leapfrog Technology ',
      description: '',
      end: { year: 2017, month: 9 },
      endDate: '2017-09-01',
      isCurrentRole: false,
      location: 'Kathmandu, Nepal',
      position: 'Software Engineer',
      startDate: 'November 2014',
      start: { year: 2014, month: 11 },
      summary: '',
      url: 'https://www.lftechnology.com/',
      website: 'https://www.lftechnology.com/',
      highlights: [
        'As a full stack developer, I was  responsible for writing modular, reusable and excellent quality code through Test Driven Development (TDD), code reviews and implementation of best practices.',
        'I was involved in analysis, design, development, deployment and maintenance of projects. I also developed api, create and maintain technical documents as per the requirements',
      ],
    },
  ],

  projects: [
    {
      name: 'Travelbook',
      description: '',
      url: 'https://travelbook.com/',
      startDate: '',
      endDate: '',
      highlights: [],
      images: [projectTravelBook],
      caseStudyLink: undefined, // this is added : doesnot contain in api
      showcase: [
        {
          images: [projectTravelBook],
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
      name: 'Docker',
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
      name: 'Jira',
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
      end: { year: 2014, month: 11 },
      gpa: '',
      score: '',
      start: { year: 2010, month: 7 },
      url: '',
      website: '',
      institution: 'Advanced College of Engineering and Management',
      location: 'Lalitpur, Nepal',
      studyType: 'Bachelors of Engineering in Computer Science',
      startDate: '2010-07-01',
      endDate: '2014-11-01',
    },
  ],
  awards: [],
  publications: [],
  languages: [],
  interests: [],
  references: [],
  meta: {},
};

const AboutPage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PortfolioApi.fetchOne('poudelprakash')
      .then((result) => {
        setIsLoading(false);
        setResumeData(result.data);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div id="___loader">
        <img src={logo} alt="logo" />
      </div>
    );
  }

  const mergedObject = mergeProfile({
    fetchedObject: resumeData,
    exisitingObject: profile,
  });

  return (
    <Layout pageMetaData={pageMetaData} path={pageMetaData.slug}>
      <FetchedDataTemplete profile={mergedObject} />
    </Layout>
  );
};

export default AboutPage;
