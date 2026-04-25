import React from 'react'
import TechStack from 'components/TechStack/TechStack';
import { faNode, faFigma } from '@fortawesome/free-brands-svg-icons';

function TruemarkOpportunities() {
  return (
    <section>
    <div className="container ">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag">KNOW ABOUT</div>
            <h2>Trainee opportunities at Truemark</h2>
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
                icon={['truemark', 'project-management-icon']}
                name="Project Management"
                iconClass="w-100 h-100 white rounded-circle"
                bgColor="img-holder"
                size="lg"
                iconColor="#0079bf"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center flex-column wrapper">
              <TechStack
                icon={faFigma}
                name="UI/UX"
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
  )
}

export default TruemarkOpportunities