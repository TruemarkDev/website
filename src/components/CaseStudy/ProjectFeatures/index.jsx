import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import FeatureItem from './FeatureItem';

const ProjectFeatures = ({ features }) => (
  <section className="py-0 project-feature">
    <Container>
      <div className="header mb-3 pt-5 pb-3 text-center">
        <h2>Most Important Features</h2>
      </div>
    </Container>

    {features.map(({ heading, detail, image }, index) => (
      <FeatureItem
        featureIndex={index + 1}
        heading={heading}
        detail={detail}
        image={image}
      />
    ))}
  </section>
);

ProjectFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired
  })).isRequired
};

export default ProjectFeatures;
