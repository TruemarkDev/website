import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import ButtonWithModal from 'components/Button/ButtonWithModal';

function TraineeFAQ(props) {
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
      <div className="container trainee-faq">
        <div className="row">
          <div className="col-lg-12 mb-5 mb-lg-0">
            <div className="mb-4 h1">Questions you might have</div>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  What is the selection process for the Trainee program?
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>
                    Our selection process for trainee program goes through
                    following steps:
                  </p>
                  <ul>
                    <li>
                      Submit your well-written CV along with a Cover Letter to
                      our email address{' '}
                      <a href="mailto:hr@truemark.com.np">hr@truemark.com.np</a>
                      . Make sure to include the subject line "Application for
                      Trainee Program [Nodejs]". (Don't forget to update the
                      stack name inside the brackets.)
                    </li>
                    <li>
                      After your submission, you'll receive an email containing
                      a link to schedule your online video interview.
                    </li>
                    <li>
                      On the scheduled day, one of our senior engineers will
                      conduct an online video interview to assess your technical
                      knowledge.
                    </li>
                    <li>
                      If you pass the video interview, you'll be given a task to
                      showcase your skills and knowledge.
                    </li>
                    <li>
                      Within one week of interviewing all applicants, you'll
                      receive an email informing you of the results. If
                      successful, you'll be warmly welcomed into the Truemark
                      family!
                    </li>
                  </ul>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  Will I be paid during the Trainee program?
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>
                    Yes! You will be paid for the duration of the Trainee
                    Program.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">
                  Will the trainee program led to a full-time job?
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>
                    Completing our 6 weeks trainee program with exceptional
                    performance opens the door to full-time employment
                    opportunities with us.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">
                  How can I make my application stand out?
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  <ul>
                    <li>
                      Customize your resume to match the job posting,
                      emphasizing relevant skills and experiences.
                    </li>
                    <li>
                      Provide any academic achievements or projects that
                      demonstrate your abilities.
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
                <AccordionHeader targetId="5">
                  What is the duration of Trainee program?
                </AccordionHeader>
                <AccordionBody accordionId="5">
                  <p>The duration of our Trainee Program is 6 weeks.</p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="container">
          <div className="mt-5">
            <div className="position-relative overflow-hidden rounded-3 shadow-lg">
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around  process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 pb-4">Apply for a Trainee now</h4>
                <ButtonWithModal
                  text="APPLY NOW"
                  title="Apply for this Job"
                  subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
                  modalType="cv"
                  className="py-2 mb-0"
                />
              </div>
              <div className="cta-btn-right position-absolute"></div>
              <div className="cta-btn-left position-absolute"></div>
              <div className="background-blur-right position-absolute"></div>
              <div className="background-blur-left position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraineeFAQ;
