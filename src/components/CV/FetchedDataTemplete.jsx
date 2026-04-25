import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserCircle,
  faLayerGroup,
  faBriefcase,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Badge, Card, CardImg, CardBody, Media } from 'reactstrap';

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
import startup from 'images/blogs/categories/startup.jpg?url';

const FetchedDataTemplete = ({ profile, blogs }) => {
  const {
    basics: {
      firstName,
      name,
      label,
      summary,
      location,
      authorId,
      platform,
      teamExperience,
      technologyUsed,
      defaultRate,
      image,
    },
    tools,
    projects,
    clientFeedbacks,
    otherExperiences,
    education,
    work,
    skills,
  } = profile;

  const attributes = {
    platform,
    teamExperience,
    technologyUsed,
    defaultRate,
  };

  return (
    <div>
      <div className="cv-header d-flex align-items-center justify-content-center position-relative">
        <div className="overlay-primary py-5">
          <div className="container">
            <div className="d-flex col p-0 user-container justify-content-center align-items-center flex-column flex-md-row">
              <div className="user-image">
                <img src={image} alt={name} className="img-fluid mb-0" />
              </div>
              <div className="  col pe-0">
                <div className="d-flex ps-md-4 mt-4 mt-md-0 user-name flex-column flex-md-row justify-content-center justify-content-md-between text-md-start  text-center align-items-center">
                  <div className="">
                    <h2 className="h3 mb-1 text-white">{name}</h2>
                    <p className="mb-0 text-white"  >{label}</p>
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

      <div className="fixed-bottom py-2 px-3 bg-white d-md-flexZZ d-lg-none hire-btn d-flex justify-content-center">
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
              <div className="about border-bottom mb-3 pb-3">{summary}</div>

              <UserPortfolio projects={projects} />

              <CVEmploymentSection employments={work} />

              <Feedback feedbacks={clientFeedbacks} />

              <BlogSection authorId={authorId} blogs={blogs} />

              <OtherExp experiences={otherExperiences} />
            </Col>
            <CVSideBar
              stackExperiences={skills}
              tools={tools}
              academics={education}
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

export default FetchedDataTemplete;
