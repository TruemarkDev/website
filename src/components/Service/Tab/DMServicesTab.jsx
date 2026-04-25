import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCheckCircle,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
const DMserviceImage = '/images/ecommerce/DM-service-image.png';
const DMcontentWriting = '/images/ecommerce/Tab-2-image.png';
const DMSocialMediaMarketing = '/images/ecommerce/Tab-3-image.png';
const DMServicesTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav pills className="mb-lg-3 mb-0 ms-0 text-center">
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            <FontAwesomeIcon
              icon={faSearchengin}
              className="mb-md-2 mb-0"
              size="2x"
            />
            <p className="m-0">Search Engine Optimization</p>
          </NavLink>
        </NavItem>
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            <FontAwesomeIcon
              icon={faFileAlt}
              className="mb-md-2 mb-0"
              size="2x"
            />
            <p className="m-0">Content Writing</p>
          </NavLink>
        </NavItem>
        <NavItem className="red">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            <FontAwesomeIcon
              icon={faChartLine}
              size="2x"
              className="mb-md-2 mb-0"
            />
            <p className="m-0">Social Media Marketing</p>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent
        activeTab={activeTab}
        className="position-relative overflow-hidden"
      >
        <TabPane tabId="1">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-lg-7 col-md-9 col-sm-12 rm-content-container sm-content-design pb-0">
              <h3>Search Engine Optimization</h3>
              <p className="mt-3 text-secondary">
                Be ready to get more traffic because Truemark will help you to
                rank higher on search engines. Users trust search engines, so it
                is more important to increase visibility on search engines.
              </p>
              <ul className="ms-0 mt-4 mb-3 list-group  text-center text-md-start  text-secondary ps-1">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  Keyword Research
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  On-page SEO
                </li>
              </ul>
              {/*
               // TODO: Add button action
              <button
                type="button"
                className="btn btn-lg btn-primary mt-4 w-75"
              >
                Check Details
              </button> */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 rm-img-container">
              <img
                src={DMserviceImage}
                alt="Search Engine Optimization"
                className="img-fluid"
              />
            </div>
          </div>
        </TabPane>

        <TabPane tabId="2">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-lg-7 col-md-9 col-sm-12 rm-content-container sm-content-design pb-0">
              <h3>Content Writing</h3>
              <p className="text-secondary mt-3">
                Get your business the attention it deserves by reaching your
                customers easily and expanding your customers reach. Truemark
                will provide you 100 percent unique, original, and niche-focused
                content that users won’t be able to dislike.
              </p>
              <ul className="ms-0 mt-4 mb-3 list-group  text-center text-md-start  text-secondary ps-1">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  Compelling Content
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  SEO Optimized Content
                </li>
              </ul>
              {/*
              // TODO: Add button action
              <button
                type="button"
                className="btn btn-lg btn-primary mt-4 w-75"
              >
                Check Details
              </button> */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 rm-img-container">
              <img
                src={DMcontentWriting}
                alt="content writing service"
                className="img-fluid"
              />
            </div>
          </div>
        </TabPane>

        <TabPane tabId="3">
          <div className="row mt-5 px-2 row-eq-height flip-content-sm">
            <div className="col-lg-7 col-md-9 col-sm-12 rm-content-container sm-content-design pb-0">
              <h3>Social Media Marketing</h3>
              <p className="text-secondary mt-3">
                Get noticed on social media and connect with users to drive
                traffic to your website. Truemark will help you to boost your
                social media presence.
              </p>
              <ul className="ms-0 mt-4 mb-3 list-group  text-center text-md-start  text-secondary ps-1">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  Brand Awareness
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2 text-primary"
                  />{' '}
                  Content Distribution
                </li>
              </ul>
              {/*
              // TODO: Add button action
              <button
                type="button"
                className="btn btn-lg btn-primary mt-4 w-75"
              >
                Check Details
              </button> */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 rm-img-container">
              <img
                src={DMSocialMediaMarketing}
                alt="Social Media Marketing"
                className="img-fluid"
                height="419px"
                width="410px"              />
            </div>
          </div>
        </TabPane>
      </TabContent>
    </>
  );
};

export default DMServicesTab;
