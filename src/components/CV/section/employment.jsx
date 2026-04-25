import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserCircle,
  faLayerGroup,
  faBriefcase,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Media,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
} from "reactstrap";

const CVEmploymentSection = ({ employments }) => (
  <div className="employment mt-5" id="employment">
    <h3 className="h6 mb-3">
      <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
      Employment
    </h3>
    <Row>
      {employments.map((employment) => {
        const { position, address } = employment;

        const achievements = employment.achievements || employment.highlights;
        const institution = employment.institution || employment.name;
        const joinDate = employment.joinDate || employment.start.year;
        const departureDate =
          employment.departureDate || employment.end.year || "Present";

        const companyAndDuration = `${institution} ( ${joinDate} - ${departureDate})`;

        return (
          <Col md={12} className="mb-4 position-relative">
            <div className="employment-detail ps-4 pb-2">
              <div className="tools">
                <h5 className="mb-2">{position}</h5>
                <p className="text-secondary">{companyAndDuration}</p>
              </div>
              <ul className="disc-list">
                {achievements.map((achievement) => (
                  <li>{achievement}</li>
                ))}
              </ul>
              {/* <div className="tools text-secondary">
              Tools: <span>Adobe XD, HTML</span>
            </div> */}
            </div>
          </Col>
        );
      })}
    </Row>
  </div>
);

export default CVEmploymentSection;
