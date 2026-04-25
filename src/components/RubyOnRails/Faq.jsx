import React, {useState} from 'react';
import ButtonWithModal from 'components/Button/ButtonWithModal';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

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
      <section className='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-7 col-lg-8 mb-5 mb-lg-0'>
              <h2 className='mb-4'>Questions you might have</h2>
              <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">What is Ruby on Rails and why should I use it?</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>Ruby on Rails is a web development framework that is fast, efficient, and easy to use. It is based on Ruby and uses an MVC architecture, which makes it ideal for building complex web applications quickly. Ruby on Rails has a large and active community of developers, which means that there are plenty of resources and best practices available to help you build your application.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">How long does it take to build a Ruby on Rails application?</AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>The amount of time it takes to build a Ruby on Rails application can vary depending on the complexity of the application and the availability of resources. In general, a basic web application could be built in a few weeks, while a more complex application could take several months or longer. It's important to work with your development team to define the scope and timeline of your project and set realistic expectations.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">How much does it cost to build a Ruby on Rails application?</AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>The cost of building a Ruby on Rails application can also vary depending on the complexity of the application and the resources required. In general, the cost of building a Ruby on Rails application can range from a few thousand dollars for a simple application to several hundred thousand dollars or more for a more complex application. Factors that can impact the cost of a Ruby on Rails project include the number of features and functionality, the number of users, and the level of customization required.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">What is the process for building a Ruby on Rails application?</AccordionHeader>
                <AccordionBody accordionId="4">
                  <p>The process for building a Ruby on Rails application typically includes the following steps:</p>

                  <ul className='p-0'>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>1.</span>
                        <span>Defining the scope and requirements of the project.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>2.</span>
                        <span>Designing the user interface and user experience.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>3.</span>
                        <span>Setting up the development.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>4.</span>
                        <span>Developing the application, including building the models,views, and controllers..</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>5.</span>
                        <span>Testing and debugging the application.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>6.</span>
                        <span>Deploying the application and setting up any necessary infrastructure.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>7.</span>
                        <span>Ongoing maintenance and support.</span>
                      </span>
                    </li>
                  </ul>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">How do I choose the right development team for my Ruby on Rails application?</AccordionHeader>
                <AccordionBody accordionId="5">
                  <p>When choosing a development team for your Ruby on Rails application, there are a few key factors to consider:</p>

                  <ul className='p-0'>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>1.</span>
                        <span>Expertise and experience: Look for a team that has a track record of building high-quality Ruby on Rails applications and has the necessary skills and experience to handle your project.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>2.</span>
                        <span>Communication and collaboration: It's important to choose a team that is responsive and able to effectively communicate with you throughout the development process.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>3.</span>
                        <span>Customer service: Look for a team that is committed to providing excellent customer service and support, both during the development process and after the application is launched.</span>
                      </span>
                    </li>
                    <li>
                      <span className='d-flex'>
                        <span className='me-2'>4.</span>
                        <span>Cost: Consider the overall cost of the project and whether the team is able to offer competitive pricing for their services.</span>
                      </span>
                    </li>
                  </ul>
                </AccordionBody>
              </AccordionItem>

              </Accordion>
            </div>
            <div className='col-sm-12 col-md-5 col-lg-4'>
              <div className='faq-developed'>
                <h2 className='mb-4'>We have developed various products:</h2>
                <div className='faq-developed-item d-flex align-items-center rounded p-3 mb-3'>
                  <span className='me-3'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_797_5949)">
                          <path d="M13 20C13.5523 20 14 20.4477 14 21V33C14 33.5523 13.5523 34 13 34H1C0.447715 34 0 33.5523 0 33V21C0 20.4477 0.447715 20 1 20H13ZM33 20C33.5523 20 34 20.4477 34 21V33C34 33.5523 33.5523 34 33 34H17C16.4477 34 16 33.5523 16 33V21C16 20.4477 16.4477 20 17 20H33ZM12 22H2V32H12V22ZM32 22H18V32H32V22ZM30 28V30H20V28H30ZM30 24V26H20V24H30ZM33 0C33.5523 0 34 0.447715 34 1V17C34 17.5523 33.5523 18 33 18H1C0.447715 18 0 17.5523 0 17V1C0 0.447715 0.447715 0 1 0H33ZM32 2H2V16H32V2ZM6 10V14H4V10H6ZM10 8V14H8V8H10ZM14 5V14H12V5H14ZM18 4V14H16V4H18ZM22 7V14H20V7H22ZM26 5V14H24V5H26ZM30 7V14H28V7H30Z" fill="#6C757D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_797_5949">
                          <rect width="34" height="34" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                  </span>
                  <span>Marketplaces and classifiers</span>
                </div>
                <div className='faq-developed-item d-flex align-items-center rounded p-3 mb-3'>
                  <span className='me-3'>
                    <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_797_5944)">
                            <path d="M28.4167 0C29.13 0 31 1.87351 31 2.58824V41.4118C31 42.1265 29.13 44 28.4167 44H2.58333C1.86997 44 0 42.1265 0 41.4118V2.58824C0 1.87351 1.86997 0 2.58333 0H28.4167ZM10.3333 2.58824H3.875C3.16163 2.58824 2.58333 3.16763 2.58333 3.88235V40.1176C2.58333 40.8324 3.16163 41.4118 3.875 41.4118H27.125C27.8384 41.4118 28.4167 40.8324 28.4167 40.1176V3.88235C28.4167 3.16763 27.8384 2.58824 27.125 2.58824H20.6667C20.6667 4.01768 19.5101 5.17647 18.0833 5.17647H12.9167C11.5548 5.17647 10.439 4.12063 10.3404 2.7814L10.3333 2.58824ZM24.5417 28.4706V33.6471H6.45833V28.4706H24.5417ZM24.5417 20.7059V25.8824H6.45833V20.7059H24.5417ZM24.5417 12.9412V18.1176H6.45833V12.9412H24.5417Z" fill="#6C757D"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_797_5944">
                              <rect width="31" height="44" fill="white"/>
                            </clipPath>
                          </defs>
                      </svg>
                  </span>
                  <span>E-commerce projects</span>
                </div>
                <div className='faq-developed-item d-flex align-items-center rounded p-3 mb-3'>
                  <span className='me-3'>
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_797_5949)">
                      <path d="M13 20C13.5523 20 14 20.4477 14 21V33C14 33.5523 13.5523 34 13 34H1C0.447715 34 0 33.5523 0 33V21C0 20.4477 0.447715 20 1 20H13ZM33 20C33.5523 20 34 20.4477 34 21V33C34 33.5523 33.5523 34 33 34H17C16.4477 34 16 33.5523 16 33V21C16 20.4477 16.4477 20 17 20H33ZM12 22H2V32H12V22ZM32 22H18V32H32V22ZM30 28V30H20V28H30ZM30 24V26H20V24H30ZM33 0C33.5523 0 34 0.447715 34 1V17C34 17.5523 33.5523 18 33 18H1C0.447715 18 0 17.5523 0 17V1C0 0.447715 0.447715 0 1 0H33ZM32 2H2V16H32V2ZM6 10V14H4V10H6ZM10 8V14H8V8H10ZM14 5V14H12V5H14ZM18 4V14H16V4H18ZM22 7V14H20V7H22ZM26 5V14H24V5H26ZM30 7V14H28V7H30Z" fill="#6C757D"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_797_5949">
                          <rect width="34" height="34" fill="white"/>
                        </clipPath>
                      </defs>
                      </svg>
                  </span>
                  <span>Admin panels and back offices</span>
                </div>
                <div className='faq-developed-item d-flex align-items-center rounded p-3 mb-3'>
                  <span className='me-3'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_797_5954)">
                            <path d="M15 18C15.5523 18 16 18.4477 16 19V33C16 33.5523 15.5523 34 15 34H1C0.447715 34 0 33.5523 0 33V19C0 18.4477 0.447715 18 1 18H15ZM14 20H2V32H14V20ZM30 29V31H18V29H30ZM30 25V27H18V25H30ZM34 21V23H18V21H34ZM15 0C15.5523 0 16 0.447715 16 1V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1C0 0.447715 0.447715 0 1 0H15ZM14 2H2V14H14V2ZM26 11V13H18V11H26ZM34 7V9H18V7H34ZM34 3V5H18V3H34Z" fill="#6C757D"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_797_5954">
                                <rect width="34" height="34" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                  </span>
                  <span>Mobile applications</span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="mt-5">
            <div className='position-relative overflow-hidden rounded-3 shadow-lg'>
              <div className="ecommerce-cta d-flex align-items-center flex-column  justify-content-lg-around  process-cta text-center py-4 px-4">
                <h4 className="rm-sm-2 pb-4">Ready to get started with your Ruby on Rails project?</h4>
                <ButtonWithModal text="CONTACT US" modalType="" />
              </div>
              <div className='cta-btn-right position-absolute'></div>
              <div className='cta-btn-left position-absolute'></div>
              <div className='background-blur-right position-absolute'></div>
              <div className='background-blur-left position-absolute'></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Faq;
