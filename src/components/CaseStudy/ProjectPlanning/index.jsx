import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faChartArea,
  faList,
} from '@fortawesome/free-solid-svg-icons';

const BulletLists = ({ list }) => {
  const listContent = list.map((bulletPoint) => (
    <li>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="me-2 text-primary"
      />
      {bulletPoint}
    </li>
  ));

  return (
    <>
      {listContent}
    </>
  );
};

BulletLists.defaultProps = {
  list: []
};

BulletLists.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
};

const ProjectPlanningCard = ({
  list, icon, subTitle, title
}) => (
  <Col lg={4} md={6} sm={12} className="mb-3 mb-lg-0">
    <div className="engagement-model d-flex flex-column justify-content-start pattern p-5 h-100 align-items-center align-items-md-start">
      <div className="icon-holder mb-4">
        <FontAwesomeIcon
          icon={icon}
          className="stroke-icon secondary"
        />
      </div>

      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="text-secondary">
          {`${subTitle}:`}
        </p>
      </div>

      <ul className="list-group  text-center text-md-start  text-secondary mb-3 ms-0">
        <BulletLists list={list} />
      </ul>
    </div>
  </Col>
);

ProjectPlanningCard.defaultProps = {
  list: []
};

ProjectPlanningCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]).isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const ProjectPlanning = ({ input, analysis, outcome }) => (
  <section>
    <div className="container">
      <div className="header">
        <h2 className="left">Planning</h2>
      </div>

      <Row className="row-eq-height mt-5">
        <ProjectPlanningCard list={input} title="Input" subTitle="The client shared the vision on" icon={faCheckCircle} />
        <ProjectPlanningCard list={analysis} title="Analysis" subTitle="We analyzed the requirement very carefully" icon={faChartArea} />
        <ProjectPlanningCard list={outcome} title="Output" subTitle="This resulted in" icon={faList} />
      </Row>
    </div>
  </section>
);

ProjectPlanning.propTypes = {
  input: PropTypes.arrayOf(PropTypes.string).isRequired,
  analysis: PropTypes.arrayOf(PropTypes.string).isRequired,
  outcome: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectPlanning;
