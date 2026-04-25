import React from 'react';

import { Col } from 'reactstrap';
import {
  faClock,
  faUsers,
  faList,
  faIndustry,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

import ProjectStatsColumn from './ProjectStatsColumn';

const ProjectInfo = ({
  completion_time,
  members,
  platform,
  scope,
  industry,
}) => (
  <Col
    md={12}
    className="project-info d-flex justify-content-between  py-4 text-white flex-column flex-md-row"
  >
    <ProjectStatsColumn {...completion_time} />
    <ProjectStatsColumn {...members} />
    <ProjectStatsColumn {...platform} />
    <ProjectStatsColumn {...scope} />
    <ProjectStatsColumn {...industry} />
  </Col>
);

ProjectInfo.defaultProps = {
  completion_time: {
    icon: faClock,
    title: 'Completion Time',
    stats: '6 mos',
  },
  members: {
    icon: faUsers,
    title: 'Team members',
    stats: '4 people',
  },
  platform: {
    icon: faLayerGroup,
    title: 'Platform',
    stats: 'Android and iOS',
  },
  scope: {
    icon: faList,
    title: 'Type',
    stats: 'Mvp',
  },
  industry: {
    icon: faIndustry,
    title: 'Industry',
    stats: 'Mobile Gaming',
  },
};

export default ProjectInfo;
