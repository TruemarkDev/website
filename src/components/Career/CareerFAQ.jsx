import React, { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function CareerFAQ() {
  const [open, setOpen] = useState('0');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5 mb-lg-0">
            <div className="mb-4 h1">Questions you might have</div>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">How can I apply?</AccordionHeader>
                <AccordionBody accordionId="1">
                  <ul>
                    <li>Browse our open positions on our website. </li>
                    <li>
                      Click on the “Apply for this job” or “Apply Now” button.
                    </li>
                    <li>
                      If applying via our site, fill out the form with your
                      details: First Name, Last Name, Email, Phone Number.
                    </li>
                    <li>
                      In the message section, explain why you are applying for
                      the job. Upload your CV and cover letter.
                    </li>
                    <li>Submit the application.</li>
                    <li>
                      Upon submission, you'll receive an email with a link to
                      schedule your online video interview.
                    </li>
                  </ul>
                  <p>
                    Alternatively, you can directly email your CV and cover
                    letter to{' '}
                    <a href="mailto:hr@truemark.com.np">hr@truemark.com.np</a>.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  How can I make my application stand out?
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  <ul>
                    <li>
                      Customize your resume to match the job posting,
                      emphasizing relevant skills and experiences.
                    </li>
                    <li>
                      Provide clear examples of your achievements in past roles.
                    </li>
                    <li>
                      Include a cover letter that demonstrates your passion and
                      understanding of the company's mission.
                    </li>
                    <li>
                      Ensure all materials are professionally presented and free
                      of errors.
                    </li>
                    <li>
                      Highlight any continuous learning or certifications
                      related to the position.
                    </li>
                    <li>
                      Be authentic and genuine about your experiences and
                      aspirations.
                    </li>
                  </ul>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">
                  Can I apply to multiple positions at the same time?
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>
                    Yes, you can show interest in multiple positions but while
                    applying for multiple positions, you may mention any other
                    roles you are interested in within your email or in the
                    message section. We will evaluate your skills and align you
                    with the roles that best match your qualifications based on
                    our assessment.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">
                  How can I prepare for my interview?
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  <ul>
                    <li>
                      Familiarize yourself with online video meeting platforms,
                      as our interview will be conducted virtually.
                    </li>
                    <li>
                      Ensure a stable internet connection and have a backup plan
                      in case of electricity or internet failures.
                    </li>
                    <li>
                      Be punctual and join the online interview at least 10
                      minutes before.
                    </li>
                    <li>
                      Keep your mobile phone in silent mode during the
                      interview.
                    </li>
                    <li>
                      Research our company and understand our vision and
                      mission.
                    </li>
                    <li>
                      Review the job description and prepare to demonstrate your
                      skills.
                    </li>
                    <li>Have questions ready about the role and company.</li>
                  </ul>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">
                  Do I get opportunities to work from home?
                </AccordionHeader>
                <AccordionBody accordionId="5">
                  <p>
                    Yes, we provide opportunities to work from home. However,
                    it’s essential to provide valid reasons and seek approval
                    from your supervisor before working from home.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">
                  I cannot find an open role that I am searching for. What
                  should I do?
                </AccordionHeader>
                <AccordionBody accordionId="6">
                  <p>
                    If you can’t find the role you are interested in, please
                    check our careers page frequently for updates or contact our
                    HR team ({' '}
                    <a href="mailto:hr@truemark.com.np">hr@truemark.com.np</a>)
                    to express your interest. We are always determined to
                    connect with talented individuals for potential future
                    positions.
                  </p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerFAQ;
