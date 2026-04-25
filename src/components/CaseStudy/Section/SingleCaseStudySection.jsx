import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import TechStack from "components/TechStack/TechStack";
import reneldy from 'images/clients/reneldy/reneldy.jpeg?url';
import triviaDayLogo from 'images/case-study/trivia-day/logo.png?url';

const SingleCaseStudySection = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12 single-case-study position-relative">
          <div className="quoted-text font-weight-normal top">
            <div className="quote-home" />
            <div className="header-tag text-center text-lg-start">
              Trivia Day
            </div>
            <div className="blockquote">
              Truemark helped us build a multiplayer Trivia Game.
            </div>
          </div>
          <ul className="ms-0 nav mt-4 text-secondary stacks d-flex justify-content-center flex-row align-items-center justify-content-lg-start">
            <li className="nav-item me-3 bold-text">Technology Stack:</li>
            <li className="nav-item me-3">
              <TechStack
                icon={["truemark", "react-icon"]}
                name="React Native"
                bgColor="bg-danger"
                iconClass="text-white"
                size="xs"
              />
            </li>
            <li className="nav-item me-3">
              <TechStack
                icon={faNode}
                name="NodeJS"
                bgColor="bg-success"
                iconClass="text-white"
                size="xs"
              />
            </li>
            <li className="nav-item me-3">
              <TechStack
                icon={faNode}
                name="Socket.io"
                bgColor="bg-warning"
                iconClass="text-white"
                size="xs"
              />
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row justify-content-lg-between mt-5">
            <div className="user-detail d-flex align-items-center flex-md-row flex-column ">
              <img
                className="img-fluid img-thumbnail user-image me-lg-4 me-md-0"
                alt="case study client"
                src={reneldy}
              />
              <div className="text-center text-lg-start text-md-center">
                <h5 className="m-0 mb-1 text-primary">Reneldy Senat</h5>
                <p className="text-secondary m-0">Owner, Trivia Day</p>
              </div>
            </div>
            <a
              href="/case-studies/trivia-day/"
              className="btn btn-primary outlined text-bold"
            >
              Read the case study
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SingleCaseStudySection;
