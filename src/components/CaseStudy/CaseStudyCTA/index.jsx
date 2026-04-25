import React from 'react';
import { Form, Field } from 'react-final-form';
import { Container, Col, Row } from 'reactstrap';

import ContactApi from 'services/api/ContactApi';
import { FormError } from 'components/Form/FormField';
import { required, composeValidators, isEmail } from 'utils/formValidators';

const triviaDay = '/images/portfolio/trivia-day.png';
const triviaDayBg = '/images/case-study/trivia-day/trivia-bg.jpg';
import ToastService from 'services/toastService';

const CaseStudyCTA = ({ project, cta, description, projectImage }) => {
  const onSubmit = (values) => {
    const { userEmail } = values;
    const data = {
      email: userEmail,
      message: `From ${project} case study page`,
    };

    ToastService.processPromise(ContactApi.post(data));
  };

  return (
    <div>
      <section
        className="case-study cta py-0"
        style={{ backgroundImage: `url(${triviaDayBg})` }}
      >
        <div className="overlay h-100 pt-5 pt-md-0">
          <Container className="h-100">
            <Row className="justify-content-between align-items-end h-100">
              <Col
                lg={7}
                md={7}
                className="h-100 d-flex align-items-center mb-5 mb-md-0"
              >
                <div className="portfolio-details">
                  <h3 className="heading lh-base text-white mb-2">{cta}</h3>

                  <p className="description text-white mb-4">{description}</p>
                  <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="mb-0 col-12 col-md-10 col-lg-8"
                      >
                        <div className="form-group input-group w-100">
                          <Field
                            name="userEmail"
                            validate={composeValidators(required, isEmail)}
                          >
                            {({ input }) => (
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email here"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                {...input}
                              />
                            )}
                          </Field>
                          <button
                            className="btn btn-primary mb-0 px-3 px-lg-4"
                            type="submit"
                            id="button-addon2"
                          >
                            LET'S GO
                          </button>
                        </div>
                        <FormError name="userEmail" />
                      </form>
                    )}
                  />
                </div>
              </Col>
              <Col
                lg={5}
                md={5}
                className="d-flex justify-content-end align-items-end showcase"
              >
                <img
                  src={projectImage}
                  alt="bannerImage"
                  className="mb-0 img-fluid showcase-img"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyCTA;
