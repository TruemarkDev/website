const memberAnil = '/images/team/anil.jpg';
const memberPrabin = '/images/team/prabin.jpg';
const memberPrakash = '/images/team/prakash.jpeg';
const memberSunil = '/images/team/sunil.png';
const memberKiran = '/images/team/kiran.jpg';
const memberSushil = '/images/team/sushil.jpeg';
const memberMausam = '/images/team/mausam.jpg';
const memberSunita = '/images/team/sunita.jpeg';
const memberAayush = '/images/team/aayush.jpeg';
const memberArogya = '/images/team/arogya.jpg';
const memberPrakashKotwal = '/images/team/prakash-kotwal.jpg';
import {
  TECH_CONSTANTS,
  EXP_CONSTANTS,
  DM_STACK_CONSTANTS,
} from './formConstants';

export const TEAM_MEMBERS = {
  prakash: memberPrakash,
  prabin: memberPrabin,
  anil: memberAnil,
  prakashIOS: memberPrakashKotwal,
  sunil: memberSunil,
  sunita: memberSunita,
  kiran: memberKiran,
  mausam: memberMausam,
  aayush: memberAayush,
  arogya: memberArogya,
};

const Ayush = {
  id: 1,
  name: 'Ayush Shrestha',
  avatar: TEAM_MEMBERS.aayush,
  bio: 'Digital Marketing Expert',
  skills: [
    { title: 'SEO', className: 'bg-warning me-1' },
    { title: 'Digital Marketing', className: 'bg-info me-1' },
    { title: 'SEM', className: 'bg-primary me-1' },
    { title: 'SMM', className: 'bg-success me-1' },
  ],
  attributes: {
    teamExperience: EXP_CONSTANTS.SENIOR,
    platform: ['mobile', 'web'],
    technologyUsed: [
      DM_STACK_CONSTANTS.CONTENT_WRITING,
      DM_STACK_CONSTANTS.SEO_OPTIMIZATION,
      DM_STACK_CONSTANTS.SOCIAL_MEDIA_MARKETING,
      DM_STACK_CONSTANTS.EMAIL_MARKETING,
      DM_STACK_CONSTANTS.SEARCH_ENGINE_MARKETING,
    ],
    defaultRate: {
      lowerValue: 20,
      upperValue: 40,
    },
  },
};

const Kiran = {
  id: 2,
  name: 'Kiran Poudel',
  avatar: TEAM_MEMBERS.kiran,
  bio: 'Content Strategist',
  skills: [
    { title: 'SEO', className: 'bg-warning me-1' },
    { title: 'Digital Marketing', className: 'bg-info me-1' },
    { title: 'Content Strategy', className: 'bg-success me-1' },
  ],
  attributes: {
    teamExperience: EXP_CONSTANTS.MID,
    platform: ['web'],
    technologyUsed: [
      DM_STACK_CONSTANTS.CONTENT_WRITING,
      DM_STACK_CONSTANTS.SEO_OPTIMIZATION,
      DM_STACK_CONSTANTS.SOCIAL_MEDIA_MARKETING,
    ],
    defaultRate: {
      lowerValue: 14,
      upperValue: 30,
    },
  },
};

const Mausam = {
  id: 4,
  name: 'Mausam Khanal',
  avatar: TEAM_MEMBERS.mausam,
  bio: 'Senior Designer, Frontend Engineer<br /> 7+ years Experience',
  skills: [
    { title: 'ReactJS', className: 'bg-primary me-1' },
    { title: 'NodeJS', className: 'bg-success me-1' },
    { title: 'SEO', className: 'bg-warning me-1' },
    { title: 'Digital Marketing', className: 'bg-info me-1' },
    /* DM */
    { title: 'UI/UX', className: 'bg-success me-1' },
    { title: 'HTML', className: 'bg-info me-1' },
    { title: 'CSS', className: 'bg-warning me-1' },
  ],
  attributes: {
    platform: ['web'],
    teamExperience: EXP_CONSTANTS.SENIOR,
    technologyUsed: [
      TECH_CONSTANTS.REACTJS,
      TECH_CONSTANTS.UI_UX,
      DM_STACK_CONSTANTS.GRAPHICS_DESIGN,
    ],
    defaultRate: {
      lowerValue: 20,
      upperValue: 40,
    },
  },
};

const Prabin = {
  id: 4,
  name: 'Prabin Poudel',
  avatar: TEAM_MEMBERS.prabin,
  bio: 'Team Lead, Full Stack Engineer <br /> 5+ years Experience',
  skills: [
    { title: 'Software Architecture', className: 'bg-info me-1' },
    { title: 'Ruby on Rails', className: 'bg-danger me-1' },
    { title: 'ReactJS', className: 'bg-primary me-1' },
    { title: 'NodeJS', className: 'bg-success me-1' },
    { title: 'React Native', className: 'bg-primary me-1' },
    { title: 'Project Management', className: 'bg-info me-1' },
  ],
  attributes: {
    platform: ['mobile', 'web'],
    teamExperience: EXP_CONSTANTS.SENIOR,
    technologyUsed: [
      TECH_CONSTANTS.REACTJS,
      TECH_CONSTANTS.GATSBYJS,
      TECH_CONSTANTS.SOFTWARE_ARCHITECTURE,
      TECH_CONSTANTS.RAILS,
      TECH_CONSTANTS.PROJECT_MANAGEMENT,
      TECH_CONSTANTS.REACT_NATIVE,
    ],
    defaultRate: {
      lowerValue: 20,
      upperValue: 50,
    },
  },
};

const Prakash = {
  id: 5,
  name: 'Prakash Kotwal',
  avatar: TEAM_MEMBERS.prakashIOS,
  bio: 'Lead IOS Engineer <br /> 10+ years Experience',
  skills: [
    { title: 'IOS', className: 'bg-warning me-1' },
    { title: 'React Native', className: 'bg-info me-1' },
    { title: 'UI/UX', className: 'bg-success me-1' },
    { title: 'Project Management', className: 'bg-primary me-1' },
  ],
  attributes: {
    platform: ['mobile'],
    teamExperience: EXP_CONSTANTS.SENIOR,
    defaultRate: {
      lowerValue: 20,
      upperValue: 50,
    },
  },
};

export const ALL_MEMBERS = {
  Ayush,
  Kiran,
  Mausam,
  Prabin,
  Prakash,
};
export const DM_FEATURED_MEMBERS = [Ayush, Kiran, Mausam];

export const SOFTWARE_FEATURED_MEMBERS = [Prabin, Mausam, Prakash];
