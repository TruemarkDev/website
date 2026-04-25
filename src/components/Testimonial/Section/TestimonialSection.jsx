import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderControl = React.forwardRef((props, ref) => (
  <div className="d-flex justify-content-end slider-control">
    <div className="d-none d-md-block">
      <div
        className="carousel-control-prev"
        onClick={() => ref.current.slickPrev()}
      >
        <div className="arrow-indicator d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <span className="sr-only">Previous</span>
      </div>
      <div
        className="carousel-control-next"
        onClick={() => ref.current.slickNext()}
      >
        <div className="arrow-indicator d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <span className="sr-only">Previous</span>
      </div>
    </div>
  </div>
));

const CardSlider = React.forwardRef(({ children, slideCount }, ref) => {
  const settings = {
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (slideCount < 2) {
    return children;
  }

  return (
    <div className="overflow-hidden">
      <Slick ref={ref} {...settings}>
        {children}
      </Slick>
    </div>
  );
});

const TestimonialSlider = ({ items }) => {
  const sliderRef = useRef();

  const slides = items.map((item) => {
    const { client, key, project, testimonial } = item;

    return (
      <div key={key} className="testimonial-card mx-auto mt-5">
        <div className="carousel-inner shadow-lg mb-5">
          <img
            alt={project.name}
            src={project.screenshot}
            className="img-fluid web-screenshot mb-0"
          />
          <div className="testimonial-flex d-flex flex-column-reverse">
            <div className="user-detail d-flex align-items-center">
              <img
                alt={client.name}
                className="img-fluid img-thumbnail mx-auto d-block user-image mb-0 mr-3"
                src={client.avatar}
              />
              <div className="user-info ms-3">
                <h5 className="m-0 mb-1 text-primary">{client.name}</h5>
                <p
                  className="text-secondary m-0"
                  dangerouslySetInnerHTML={{ __html: client.bio }}
                />
              </div>
            </div>
            <div className="user-review">
              <p
                className="m-0"
                dangerouslySetInnerHTML={{ __html: testimonial }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="position-relative">
      {items.length > 1 && <SliderControl ref={sliderRef} />}
      <CardSlider ref={sliderRef} slideCount={items.length}>
        {slides}
      </CardSlider>
    </div>
  );
};

const TestimonialSection = ({ items, sectionTitle, sectionSubheading }) => {
  sectionTitle = sectionTitle || 'TESTIMONIALS';
  sectionSubheading = sectionSubheading || 'Our Customer Feedback';

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header text-center">
              <div className="header-tag">{sectionTitle}</div>
              <h2>{sectionSubheading}</h2>
            </div>
          </div>
          <TestimonialSlider items={items} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
