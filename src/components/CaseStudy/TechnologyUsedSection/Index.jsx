import React from 'react';

const nodejsLogo = '/images/stacks/node-logo.png';
const reactNativeLogo = '/images/stacks/react-logo.png';
const postgresql = '/images/stacks/postgresql.png';
const socketIO = '/images/stacks/socketio.png';
const redis = '/images/stacks/redis.png';
import { Col, Row, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNode,
  faNodeJs,
  faGooglePlay,
  faAppStoreIos,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import TechnologyItem from './TechnologyItem';
import IconBlockWithText from '../IconBlockWithText/Index';
import TechStack from 'components/TechStack/TechStack';

const TechnologyStack = ({ stack, technologyList }) => (
  <Col md={6} lg={3} className="mb-3 mb-md-4 mb-lg-0">
    <Card className="shadow-sm h-100 p-3">
      <h5>{stack}</h5>

      <ul className="list-unstyled tech-list ms-0 mb-0">
        {technologyList.map(({ technology, icon, techColorClass }) => (
          <li>
            <TechStack
              icon={icon}
              name={technology}
              bgColor={techColorClass}
              size="sm"
              iconClass="h-100 w-50"
            />
          </li>
        ))}
      </ul>
    </Card>
  </Col>
);

const TechnologyUsedSection = ({ technologyStacks }) => (
  <section>
    <div className="container">
      <Row>
        <Col md={12}>
          <div className="header text-center">
            <div className="header-tag">have a look at</div>
            <h2>Technology Stack</h2>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        {technologyStacks.map(({ stack, technologyList }) => (
          <TechnologyStack stack={stack} technologyList={technologyList} />
        ))}
      </Row>
    </div>
  </section>
);

export default TechnologyUsedSection;
