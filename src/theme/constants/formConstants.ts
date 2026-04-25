export const TECH_CONSTANTS = {
    REACTJS: 'react-js',
    NODEJS: 'node-js',
    RAILS: 'rails',
    REACT_NATIVE: 'react-native',
    GATSBYJS: 'gatsby-js',
    UI_UX: 'ui-ux',
    PROJECT_MANAGEMENT: 'project-management',
    SOFTWARE_ARCHITECTURE: 'software-architecture',
  };
  
  export const DM_STACK_CONSTANTS = {
    CONTENT_WRITING: 'content-writing',
    SEO_OPTIMIZATION: 'seo-optimization',
    SEARCH_ENGINE_MARKETING: 'search-engine-marketing',
    SOCIAL_MEDIA_MARKETING: 'social-media-marketing',
    EMAIL_MARKETING: 'email-marketing',
    GRAPHICS_DESIGN: 'graphics-design',
  };
  
  export const EXP_CONSTANTS = {
    SENIOR: 'senior',
    MID: 'mid',
    JUNIOR: 'junior',
  };
  
  export const TEAM_SIZE_CONSTANTS = {
    LARGE: '5-10',
    MID: '3-5',
    SMALL: '1-2',
  };
  
  export const SERVICE_TYPE_CONSTANTS = {
    SIDE_PROJECT: 'side_project',
    PART_TIME: 'part_time',
    FULL_TIME: 'full_time',
  };
  
  export const TECHNOLOGY_STACK = [
    { label: 'ReactJS', value: TECH_CONSTANTS.REACTJS },
    { label: 'NodeJS', value: TECH_CONSTANTS.NODEJS },
    { label: 'Rails', value: TECH_CONSTANTS.RAILS },
    { label: 'React Native', value: TECH_CONSTANTS.REACT_NATIVE },
    { label: 'GatsbyJS', value: TECH_CONSTANTS.GATSBYJS },
    { label: 'UI/UX', value: TECH_CONSTANTS.UI_UX },
    {
      label: 'Project Management',
      value: TECH_CONSTANTS.PROJECT_MANAGEMENT,
    },
    {
      label: 'Software Architecture',
      value: TECH_CONSTANTS.SOFTWARE_ARCHITECTURE,
    },
  ];
  
  export const DIGITAL_MARKETING_STACK = [
    {
      label: 'Content Writing',
      value: DM_STACK_CONSTANTS.CONTENT_WRITING,
    },
    {
      label: 'Search Engine Optimization',
      value: DM_STACK_CONSTANTS.SEO_OPTIMIZATION,
    },
    {
      label: 'Search Engine Marketing',
      value: DM_STACK_CONSTANTS.SEARCH_ENGINE_MARKETING,
    },
    {
      label: 'Social Media Marketing (SMM)',
      value: DM_STACK_CONSTANTS.SOCIAL_MEDIA_MARKETING,
    },
    {
      label: 'Email Marketing',
      value: DM_STACK_CONSTANTS.EMAIL_MARKETING,
    },
    {
      label: 'Graphics Design',
      value: DM_STACK_CONSTANTS.GRAPHICS_DESIGN,
    },
  ];
  
  export const TEAM_EXPERIENCE = [
    { label: 'Senior', value: EXP_CONSTANTS.SENIOR },
    { label: 'Sen/mid', value: EXP_CONSTANTS.MID },
    { label: 'Junior', value: EXP_CONSTANTS.JUNIOR },
  ];
  
  export const TEAM_SIZE = [
    { label: '1-2', value: TEAM_SIZE_CONSTANTS.SMALL },
    { label: '3-5', value: TEAM_SIZE_CONSTANTS.MID },
    { label: '5-10', value: TEAM_SIZE_CONSTANTS.LARGE },
  ];
  
  export const SERVICE_TYPE = [
    {
      label: 'Side project ( 10 w h /w)',
      value: SERVICE_TYPE_CONSTANTS.SIDE_PROJECT,
    },
    {
      label: 'Part time ( 20 w h /w',
      value: SERVICE_TYPE_CONSTANTS.PART_TIME,
    },
    { label: 'Full time ( 40 w h /w)', value: SERVICE_TYPE_CONSTANTS.FULL_TIME },
  ];
  
  export const COMMITMENT_LENGTH = [
    { label: '1 Month', value: '1month' },
    { label: '1-6 Month', value: '1-6months' },
    { label: '1-12 Month', value: '1-12months' },
  ];
  