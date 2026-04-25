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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faAngleDown,
  faAngleDoubleDown,
  faGlobe,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

import ButtonWithModal from "components/Button/ButtonWithModal";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

const PortfolioNavItem = ({ to, title, icon, filter }) => {
  const isActive = title?.toLowerCase?.() === filter?.toLowerCase?.();

  const classNames = ["nav-link"];
  if (isActive) {
    classNames.push("active");
  }

  return (
    <NavItem>
      <a href={to} className={classNames.join(" ")}>
        <FontAwesomeIcon icon={icon} className="me-2" />
        {title}
      </a>
    </NavItem>
  );
};

const PortfolioNav = ({ filter }) => {
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
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav
            key={filter}
            className="me-auto ms-0 d-flex align-items-center"
            navbar
          >
            <PortfolioNavItem
              href="/portfolio/?platform=ios"
              icon={faApple}
              title="iOS"
              filter={filter}
            />
            <PortfolioNavItem
              href="/portfolio/?platform=android"
              icon={faAndroid}
              title="Android"
              filter={filter}
            />
            <PortfolioNavItem
              href="/portfolio/?platform=web"
              icon={faGlobe}
              title="Web"
              filter={filter}
            />
            <NavItem>
              <a
                href="/portfolio/"
                className={`nav-link ${!filter ? "active" : ""}`}
              >
                <FontAwesomeIcon icon={faListUl} className="me-2" /> All
              </a>
            </NavItem>
          </Nav>
        </Collapse>
        {/*
        <ButtonWithModal
          modalType="subscribe"
          className="py-2 shadow-sm mb-0 d-none d-md-block"
        >
          Download
        </ButtonWithModal> */}
      </Container>
    </Navbar>
  );
};

export default PortfolioNav;
