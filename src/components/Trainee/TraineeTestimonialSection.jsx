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
    autoplaySpeed: 7000,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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

  if (typeof window === 'undefined') {
    return <div className="overflow-hidden">{children}</div>;
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
    const { client, testimonial } = item;

    return (
      <div key={item.key || client.name} className="testimonial-card mx-auto mt-5">
        <div className="carousel-inner shadow-lg mb-5">
          <div className="testimonial-flex d-flex flex-column-reverse">
            <div className="row flex-column-reverse flex-xl-row mt-xl-4">
              <div className="col-12 col-xl-4 mt-4">
                <div className="user-detail d-flex flex-row flex-xl-column align-items-center">
                  <img
                    alt={client.name}
                    className="testimonial-image"
                    src={client.avatar}
                  />
                  <span className="position-absolute ellipse-left d-none d-xl-block">
                    <svg
                      width="178"
                      height="179"
                      viewBox="0 0 178 179"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="89"
                        cy="89.5234"
                        r="89"
                        fill="#FF5757"
                      />
                    </svg>
                  </span>
                  <span className="position-absolute ellipse-right d-none d-xl-block">
                    <svg
                      width="224"
                      height="225"
                      viewBox="0 0 224 225"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="112"
                        cy="112.047"
                        r="112"
                        fill="#FF5757"
                      />
                    </svg>
                  </span>
                  <span className="ellipse-bottom d-none d-xl-block">
                    <svg
                      width="151"
                      height="151"
                      viewBox="0 0 151 151"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_4726_15023)">
                        <circle cx="75.5" cy="59.5" r="43.5" fill="white" />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4726_15023"
                          x="0"
                          y="0"
                          width="151"
                          height="151"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="16" />
                          <feGaussianBlur stdDeviation="16" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4726_15023"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4726_15023"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                  <div className="user-info testimonial-bio-text ps-4 ps-xl-0">
                    <h5 className="m-0 mb-1 text-primary text-start text-xl-center">
                      {client.name}
                    </h5>
                    <p
                      className="text-secondary m-0 text-start text-xl-center"
                      dangerouslySetInnerHTML={{ __html: client.bio }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8 d-xl-flex">
                <span className="quote">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2496 25.0031C15.6921 25.0031 15.1571 25.0881 14.6246 25.1656C14.7971 24.5856 14.9746 23.9956 15.2596 23.4656C15.5446 22.6956 15.9896 22.0281 16.4321 21.3556C16.8021 20.6281 17.4546 20.1356 17.9346 19.5131C18.4371 18.9081 19.1221 18.5056 19.6646 18.0031C20.1971 17.4781 20.8946 17.2156 21.4496 16.8456C22.0296 16.5131 22.5346 16.1456 23.0746 15.9706L24.4221 15.4156L25.6071 14.9231L24.3946 10.0781L22.9021 10.4381C22.4246 10.5581 21.8421 10.6981 21.1796 10.8656C20.5021 10.9906 19.7796 11.3331 18.9746 11.6456C18.1796 12.0006 17.2596 12.2406 16.4046 12.8106C15.5446 13.3556 14.5521 13.8106 13.6771 14.5406C12.8296 15.2931 11.8071 15.9456 11.0521 16.9031C10.2271 17.7981 9.41213 18.7381 8.77963 19.8081C8.04713 20.8281 7.54963 21.9481 7.02463 23.0556C6.54963 24.1631 6.16713 25.2956 5.85463 26.3956C5.26213 28.6006 4.99713 30.6956 4.89463 32.4881C4.80963 34.2831 4.85963 35.7756 4.96463 36.8556C5.00213 37.3656 5.07213 37.8606 5.12213 38.2031L5.18463 38.6231L5.24963 38.6081C5.69428 40.6852 6.71789 42.5939 8.20204 44.1136C9.68619 45.6332 11.5702 46.7016 13.6362 47.1952C15.7022 47.6888 17.8657 47.5874 19.8765 46.9027C21.8873 46.2181 23.6631 44.9781 24.9986 43.3263C26.3342 41.6745 27.1747 39.6784 27.4232 37.5689C27.6716 35.4593 27.3177 33.3225 26.4025 31.4057C25.4872 29.4888 24.048 27.8703 22.2513 26.7372C20.4545 25.6042 18.3738 25.003 16.2496 25.0031ZM43.7496 25.0031C43.1921 25.0031 42.6571 25.0881 42.1246 25.1656C42.2971 24.5856 42.4746 23.9956 42.7596 23.4656C43.0446 22.6956 43.4896 22.0281 43.9321 21.3556C44.3021 20.6281 44.9546 20.1356 45.4346 19.5131C45.9371 18.9081 46.6221 18.5056 47.1646 18.0031C47.6971 17.4781 48.3946 17.2156 48.9496 16.8456C49.5296 16.5131 50.0346 16.1456 50.5746 15.9706L51.9221 15.4156L53.1071 14.9231L51.8946 10.0781L50.4021 10.4381C49.9246 10.5581 49.3421 10.6981 48.6796 10.8656C48.0021 10.9906 47.2796 11.3331 46.4746 11.6456C45.6821 12.0031 44.7596 12.2406 43.9046 12.8131C43.0446 13.3581 42.0521 13.8131 41.1771 14.5431C40.3296 15.2956 39.3071 15.9481 38.5521 16.9031C37.7271 17.7981 36.9121 18.7381 36.2796 19.8081C35.5471 20.8281 35.0496 21.9481 34.5246 23.0556C34.0496 24.1631 33.6671 25.2956 33.3546 26.3956C32.7621 28.6006 32.4971 30.6956 32.3946 32.4881C32.3096 34.2831 32.3596 35.7756 32.4646 36.8556C32.5021 37.3656 32.5721 37.8606 32.6221 38.2031L32.6846 38.6231L32.7496 38.6081C33.1943 40.6852 34.2179 42.5939 35.702 44.1136C37.1862 45.6332 39.0702 46.7016 41.1362 47.1952C43.2022 47.6888 45.3657 47.5874 47.3765 46.9027C49.3873 46.2181 51.1631 44.9781 52.4986 43.3263C53.8342 41.6745 54.6747 39.6784 54.9232 37.5689C55.1716 35.4593 54.8177 33.3225 53.9025 31.4057C52.9872 29.4888 51.548 27.8703 49.7513 26.7372C47.9545 25.6042 45.8738 25.003 43.7496 25.0031Z"
                      fill="#DADBDD"
                    />
                  </svg>
                </span>
                <div className="ps-0 ps-sm-2 pt-xl-4 pb-3 pb-xl-0">
                  <p
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: testimonial }}
                  />
                </div>
              </div>
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
      <div className="container trainee-page">
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
