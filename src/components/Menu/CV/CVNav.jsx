import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import ButtonWithModal from "components/Button/ButtonWithModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faAngleDown,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

const CVMenu = ({ firstName, attributes }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar expand="md" className="cv-menu py-0 sticky-top">
      <Container>
        <button
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          type="button"
          className="navbar-toggler d-flex justify-content-center align-items-center w-100 py-3 d-sm-none"
        >
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="text-secondary"
          />
        </button>
        <div className="d-flex justify-content-between">
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="me-auto ms-0 d-flex align-items-center" navbar>
              <NavItem>
                <NavLink active href="#portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#employment">Experience</NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink href="#feedback">Feedback</NavLink>
            </NavItem> */}
              <NavItem>
                <NavLink href="#blog">Blog</NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink href="#other-experience">Other Experience</NavLink>
            </NavItem> */}
            </Nav>
          </Collapse>
          <div className="py-2">
            <ButtonWithModal
              attributes={attributes}
              modalType="estimate"
              estimateModalType="software"
              className=" shadow-sm mb-0 d-none d-lg-block "
            >
              {`HIRE ${firstName}`}
            </ButtonWithModal>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default CVMenu;
