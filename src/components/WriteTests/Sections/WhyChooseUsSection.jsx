import React from 'react';

import { Row } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const WhyChooseUsSection = () => {
  return (
    <section>
      <div className="container">
        <div>
            <div className="header text-center pb-2">
              <div className="header-tag text-uppercase">Let me know</div>
              <h2 className="mb-0 mb-md-4 mb-lg-4">Why Choose Us?</h2>
          </div>
          <div className="mt-3 mt-md-5 mt-lg-5">
            <Row lg={2} md={2} sm={12} className="drivemore-sales mb-3 mb-lg-0">
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Experience and Expertise
                  </h4>
                </div>
                <p className="d-flex">
                  An experienced team or individual will have a deep
                  understanding of software testing techniques and best
                  practices, and will be able to apply this knowledge to
                  effectively test your software.
                </p>
              </div>
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Comprehensive testing approach
                  </h4>
                </div>
                <p className="d-flex">
                  A good testing team or individual will take a comprehensive
                  approach to testing, using a variety of techniques and tools
                  to thoroughly verify the functionality and performance of your
                  software.
                </p>
              </div>

              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">Attention to detail</h4>
                </div>
                <p className="d-flex">
                  Writing tests requires a high level of attention to detail,
                  and a team or individual with strong attention to detail will
                  be better able to identify and address any issues or bugs in
                  your software.
                </p>
              </div>

              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex ">Efficiency</h4>
                </div>
                <p className="d-flex">
                  An experienced testing team or individual will be able to
                  write and execute tests efficiently, helping to minimize the
                  time and resources required for testing.
                </p>
              </div>
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Strong communication skills
                  </h4>
                </div>
                <p className="d-flex">
                  Good communication skills are important in software testing,
                  as it is often necessary to work closely with developers and
                  other stakeholders to identify and resolve issues. A team or
                  individual with strong communication skills will be better
                  able to collaborate and effectively communicate any issues or
                  concerns.
                </p>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="container mb-4 mb-md-5 mb-lg-5">
        <div className="row">
          <div className="col-md-12 mt-4 mb-4">
            <div className='position-relative overflow-hidden rounded-3 shadow-lg'>
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 pb-4">Want us to write test cases for your project?</h4>
                <ButtonWithModal text="Yes, I am looking for an extra hand" modalType="" />
              </div>
              <div className='cta-btn-right position-absolute'></div>
              <div className='cta-btn-left position-absolute'></div>
              <div className='background-blur-right position-absolute'></div>
              <div className='background-blur-left position-absolute'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
