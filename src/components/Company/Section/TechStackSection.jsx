import React, { useState } from 'react';

const nodejsLogo = '/images/stacks/node-logo.png';
const reactjsLogo = '/images/stacks/react-logo.png';
const railsLogo = '/images/stacks/rails-logo.png';
const reactNativeLogo = '/images/stacks/react-logo.png';
const gatsbyjsLogo = '/images/stacks/gatsby-logo.webp';
const iosLogo = '/images/stacks/ios-logo.png';
import TechStack from 'components/TechStack/TechStack';
import { faNode } from '@fortawesome/free-brands-svg-icons';

const TechStackSection = ({}) => (
  <section>
    <div className="container ">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag">have a look at</div>
            <h2>Our Technology Stack</h2>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <div className="technology-stack d-flex justify-content-space-evenly align-items-center flex-wrap flex-row">
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={faNode}
                name="Node JS"
                bgColor="img-holder"
                iconClass="w-100 h-100"
                size="lg"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={['truemark', 'react-icon']}
                name="ReactJS"
                iconClass="w-100 h-100"
                bgColor="img-holder"
                size="lg"
                iconColor="#57E5FF"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={['truemark', 'rails-icon']}
                name="Ruby on Rails"
                iconClass="w-100 h-100"
                bgColor="img-holder"
                size="lg"
                iconColor="#CF1515"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={['truemark', 'react-icon']}
                name="React Native"
                iconClass="w-100 h-100"
                bgColor="img-holder"
                size="lg"
                iconColor="#57E5FF"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={['truemark', 'gatsby-icon']}
                name="Gatsby Blog"
                iconClass="w-100 h-100 white rounded-circle"
                bgColor="img-holder"
                size="lg"
                iconColor="#663399"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={['truemark', 'next-js-icon']}
                name="Next JS"
                iconClass="w-100 h-100"
                bgColor="img-holder"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStackSection;
