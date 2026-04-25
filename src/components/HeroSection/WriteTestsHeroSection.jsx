import React from 'react';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import writeTestGirl from 'images/write-tests/banner-girl.png?url';

const WriteTestsHeroSection = () => {
  return (
    <section className="bg-hero1 position-relative overflow-hidden pt-4 pb-sm-0 pb-lg-5">
        <div className="position-relative container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 rm-content-container">
              <div className="header-tag mb-2">
                Ensuring quality through comprehensive testing
              </div>
              <h1 className="mb-4 text-secondary">
                Maximize test coverage without sacrificing productivity
              </h1>
              <p className="text-secondary">
                We offer expertly crafted software test cases for{' '}
                <span className="text-primary">Rails</span> and{' '}
                <span className="text-primary">ReactJS{' '}</span>to ensure the{' '}
                <span className="text-primary">
                  quality and reliability of your software.{' '}
                </span>
                Our team uses the latest testing tools and techniques to
                thoroughly verify the functionality of your application. Let us
                help you catch and fix any issues before they become a problem.
              </p>
              <ButtonWithModal text="Request A Quote" />
            </div>
            <div className="col-lg-6 position-relative mb-lg-4 mb-sm-0 mb-md-0 text-center ">
              <img
                className="banner-img img-fluid ms-0 ms-md-5 ms-lg-5 ps-0 ps-md-5 ps-lg-5"
                src={writeTestGirl}
                alt=""
              />
            </div>
            <div className='pink position-absolute'></div>
            <div className='blue position-absolute'></div>
          </div>
        </div>
    </section>
  );
};

export default WriteTestsHeroSection;
