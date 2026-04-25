import React from 'react';
import PropTypes from 'prop-types';

const ChallengeItem = ({
  displayNumber, line1, line2, description
}) => (
  <div className="challange d-flex">
    <div className="challenge-number mb-0 text-secondary">{displayNumber}</div>
    <div className="ms-3 mt-2">
      <div className="heading mb-3">
        <h5 className="h5 mb-1 text-secondary">{line1}</h5>
        <h3 className="mb-0 text-primary">{line2}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

ChallengeItem.propTypes = {
  displayNumber: PropTypes.number.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ChallengeList = ({ challenges }) => challenges.map((challenge, index) => (
  <ChallengeItem displayNumber={index + 1} {...challenge} />
));

ChallengeList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({}))
};

const ProjectChallenge = ({ title, challenges }) => (
  <section className="project-challenge position-relative">
    <div className="circle-1" />
    <div className="circle-2" />
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <div className="header mb-5">
          <h2 className="left">{title}</h2>
        </div>
        <ChallengeList challenges={challenges} />
      </div>
    </div>
  </section>
);

ProjectChallenge.defaultProps = {
  title: 'Project Challenges',
};

ProjectChallenge.propTypes = {
  title: PropTypes.string,
  challenges: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default ProjectChallenge;
