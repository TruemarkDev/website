import React, { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';

function Faq(props) {
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
        <h2 className="mb-4">Questions you might have</h2>
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-8 mb-5 mb-lg-0">
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  Is it really necessary to upgrade my rails?
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>
                    To avoid security threats, there is a need to upgrade to a
                    secure version when the necessary security patches have been
                    implemented.
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  Do I need tests in my project to upgrade?
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>
                    Yes you need to have tests in your project. We can’t upgrade
                    your Rails application if you don’t have a decent test
                    suite. We require you to have at least 80% test coverage in
                    your applications unless you have a dedicated QA team. We
                    use the build to check expected behaviour for current code.
                  </p>
                  <p>
                    We can help you write your test suite, but that's a totally
                    different service. If you want to know more about writing
                    your test cases/suites then go to our page (link).{' '}
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">
                  How much budget do I need for test suit coverage?
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>
                    Wait, don’t freak out. You can always contact us or send an
                    email to us. In the meantime, you can easily calculate it
                    yourself by using our budget estimation. We will get back to
                    you as soon as possible.{' '}
                  </p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">
                  How long will it take?
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  <p>
                    An upgrade can take anywhere from a few days to over a year
                    depending on a range of factors. The only way to even
                    estimate it is to go through your codebase and gems.
                  </p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className=" card card1 p-4 position-relative">
              <h4 className="mb-3">
                Want to upgrade but have no time to write test?
              </h4>
              <p>
                Let the experts at Truemark write tests on Rails for your
                project.
              </p>
              <ButtonWithModal
                text="Explore more"
                modalType="estimate"
                className="outlined mt-4 align-items-center z-1"
              >
                <span className="me-3">Explore more</span>
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1002_4284)">
                      <path
                        d="M16.172 11.987L10.808 6.62298L12.222 5.20898L20 12.987L12.222 20.765L10.808 19.351L16.172 13.987H4V11.987H16.172Z"
                        fill="#FF5757"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1002_4284">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.987305)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </ButtonWithModal>
              <span className="faq-background position-absolute"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
