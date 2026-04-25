import React from 'react';

import { Row } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';

const WhyChooseUs = () => {
  return (
    <section>
        <div className="container">
            <div>
                <div className="header text-center pb-2">
                    <div className="header-tag text-uppercase">Let me know</div>
                    <h2 className="mb-0 mb-md-4 mb-lg-4">Why Choose Us?</h2>
                </div>

            <div className='mt-5'>
                    <p className='text-center'>Choosing us to build your Ruby on Rails application that you’ll be working with a team of experienced professionals who are dedicated to delivering the best possible results for your business.</p>
            </div>

          <div className="mt-3 mt-md-5 mt-lg-5">
            <Row lg={2} md={2} sm={12} className="drivemore-sales mb-3 mb-lg-0">
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Expertise
                  </h4>
                </div>
                <p className="d-flex">
                    Our team of developers is highly experienced in building Gatsby websites and has a deep understanding of the framework and its features.
                </p>
              </div>
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Customization
                  </h4>
                </div>
                <p className="d-flex">
                    We can customize our Gatsby development services to meet the specific needs and requirements of your project, ensuring that you get a website or web application that is tailored to your business.
                </p>
              </div>

              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">Quality</h4>
                </div>
                <p className="d-flex">
                    We take pride in our work and strive to deliver high-quality Gatsby websites that are well-designed, functional, and user-friendly.
                </p>
              </div>

              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex ">Support</h4>
                </div>
                <p className="d-flex">
                    We offer ongoing support and maintenance to ensure that your Gatsby website is always up-to-date and performing at its best.
                </p>
              </div>
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Speed
                  </h4>
                </div>
                <p className="d-flex">
                    We understand the importance of performance, and use the latest tools and techniques to ensure that your Gatsby website is fast and efficient.
                </p>
              </div>
              <div className="mb-1 mb-md-4 mb-lg-4">
                <div className="d-flex pb-0 pb-md-2 pb-lg-2">
                  <h4 className="d-flex">
                    Cost-effectiveness
                  </h4>
                </div>
                <p className="d-flex">
                    We offer competitive pricing and can work with you to find a development solution that fits your budget.
                </p>
              </div>
            </Row>
          </div>
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
