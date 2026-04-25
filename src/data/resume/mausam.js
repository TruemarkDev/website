import { TECH_CONSTANTS, EXP_CONSTANTS, DM_STACK_CONSTANTS } from '../../constants/formConstants';
import userImg from 'images/author/mausam.jpg?url';
import projectSoono from 'images/clients/mack/projects/mysoono-com.png?url';


export const profile = {
  attributes: {
    platform: ['mobile', 'web'],
    teamExperience: EXP_CONSTANTS.SENIOR,
    technologyUsed: [
      TECH_CONSTANTS.REACTJS,
      TECH_CONSTANTS.UI_UX,
      DM_STACK_CONSTANTS.GRAPHICS_DESIGN,
    ],
    defaultRate: { lowerValue: 20, upperValue: 40 },
  },
  firstName: 'Mausam',
  name: 'Mausam Khanal',
  position: 'Senior Graphics Designer',
  company: 'Truemark Technology',
  avatar: userImg,
  authorId: 'Mausam',
  location: { city: 'Kathmandu', country: 'Nepal', timeZone: 'ASIA/KATHMANDU' },
  bio:
    'I am a Web Designer & Front-end Developer with 7 years commercial experience, and graduate of Computer Engineering. I create successful websites that are thoughtfully designed and built with performance and best practices in mind.',
  projects: [
    {
      title: 'Soono',
      image: projectSoono,
      tools: ['Ruby on Rails', 'Postgres', 'React JS'],
      url: 'https://mysoono.com/',
      caseStudyLink: undefined,
      isFeatured: true,
    },
  ],
  clientFeedbacks: [],
  otherExperiences: [],
  stackExperiences: [
    { title: 'HTML/CSS', duration: '7 Yrs' },
    { title: 'Digital Marketing', duration: '4 Yrs' },
    { title: 'UI/UX', duration: '4 Yrs' },
    { title: 'Node JS', duration: '3 Yrs' },
    { title: 'React JS', duration: '2 Yrs' },
  ],
  tools: ['Adobe XD', 'Adobe Illustrator', 'Figma', 'Trello'],
  academics: [
    {
      institution: 'Advanced College of Engineering and Management',
      faculty: 'Bachelors of Engineering in Computer Science',
      startDate: '2009',
      endDate: '2014',
      address: 'Lalitpur, Nepal',
    },
    {
      institution: 'Golden Gate International College',
      faculty: '+2 Science',
      startDate: '2007',
      endDate: '2009',
      address: 'Kathmandu, Nepal',
    },
  ],
  employments: [
    {
      institution: 'Truemark Technology ',
      position: 'Senior Designer, Frontend Engineer',
      joinDate: 'April  2018',
      departureDate: 'Present',
      address: 'Samakushi, Kathmandu, Nepal',
      achievements: [
        'As a Senior Designer, Frontend Engineer, I am responisble for creating stunning UI and user friendly UX for our projects.',
      ],
    },
    {
      institution: 'Gautam Overseas',
      position: 'Graphics Designer, Digital Marketing Specialist',
      joinDate: 'March 2018',
      departureDate: 'January 2019',
      address: 'Kuleshwor, Kathmandu, Nepal',
      achievements: [
        'As a Graphics Designer, I was  responsible for designing graphics for social media, update website UI to latest trends',
      ],
    },
    {
      institution: 'PWG Group',
      position: 'Senior Designer, Frontend Developer',
      joinDate: 'March 2016',
      departureDate: 'February 2018',
      address: 'Putalisadak, Kathmandu, Nepal',
      achievements: [
        'As a Designer and Developer, I was responsible for creating company websites, brochure, cards and other digital assets.',
      ],
    },
    {
      institution: 'OrangeTech Pvt. Ltd.',
      position: 'Frontend Developer',
      joinDate: 'October 2014',
      departureDate: 'February 2016',
      address: 'Sankhamul, Kathmandu, Nepal',
      achievements: [
        'As a Frontend Developer, I was responsible for creating stunning websites and update existing website to latest trends.',
      ],
    },
    {
      institution: 'Vortex Infoysys',
      position: 'Junior Frontend Developer',
      joinDate: 'January 2014',
      departureDate: 'September 2014',
      address: 'Kuleshwor, Kathmandu, Nepal',
      achievements: [
        'As a Junior Frontend Developer, I was responsible for creating website from scratch, implement latest technologies.',
      ],
    },
  ],
};
