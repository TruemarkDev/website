import React from 'react';
import Rspec from 'images/write-tests/rspec.svg?url';
import Capybara from 'images/write-tests/capybara.svg?url';
import Cucumber from 'images/write-tests/cucumber.svg?url';
import Jest from 'images/write-tests/jest.svg?url';
import Cypress from 'images/write-tests/cypress.svg?url';
import ReactTestingLibrary from 'images/write-tests/react-testing-library.svg?url';
import Enzyme from 'images/write-tests/enzyme.svg?url';
import RubyProf from 'images/write-tests/rubyprof.svg?url';
import Minitest from 'images/write-tests/minitest.svg?url';

const ToolsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="header text-center pb-2">
          <div className="header-tag text-uppercase">tools</div>
          <h2 className="mb-4">Tools and Technologies we use</h2>
        </div>
        <h3 className="mb-3 mb-md-4 mb-lg-4">Rails</h3>
        <div className="row justify-content-center software-testing mb-1 mb-md-3 mb-lg-3">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description minitest w-100 position-relative">
                  <div className="position-absolute text-center background-text">
                    Minitest
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Minitest} />
                  </span>
                </div>
              </div>
              <h5>Minitest</h5>
              <p>
                This is a popular testing library for Ruby that is often used
                for writing unit tests for Rails applications.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description rspec w-100 position-relative">
                  <div className="position-absolute text-center background-text">
                    RSpec
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Rspec} />
                  </span>
                </div>
              </div>
              <h5>RSpec</h5>
              <p>
                This is a popular testing library for Ruby that is often used
                for writing integration tests and acceptance tests for Rails
                applications.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description capybara w-100 position-relative">
                  <div className="position-absolute text-center background-text1">
                    Capybara
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Capybara} />
                  </span>
                </div>
              </div>
              <h5>Capybara</h5>
              <p>
                This is a testing library that is used to simulate the actions
                of a real user interacting with a web application. It is often
                used for writing system tests for Rails applications.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description rubyprof w-100 position-relative">
                  <div className="position-absolute text-center background-text1">
                    RubyProf
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={RubyProf} />
                  </span>
                </div>
              </div>
              <h5>RubyProf</h5>
              <p>
                This is a profiling tool that can be used to measure the
                performance of a Rails application. It can be used for writing
                performance tests.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description cucumber w-100 position-relative">
                  <div className="position-absolute text-center background-text1">
                    Cucumber
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Cucumber} />
                  </span>
                </div>
              </div>
              <h5>Cucumber</h5>
              <p>
                This is a testing tool that is often used in combination with
                Ruby on Rails to write acceptance tests in a natural language
                syntax.
              </p>
            </div>
          </div>
        </div>
        <h3 className="mb-3 mb-md-4 mb-lg-4">ReactJS</h3>
        <div className="row justify-content-center software-testing">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description minitest w-100 position-relative">
                  <div className="position-absolute text-center background-text">
                    Jest
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Jest} />
                  </span>
                </div>
              </div>
              <h5>Jest</h5>
              <p>
                Jest is a widely-used testing framework specifically tailored
                for ReactJS applications. It offers a swift, sandboxed testing
                environment, ensuring accurate and efficient tests for
                individual react components.
              </p>
              <p>
                With Jest, one can confidently deliver robust and reliable React
                applications to the users.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description capybara w-100 position-relative">
                  <div className="position-absolute text-center background-text">
                    Cypress
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={Cypress} />
                  </span>
                </div>
              </div>
              <h5>Cypress</h5>
              <p>
                Cypress is a cutting-edge end-to-end testing framework designed
                for modern web applications, including those built with ReactJS.
                It provides a real-time, interactive testing environment,
                ensuring comprehensive and reliable tests for your React
                components and user flows.
              </p>
              <p>
                With Cypress, one can be confident in delivering seamless and
                glitch-free React experiences to the users.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3 card-design">
            <div className="card1 card p-4 h-100 w-100">
              <div className="mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center background-description cucumber w-100 position-relative">
                  <div className="position-absolute text-center background-text1">
                    React Testing
                  </div>
                  <span className="position-relative d-flex justify-content-center">
                    <img src={ReactTestingLibrary} />
                  </span>
                </div>
              </div>
              <h5>ReactJS Testing Library</h5>
              <p>
                React Testing Library is a popular tool set designed for testing
                React components in a manner that resembles real user behavior.
                Instead of focusing on the internal implementation, it
                prioritizes user interactions, making your tests more robust and
                maintainable.
              </p>
              <p>
                It aligns well with the principles of user-centric testing and
                supports a behavior-driven development approach, ensuring React
                components work as intended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
