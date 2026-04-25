import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import GatsbyFramework from 'images/reactjs/gatsby-framework.png?url';
import NextjsFramework from 'images/reactjs/nextjs-framework.png?url';

const ChooseRightFramework = () => {
  return (
    <section>
      <div className="container">
        <div className="header text-center">
          <span className="header-tag">Choose</span>
          <h2>Right Framework</h2>
        </div>

        <div className="row align-items-center mb-4 flex-md-row-reverse">
          <div className="col-md-5 text-end">
            <img
              src={GatsbyFramework}
              alt="GatsbyFramework"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <h3>Gatsbyjs</h3>
            <p className="pe-5">
              Gatsby is a static site generator that uses ReactJS as its core
              technology. It is designed to help build fast and scalable
              websites, and it has a wide range of features and plugins that
              make it easy to build and maintain a static website.
            </p>
            <ButtonWithModal
              text="Know More"
              modalType="estimate"
              className="outlined mt-4"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="mx-5 px-5 pe-md-5 pe-lg-5 me-md-5 me-lg-5 mx-md-0 mx-lg-0 px-md-0 px-lg-0">
              <img
                src={NextjsFramework}
                alt="NextjsFramework"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-7 mt-5 mt-md-0">
            <h3>Nextjs</h3>
            <p>
              Next.js is a popular framework for building web applications with
              ReactJS. It was designed to make it easy for developers to create
              server-rendered ReactJS applications with automatic code
              splitting, optimized performance, and a simple developer
              experience.
            </p>

            <ul className="p-0">
              <li>
                <span className="d-flex">
                  <span className="me-2">1.</span>
                  <span>
                    Server-side rendering: Next.js provides automatic
                    server-side rendering of your ReactJS components, which can
                    improve the performance and SEO of your app.
                  </span>
                </span>
              </li>

              <li className="">
                <span className="d-flex">
                  <span className="me-2">2.</span>
                  <span>
                    Automatic code splitting: Next.js automatically splits your
                    code into small chunks that are only loaded when needed,
                    which can improve the performance of your app.
                  </span>
                </span>
              </li>

              <li className="">
                <span className="d-flex">
                  <span className="me-2">3.</span>
                  <span>
                    Simple developer experience: Next.js has a simple and
                    straightforward API that makes it easy to get started with,
                    and it has a rich ecosystem of plugins and integrations that
                    allow you to add a wide range of features to your app.
                  </span>
                </span>
              </li>

              <li className="">
                <span className="d-flex">
                  <span className="me-2">4.</span>
                  <span>
                    Flexibility: Next.js is flexible and can be used for a wide
                    range of projects, from small websites to large web
                    applications.
                  </span>
                </span>
              </li>

              <li className="">
                <span className="d-flex">
                  <span className="me-2">5.</span>
                  <span>
                    Strong community support: Next.js has a large and active
                    community of developers, which means that you can get help
                    and support when you need it.
                  </span>
                </span>
              </li>
            </ul>
            <ButtonWithModal
              text="Know More"
              modalType="estimate"
              className="outlined mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseRightFramework;
