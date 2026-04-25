import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'reactstrap';

const triviaDayLogo = '/images/case-study/trivia-day/logo.png';
const ProjectOverviewSection = () => (
  <section id="project-overview" className="project-overview-section">
    <div className="container">
      <div className="row">
        <Col md={6}>
          <h2 className="mb-1 mt-2">Trivia Day</h2>
          <p className="text-secondary">Fun party game for trivia lovers.</p>
          <p className="project-description">
            Challenge your friends and millions of online users in a group based
            trivia match and showcase your pro-ness.
          </p>

          <div className="d-flex align-items-start mt-5">
            <span className="project-overview-icon d-flex justify-content-center align-items-center me-4 col-md-3">
              <FontAwesomeIcon icon={faLightbulb} fixedWidth />
            </span>
            <div className="col-md-9 d-flex flex-column align-center justify-content-center">
              <h3 className="mb-1">Idea</h3>
              <p className="mb-0">
                A trivia game where you can play with 8-10 people at a time.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start mt-5">
            <span className="project-overview-icon d-flex justify-content-center align-items-center me-4 col-md-3">
              <FontAwesomeIcon icon={faUsers} fixedWidth />
            </span>
            <div className="col-md-9 d-flex flex-column align-center justify-content-center">
              <h3 className="mb-1">Audience</h3>
              <p className="mb-0">
                All the trivia lovers from the world can now come together in a
                single platform.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="project-overview-end-side card shadow-md p-4">
            <div>
              <h3 className="project-overview-title">Implementation</h3>
              <ul>
                <li className="project-overview-implementation-step">
                  We needed to make this game available for both ios and android
                  in very short duration of time. <br />
                  For this we choose to go with react native.
                </li>
                <li className="project-overview-implementation-step">
                  We sat with our client to detail all the requirements and
                  planned the roadmap. We worked on lots of UI·UX iterations to
                  ensure client as well as development team was on same page.
                </li>
                <li className="project-overview-implementation-step">
                  Roadmap gave us long term vision, but did not stop us from
                  iterating with smaller development steps, validating and
                  improving with every new step.
                </li>
                <li className="project-overview-implementation-step">
                  Manual and automated testing is followed by final debugging
                  and uploading to a app stores.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="project-overview-title">Results</h3>
              <span>
                A cross platform online multiplayer trivia game. Real fun to
                play and brings trivia lovers together.
              </span>
            </div>
          </div>
        </Col>
      </div>
    </div>
  </section>
);

export default ProjectOverviewSection;
