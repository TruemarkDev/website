import React, {useState} from 'react';
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
                <AccordionHeader targetId="1">What exactly is UX design?</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>User experience (UX) design is the process of creating products, systems, and services that provide a positive and seamless experience for the user. It involves researching, designing, and testing the overall feel of a product, including how easy it is to use, how satisfying it is to interact with, and how well it meets the needs of the user. UX design encompasses a wide range of activities, from user research and prototyping to visual design and usability testing, with the goal of creating products that are intuitive, efficient, and enjoyable to use.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">What tools do your UI/UX designers use?</AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>Our designers utilize a range of tools, including Figma, Photoshop, Illustrator, InDesign, and Sketch, to create visually stunning and functional designs. These tools allow our designers to bring their ideas to life and deliver top-quality results to our clients.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">What is your availability and turnaround time for projects?</AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>We strive to be as flexible as possible in terms of our availability and turnaround time for projects. Once we have a clear understanding of your project needs and requirements, we will provide you with an estimated timeline for completion. We will do our best to accommodate your deadlines and will keep you informed of our progress throughout the project. If there are any unforeseen delays or issues that arise, we will communicate with you promptly to discuss potential solutions.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">What is the timeline for a UI/UX design project?</AccordionHeader>
                <AccordionBody accordionId="4">
                  <p>All the factors influencing the cost (scope, complexity, platforms, budget, client feedback) will also affect the delivery timeline of a UX design project. A typical UX design project could go anywhere between 2-3 months to 6 months for a small-medium sized project. Bigger projects could take more than 6 months to 1 year depending on the scope and complexity.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">Do you provide support to the application after the product launch?</AccordionHeader>
                <AccordionBody accordionId="5">
                  <p>We offer support for our products after the launch, including ongoing testing during development and free support for the first month. Customers can also sign up for a maintenance contract for continued support after the first month. Please contact us for more details.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">What are the benefits of web design services?</AccordionHeader>
                <AccordionBody accordionId="6">
                  <p>By opting for web design services, you get a high-quality product tailored to your specific business needs. It's cost- effective, fast, and you get a great result: a client - centered web design, page load optimization, responsiveness, and many more.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="7">Why do small businesses need web design services?</AccordionHeader>
                <AccordionBody accordionId="7">
                  <p>Because it's a good investment.A well- designed and mobile - friendly website will stand out and get more conversions, and that's how you can grow your business.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="8">Why do you need professional web design services?</AccordionHeader>
                <AccordionBody accordionId="8">
                  <p>Our mobile app design services include a user interface (UI) and user experience (UX) designing. We create the overall style of the app, including logo, colors, fonts, and other graphic elements</p>
                  <p>First, we make <strong>wireframes</strong>, then develop <strong>2-3 visual concepts</strong>, design the app screen by screen, and create a <strong>clickable prototype.</strong></p>
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
        </div>
      </section>
    );
  }

export default Faq;
