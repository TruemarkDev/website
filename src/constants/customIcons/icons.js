import {
  CONTENT_CREATOR_PATH,
  CSS_PATH,
  GATSBY_PATH,
  HTML_PATH,
  IOS_PATH,
  MANAGEMENT_PATH,
  RAILS_PATH,
  REACT_PATH,
  SEO_PATH,
  UI_UX_PATH,
  FIGMA_PATH,
  PROJECT_MANAGEMENT_PATH,
  NEXT_JS_PATH
} from './path';

const BRAND_NAME = 'truemark';

const SIZES = {
  XS: 16,
  SM: 32,
  MD: 64,
  LG: 96,
};

const prefixID = 'e00';

// replace 32, 32 with your SVG viewbox
// e001 is the unicode point which represents this custom icon. Increment this value for other icons
// replace 'REACT_ICON...' with your single-path SVG
export const faReactIcon = {
  prefix: BRAND_NAME,
  iconName: 'react-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 1, REACT_PATH],
};

export const faRailIcon = {
  prefix: BRAND_NAME,
  iconName: 'rails-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 2, RAILS_PATH],
};

export const faGatsbyIcon = {
  prefix: BRAND_NAME,
  iconName: 'gatsby-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 3, GATSBY_PATH],
};

export const faIosIcon = {
  prefix: BRAND_NAME,
  iconName: 'ios-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 4, IOS_PATH],
};

export const faCSSIcon = {
  prefix: BRAND_NAME,
  iconName: 'css-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 5, CSS_PATH],
};

export const faHTMLIcon = {
  prefix: BRAND_NAME,
  iconName: 'html-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 6, HTML_PATH],
};

export const faSEOIcon = {
  prefix: BRAND_NAME,
  iconName: 'seo-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 6, SEO_PATH],
};

export const faUIUXIcon = {
  prefix: BRAND_NAME,
  iconName: 'ui-ux-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 7, UI_UX_PATH],
};

export const faContentCreatorIcon = {
  prefix: BRAND_NAME,
  iconName: 'content-creator-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 8, CONTENT_CREATOR_PATH],
};

export const faManagementIcon = {
  prefix: BRAND_NAME,
  iconName: 'management-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 9, MANAGEMENT_PATH],
};

export const faFigmaIcon = {
  prefix: BRAND_NAME,
  iconName: 'figma-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 10, FIGMA_PATH],
};

export const faProjectManagementIcon = {
  prefix: BRAND_NAME,
  iconName: 'project-management-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 11, PROJECT_MANAGEMENT_PATH],
};

export const faNextJsIcon = {
  prefix: BRAND_NAME,
  iconName: 'next-js-icon',
  icon: [SIZES.SM, SIZES.SM, [], prefixID + 11, NEXT_JS_PATH],
};
