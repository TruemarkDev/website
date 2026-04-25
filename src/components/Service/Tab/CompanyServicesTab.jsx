import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import programmingService from 'images/services/software/programming.svg?url';
import mobileAppService from 'images/services/software/mobile-development.svg?url';
import {
  faBars,
  faUsers,
  faWrench,
  faTrophy,
  faChartLine,
  faEnvelopeOpenText,
  faCheckCircle,
  faFileAlt,
  faChartBar,
  faArrowLeft,
  faArrowRight,
  faSearch,
  faBullhorn,
  faMobile,
  faMobileAlt,
  faLaptopCode,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import onlineMarketing from "images/services/digital-marketing/online-marketing.svg?url";
const CompanyServicesTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav pills className="mb-3 ms-0 text-center">
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <FontAwesomeIcon icon={faLaptopCode} className="mb-2" size="2x" />
            <p className="m-0">Web Development</p>
          </NavLink>
        </NavItem>
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <FontAwesomeIcon icon={faMobileAlt} className="mb-2" size="2x" />
            <p className="m-0">Mobile App Development</p>
          </NavLink>
        </NavItem>
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <FontAwesomeIcon icon={faBullhorn} className="mb-2" size="2x" />
            <p className="m-0">Digital Marketing</p>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-md-7 col-sm-12">
              <h4>Web Development</h4>
              <p className="mt-3 text-secondary">
                Our excellent services in Web Design and Development have
                delivered several market-centric and revenue-generating web
                solutions that have helped clients from various verticals of the
                industry set the perfect pitch.
              </p>
              <ul className="ms-0 mt-4 list-group  text-center text-md-start  text-secondary ps-2">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />
                  Ruby On Rails
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />
                  React JS
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-success"
                  />
                  Node JS
                </li>
              </ul>
              <button
                className="btn btn-lg btn-primary outlined mt-4"
                onClick={() =>
                  window.location.assign("/hire/resources/?opt=web")
                }
              >
                Check Details
              </button>
            </div>
            <div className="col-md-5">
              <img
                src={programmingService}
                alt="Web Development Service"
                className="img-fluid"
              />
            </div>
          </div>
        </TabPane>

        <TabPane tabId="2">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-md-7 col-sm-12">
              <h4>Mobile App Development</h4>
              <p className="text-secondary mt-3">
                We are among the best service providers that excel in delivering
                client-centric and highly engaging mobile solutions. We believe
                in innovation, creativity and uniqueness.
              </p>
              <ul className="ms-0 mt-4 list-group  text-center text-md-start  text-secondary ps-2">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-success"
                  />
                  Android & IOS
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />
                  React Native
                </li>
              </ul>
              <button
                className="btn btn-lg btn-primary outlined mt-4"
                onClick={() =>
                  window.location.assign("/hire/resources/?opt=mobile")
                }
              >
                Check Details
              </button>
            </div>
            <div className="col-md-5">
              <img
                src={mobileAppService}
                alt="Mobile App Development"
                className="img-fluid"
              />
            </div>
          </div>
        </TabPane>

        <TabPane tabId="3">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-md-7 col-sm-12">
              <h4>Digital Marketing</h4>
              <p className="text-secondary mt-3">
                Get noticed on search engines, social media and connect with
                users to drive traffic to your website. Truemark will help you
                to boost your digital presence.
              </p>
              <ul className="ms-0 mt-4 list-group  text-center text-md-start  text-secondary ps-2">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-success"
                  />{" "}
                  Brand Awareness
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-warning"
                  />{" "}
                  Content Distribution
                </li>
              </ul>
              <button
                className="btn btn-lg btn-primary outlined mt-4"
                onClick={() =>
                  window.location.assign("/services/digital-marketing")
                }
              >
                Check Details
              </button>
            </div>
            <div className="col-md-5">
              <img
                src={onlineMarketing}
                alt="digital marketing service"
                className="img-fluid"
              />
            </div>
          </div>
        </TabPane>
      </TabContent>
    </>
  );
};

export default CompanyServicesTab;
