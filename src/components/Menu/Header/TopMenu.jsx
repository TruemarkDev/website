import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import BlogMegaMenu from "../../../theme/components/BlogMegaMenu/BlogMegaMenu";
import Developer from 'images/icons/developer.svg?url';
import Ruby from 'images/icons/ruby.svg?url';
import react from 'images/icons/react.svg?url';
import Ecommerce from 'images/icons/ecommerce.svg?url';
import StaticSite from 'images/icons/static-site.svg?url';
import Designer from 'images/icons/designer.svg?url';
import Gatsby from 'images/icons/gatsby.svg?url';
import DigitalMarketer from 'images/icons/digital-marketer.svg?url';
import UpgradeApplication from 'images/icons/upgrade-application.svg?url';
import QualityAssurance from 'images/icons/quality-assurance.svg?url';
import WriteTest from 'images/icons/write-test.svg?url';
import truemarkWhiteLogo from 'images/company-logo/logo_white.svg?url';
import companyLogoNew from 'images/company-logo/logo_red.svg?url';

const TopMenu = ({ siteTitle, blogPosts, blogCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);

  const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="sticky-top nav-bg">
      <Navbar expand="lg" className="container desktop-nav h-100">
        <a
          href="/"
          className="navbar-brand flex align-items-center justify-content-center p-0"
        >
          <img
            src={companyLogoNew}
            className="img-fluid m-0 company-logo pb-2"
            alt="truemark-logo"
            width="160"
          />
        </a>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto py-2 align-items-center" navbar>
            <NavItem className="mb-0 ">
              <a href="/" className="nav-link">
                Home
              </a>
            </NavItem>
            <UncontrolledDropdown className="mb-0" nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu className="p-0">
                <ul className="nav-dropdown-menu rounded-bottom p-4">
                  <li className="d-flex row">
                    <ul className="col-6">
                      <li className="m-0">
                        <span className="text-uppercase d-block h5">
                          Hire team / Individual
                        </span>
                        <a
                          href="/hire/resources/"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-1">
                              <img src={Developer} alt="Developers" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Developers
                              </span>
                              <span className="d-block nav-text">
                                For custom software development and maintenance
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/services/design"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-5">
                              <img src={Designer} alt="Designer" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Designers
                              </span>
                              <span className="nav-text d-block">
                                Design team focused on UI/UX
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/services/maintenance/tests"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-4">
                              <img
                                src={QualityAssurance}
                                alt="QualityAssurance"
                              />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Quality Assurance Tester
                              </span>
                              <span className="d-block nav-text">
                                Will test your software and ensure quality
                                (Manual, Automation)
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/services/digital-marketing"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-3">
                              <img
                                src={DigitalMarketer}
                                alt="DigitalMarketer"
                              />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Digital Marketers
                              </span>
                              <span className="d-block nav-text">
                                Boost your digital presence
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul className="col-6">
                      <li className="m-0">
                        <span className="text-uppercase d-block h5">
                          Framework
                        </span>
                        <a
                          href="/technologies/react-js"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-3">
                              <img src={react} alt="React" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                ReactJS
                              </span>
                              <span className="d-block nav-text">
                                Create stunning and interactive user interface
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/technologies/ruby-on-rails"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-2">
                              <img src={Ruby} alt="Ruby on Rails" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Ruby on Rails
                              </span>
                              <span className="d-block nav-text">
                                Powerful and popular choice for building web
                                applications rapidly
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/technologies/gatsby-js"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-1">
                              <img src={Gatsby} alt="Gatsby Js" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Gatsby Js
                              </span>
                              <span className="d-block nav-text">
                                Fast and Efficient SEO friendly website
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="d-flex row mt-4 mb-0">
                    <ul className="col-6">
                      <li className="m-0">
                        <span className="text-uppercase d-block h5">Build</span>
                        <a
                          href="/technologies/spree"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-4">
                              <img src={Ecommerce} alt="E-commerce Apps" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                E-commerce Apps
                              </span>
                              <span className="d-block nav-text">
                                Custom, responsive website built on Shopify and
                                Spree
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/technologies/gatsby-js"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-5">
                              <img src={StaticSite} alt="Static Site" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Static Site
                              </span>
                              <span className="d-block nav-text">
                                Fast and efficient website with Gatsbyjs
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>

                    <ul className="col-6">
                      <li className="m-0">
                        <span className="text-uppercase d-block h5">
                          Maintain
                        </span>
                        <a
                          href="/services/maintenance/tests"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-4">
                              <img src={WriteTest} alt="Write Tests" />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Write Tests
                              </span>
                              <span className="d-block nav-text">
                                Software test cases for Rails and ReactJS
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="m-0">
                        <a
                          href="/technologies/upgrade-your-application"
                          className="nav-dropdown-item d-block mb-1 py-2 px-2"
                        >
                          <span className="d-flex align-items-center mb-0">
                            <span className="d-flex justify-content-center align-items-center nav-holder service-3">
                              <img
                                src={UpgradeApplication}
                                alt="Upgrade Application"
                              />
                            </span>
                            <span className="nav-item ps-0">
                              <span className="fw-bold nav-heading">
                                Upgrade Application
                              </span>
                              <span className="d-block nav-text">
                                Shipping new features without interruption
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="mb-0">
              <a href="/about/" className="nav-link">
                About Us
              </a>
            </NavItem>
            <NavItem className="mb-0">
              <a href="/portfolio/" className="nav-link">
                Portfolio
              </a>
            </NavItem>

            <UncontrolledDropdown className="mb-0" nav inNavbar>
              <DropdownToggle nav caret>
                Blog
              </DropdownToggle>
              <DropdownMenu className="p-0 blog-drop">
                <BlogMegaMenu
                  blogPosts={blogPosts}
                  categories={blogCategories}
                />
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="mb-0">
              <a href="/careers/" className="nav-link">
                Careers
              </a>
            </NavItem>
            <NavItem className="mb-0">
              <a href="/contact/" className="nav-link">
                Contact Us
              </a>
            </NavItem>
          </Nav>
        </Collapse>
        {/* <ButtonWithModal className="request-a-quote">Request A Quote</ButtonWithModal> */}
      </Navbar>

      <nav
        className={`navbar navbar-expand-lg navbar-light mobile-nav ${
          isOpen ? "mobile-nav-bg" : null
        }`}
      >
        <div className="container mobile-navbar d-flex justify-content-between align-items-center">
          <div
            onClick={toggleMobileMenu}
            className="navbar-toggler mb-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon">
              <svg viewBox="0 0 100 65" width="30" height="30">
                <rect y="0" width="100" height="5" />
                <rect y="30" width="100" height="5" />
                <rect y="60" width="100" height="5" />
              </svg>
            </span>
          </div>
          <a className="navbar-brand p-0 m-0" href="/">
            {isOpen ? (
              <img
                src={truemarkWhiteLogo}
                className="img-fluid mb-0 company-logo"
                alt="truemark-logo"
                width="150"
              />
            ) : (
              <img
                src={companyLogoNew}
                className="img-fluid mb-0 company-logo"
                alt="truemark-logo"
                width="150"
              />
            )}
          </a>
        </div>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : null}`}>
          <div className="nav-content d-flex justify-content-between align-items-center  mt-4">
            <ul className="navbar-nav nav-links ms-3">
              <NavItem>
                <a href="/" className="nav-link">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a href="/about" className="nav-link">
                  About Us
                </a>
              </NavItem>
              <NavItem>
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </NavItem>
              <NavItem>
                <a href="/portfolio" className="nav-link">
                  Portfolio
                </a>
              </NavItem>
              <NavItem>
                <a href="/careers" className="nav-link">
                  Careers
                </a>
              </NavItem>
              <NavItem>
                <a href="/contact" className="nav-link">
                  Contact Us
                </a>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="sub-menu-parent">
                <DropdownToggle
                  nav
                  className="sub-menu d-flex align-items-center"
                  onClick={toggleDropDown}
                >
                  Services
                </DropdownToggle>
                <div
                  className={`${dropdownOpen ? "show" : "collapse"}`}
                  id="navbarToggleExternalContent"
                >
                  <div className="ps-4">
                    <ul className="navbar-nav  ms-auto mt-0 mt-lg-0">
                      <li className="nav-item">
                        <a
                          href="/hire/resources/"
                          className="nav-link text-start"
                        >
                          Hire Software Developers
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="/technologies/spree" className="nav-link">
                          Build E-commerce Apps
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/technologies/gatsby-js" className="nav-link">
                          Build Static Site
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/technologies/react-js" className="nav-link">
                          React Js
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/technologies/ruby-on-rails"
                          className="nav-link"
                        >
                          Ruby on Rails
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/services/design" className="nav-link">
                          UI/UX Design services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/services/digital-marketing"
                          className="nav-link"
                        >
                          Digital Markerts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/services/maintenance/tests"
                          className="nav-link"
                        >
                          Maintain Write Tests
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/technologies/upgrade-your-application"
                          className="nav-link"
                        >
                          Maintain Upgrade Application
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </UncontrolledDropdown>
              {/* <ButtonWithModal className="btn btn-primary request-a-quote">
                Request A Quote
              </ButtonWithModal> */}
            </ul>
            <ul className="share-link d-flex justify-content-center align-items-center flex-column p-0">
              <li className="rotate-90 mb-5 text-secondary mt-5">
                <span>FIND US:</span>
              </li>
              <li className="mb-3">
                <a href="https://www.facebook.com/truemarktech/">
                  <div className="icon-holder d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faFacebookF} className="fab " />
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a href="https://twitter.com/truemark_nepal/">
                  <div className="icon-holder  d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faTwitter} className="fab" />
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a href="https://www.linkedin.com/company/truemark-technology/">
                  <div className="icon-holder  d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default TopMenu;
