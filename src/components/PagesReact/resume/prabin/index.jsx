import React from 'react';

const userImg = '/images/author/prabin.jpg';
const reneldyAvatar = '/images/clients/reneldy/reneldy.jpeg';
const antonAvatar = '/images/clients/anton/anton.jpg';
const edwardAvatar = '/images/clients/edward/edward.webp';
const ronniAvatar = '/images/clients/ronni/ronni.webp';
const projectSoono = '/images/clients/mack/projects/mysoono-com.png';
const projectFlexonet = '/images/clients/ronni/projects/flexonet.png';
const projectTriviaDay = '/images/clients/reneldy/projects/triviaday-net.png';
const prabinMetaImage = '/images/meta-images/resume/prabin.webp';
import { TECH_CONSTANTS, EXP_CONSTANTS } from 'src/constants/formConstants';

import Layout from 'components/Layout/Layout';
import FetchedDataTemplete from 'components/CV/FetchedDataTemplete';

const pageMetaData = {
  title: 'Prabin Poudel | Senior Ruby Developer From Kathmandu',
  description: 'Truemark | Software Development Team | Nepal | Remote',
  keywords:
    'About Truemark, Truemark Technology, Remote Software Development Team',
  slug: 'resume/prabin',
  featuredImage: { src: prabinMetaImage },
};

const profile = {
  basics: {
    name: 'Prabin Poudel',
    firstName: 'Prabin', // this is added : doesnot contain in api
    authorId: 'Prabin', // this is added : doesnot contain in api
    label: 'Senior Rails Dev and CEO @ Truemark Technology',
    image: userImg,
    summary:
      'Senior Rails dev | Full Stack Development with Rails/ReactJS | Proficient in CSS and Bootstrap | Project Management with Trello | Loves to adapt and learn new technology | Team Player and Leader',
    location: {
      address: '',
      postalCode: '',
      region: '',
      city: 'Kathmandu',
      countryCode: 'NP',
      country: 'Nepal', // this is added : doesnot contain in api
      timeZone: 'ASIA/KATHMANDU', // this is added : doesnot contain in api
    },
    platform: ['web', 'mobile'], // this is added : doesnot contain in api
    teamExperience: EXP_CONSTANTS.SENIOR, // this is added : doesnot contain in api
    technologyUsed: [
      TECH_CONSTANTS.RAILS,
      TECH_CONSTANTS.SOFTWARE_ARCHITECTURE,
      TECH_CONSTANTS.REACTJS,
      TECH_CONSTANTS.REACT_NATIVE,
      TECH_CONSTANTS.PROJECT_MANAGEMENT,
      TECH_CONSTANTS.GATSBYJS,
    ],
    defaultRate: {
      // this is added : doesnot contain in api
      lowerValue: 25,
      upperValue: 50,
    },
    profiles: [],
  },
  clientFeedbacks: [
    {
      name: 'Reneldy Senat',
      avatar: reneldyAvatar,
      message:
        'I hired Prabin to build our mobile app and he did a great job! He was able to get it built and released to both Apple and Google Play app stores with great quality. Prabin has been the ideal partner; flexible, reliable, and very responsive. He also has great time management skills and always comes to the table with ideas and suggestions to help make the project run smoother. Highly recommended!',
      location: 'Boston, USA',
      createdDate: '2020-03-01',
      updatedDate: '2018-03-01',
    },
    {
      name: 'Anton Hughes',
      avatar: antonAvatar,
      message:
        'Prabin is really easy to work with, and has a good understanding of react-native and javascript. I hope to work with him again one day.',
      location: 'Copenhagen, Denmark',
      createdDate: '2018-07-01',
      updatedDate: '2018-07-01',
    },
    {
      name: 'Edward Irvin',
      avatar: edwardAvatar,
      message:
        'Very thankful for your work and patience to understand! I really appreciate it.',
      location: 'Nashville, USA',
      createdDate: '2020-01-01',
      updatedDate: '2020-01-01',
    },
    {
      name: 'Ronni Poulsen',
      avatar: ronniAvatar,
      message:
        'I had a bad experience with freelancing previously and was quite afraid when I hired Prabin to work on our telecom app. But he is such a professional that he right away made me feel that he was the right choice for the job. I needed a full stack developer who could work on redesigning existing system and also create new applications as we moved forward, and Prabin has done a brilliant job in that regard. He has excellent knowledge on Ruby on Rails and React. He always comes up with suggestions and is very approachable and flexible. I will definitely hire him again in the future and recommend him to anyone wanting to hire him!',
      location: 'Slagelse, Denmark',
      createdDate: '2020-08-01',
      updatedDate: '2020-08-01',
    },
  ], // this is added : doesnot contain in api
  otherExperiences: [], // should be in format of skills
  volunteer: [],
  skills: [
    {
      name: 'Ruby on Rails',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: '4+',
    },
    {
      name: 'React JS',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: '3+',
    },
    {
      name: 'React Native',
      level: 'Expert',
      keywords: [],
      rating: 5,
      yearsOfExperience: '3+',
    },
    {
      name: 'Project Management',
      level: 'Intermediate',
      keywords: [],
      rating: 5,
      yearsOfExperience: '2+',
    },
  ],
  work: [
    {
      company: 'Truemark Technology',
      description: '',
      end: {},
      endDate: '',
      highlights: [
        'Making strategic decisions together with CTO for the overall growth of the company.',
        'Communicating with clients for making their app idea a reality.',
        'Involvement in architecture design of applications.',
      ],
      isCurrentRole: true,
      location: 'Kathmandu, Nepal',
      name: 'Truemark Technology',
      position: 'Chief Executive Officer',
      start: { year: 2018, month: 2 },
      startDate: '2018-02-01',
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
      yearsOfExperience: 1,
      level: 'Well Versed',
      keywords: [],
      rating: 3,
    },
    {
      name: 'Digital Ocean',
      yearsOfExperience: 3,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Heroku',
      yearsOfExperience: 3,
      level: 'Expert',
      keywords: [],
      rating: 5,
    },
    {
      name: 'Nginx',
      yearsOfExperience: 3,
      level: 'Well Versed',
      keywords: [],
      rating: 4,
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
      yearsOfExperience: 3,
      level: 'Expert',
      keywords: [],
      rating: 4,
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
      institution: 'Shanker Dev Campus',
      studyType: 'Bachelors of Information Management',
      startDate: '2014',
      endDate: '2018',
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
