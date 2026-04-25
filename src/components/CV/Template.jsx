import React from 'react';
import { StaticQuery, graphql, navigate, Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserCircle,
  faLayerGroup,
  faBriefcase,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Badge, Card, CardImg, CardBody, Media } from 'reactstrap';

const startup = '/images/blogs/categories/startup.jpg';
import BlogCard from 'components/Blog/Card';
import SocialShare from 'components/SocialShare';
import ButtonWithModal from 'components/Button/ButtonWithModal';

import CVSideBar from 'components/CV/SideBar';
import CVMenu from 'components/Menu/CV/CVNav';
import UserPortfolio from './section/portfolio';
import CVEmploymentSection from './section/employment';
import Feedback from './section/feedback';
import OtherExp from './section/otherExp';
import BlogSection from './section/blog';

const CVTemplate = ({ profile }) => {
  const {
    firstName,
    name,
    avatar,
    bio,
    position,
    company,
    location,
    authorId,
    stackExperiences,
    tools,
    academics,
    employments,
    projects,
    clientFeedbacks,
    otherExperiences,
    attributes,
  } = profile;

  return (
    <div>
      <div className="cv-header d-flex align-items-center justify-content-center position-relative">
        <div className="overlay-primary py-5">
          <div className="container">
            <div className="d-flex col p-0 user-container justify-content-center align-items-center flex-column flex-md-row">
              <div className="user-image">
                <img src={avatar} alt={name} className="img-fluid mb-0" />
              </div>
              <div className="user-info d-flex flex-column justify-content-between col pe-0">
                <div className="d-flex ps-md-4 mt-4 mt-md-0 user-name flex-column flex-md-row justify-content-center justify-content-md-between text-md-start  text-center align-items-center">
                  <div className="">
                    <h2 className="h3 mb-1 text-white">{name}</h2>
                    <p className="mb-0 text-white">{`${position} @ ${company}`}</p>
                  </div>
                  <SocialShare
                    path={`/resume/${firstName?.toLowerCase()}`}
                    className="text-white mt-3 mt-md-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CVMenu firstName={firstName} attributes={attributes} />

      <div className="fixed-bottom py-2 px-3 bg-white d-md-flex d-lg-none hire-btn d-flex justify-content-center">
        <ButtonWithModal
          className="py-2 shadow-sm mb-0 "
          attributes={attributes}
          modalType="estimate"
          estimateModalType="software"
        >
          {`HIRE ${firstName}`}
        </ButtonWithModal>
      </div>

      <section className="py-5 bg-white">
        <div className="container">
          <Row>
            <Col lg={8} md={12} className="pe-lg-5">
              <div className="about border-bottom mb-3 pb-3">{bio}</div>

              <UserPortfolio projects={projects} />

              <CVEmploymentSection employments={employments} />

              <Feedback feedbacks={clientFeedbacks} />

              <BlogSection authorId={authorId} />

              <OtherExp experiences={otherExperiences} />
            </Col>
            <CVSideBar
              stackExperiences={stackExperiences}
              tools={tools}
              academics={academics}
              firstName={firstName}
              location={location}
            />
          </Row>

          <Row>
            <Col md={12} className="mt-5">
              <Card>
                <div className="hire-developer-cta position-relative">
                  <CardImg
                    top
                    width="100%"
                    src="https://i.pinimg.com/originals/26/58/55/265855fd3b324e682eba447718d0d6bb.png"
                    alt="Card image cap"
                    className="mb-0"
                  />
                  <div className="overlay d-flex justify-content-center flex-column align-items-center">
                    <h2 className="text-white">Hire other developers</h2>
                    <a
                      className="btn btn-outline-light"
                      href="/hire/resources/"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default CVTemplate;
