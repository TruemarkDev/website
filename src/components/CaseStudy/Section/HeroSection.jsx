import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import ProjectInfo from 'components/CaseStudy/ProjectInfo';
import BannerImg from 'images/case-study/trivia-day/trivia-bg.jpg?url';

const AppLinks = ({ web, ios, android }) => (
  <div className="d-flex mt-3 justify-content-start align-items-center text-white">
    <span className="me-3">Available on:</span>
    {web ? (
      <a
        href={web}
        rel="noreferrer"
        target="_blank"
        className="  d-flex justify-content-center align-items-center store-download
 me-3"
      >
        <FontAwesomeIcon icon={faGlobe} />
      </a>
    ) : null}
    {ios ? (
      <a
        href={ios}
        rel="noreferrer"
        target="_blank"
        className="  d-flex justify-content-center align-items-center store-download
 me-3"
      >
        <FontAwesomeIcon icon={faAppStore} />
      </a>
    ) : null}
    {android ? (
      <a
        href={android}
        rel="noreferrer"
        target="_blank"
        className="  d-flex justify-content-center align-items-center store-download
 me-3"
      >
        <FontAwesomeIcon icon={faGooglePlay} />
      </a>
    ) : null}
  </div>
);

AppLinks.defaultProps = {
  web: undefined,
  android: undefined,
  ios: undefined,
};

AppLinks.propTypes = {
  web: PropTypes.string,
  android: PropTypes.string,
  ios: PropTypes.string,
};

const ProjectTags = ({ tags }) =>
  tags.map((tag) => (
    <span className="badge outline me-2 badge-white-outline">{tag}</span>
  ));

const HeroSection = ({
  heroSectionData: { title, description, tags, appUrls, projectStats },
}) => (
  <section
    className="bg-dark case-study py-0"
    style={{ backgroundImage: `url(${BannerImg})` }}
  >
    <div className="overlay h-100 d-flex align-items-end pt-5 pb-3">
      <div className="container">
        <div className="col-md-7 col-lg-6 mt-5 mb-4">
          <div className="portfolio-details">
            <ProjectTags tags={tags} />
            <h1 className="text-white mt-2 mb-2">{title}</h1>
            <p className="description text-white mb-2">{description}</p>
            <AppLinks {...appUrls} />
          </div>
        </div>
        <ProjectInfo {...projectStats} />
      </div>
    </div>
  </section>
);

HeroSection.propTypes = {
  heroSectionData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    appUrls: PropTypes.shape({
      web: PropTypes.string,
    }),
    projectStats: PropTypes.shape({
      completion_time: PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
        title: PropTypes.string,
        stats: PropTypes.string,
      }),
    }),
  }).isRequired,
};

// HeroSection.defaultProps = {
//   title: '<Title>',
//   tags: ['<Placeholder Tag>'],
//   description: '<Placeholder Description>',
//   appUrls: {
//     web: undefined,
//     ios: undefined,
//     android: undefined,
//   },
//   projectStats: {
//     completion_time: {
//       icon: faClock,
//       title: 'Completion Time',
//       stats: '6 mos',
//     },
//     members: {
//       icon: faUsers,
//       title: 'Team members',
//       stats: '4 people',
//     },
//     platform: {
//       icon: faLayerGroup,
//       title: 'Platform',
//       stats: 'Web, Android and iOS',
//     },
//     scope: {
//       icon: faList,
//       title: 'Type',
//       stats: 'Mvp',
//     },
//     industry: {
//       icon: faIndustry,
//       title: 'Industry',
//       stats: 'SASS',
//     },
//   },
// };

export default HeroSection;
