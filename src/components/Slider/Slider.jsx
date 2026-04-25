import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const SlideControls = React.forwardRef((props, ref) => (
  <div className="d-flex justify-content-end slider-control">
    {/* TODO @prakash cleanup this button, we should not need bg-light */}
    <button
      type="button"
      className="btn btn-light rounded-circle bg-light p-0 border-0"
      onClick={() => ref.current.slickPrev()}
    >
      <FontAwesomeIcon className="text-dark" icon={faAngleLeft} />
    </button>
    <button
      type="button"
      className="btn btn-light rounded-circle bg-light p-0 ms-2 border-0"
      onClick={() => ref.current.slickNext()}
    >
      <FontAwesomeIcon className="text-dark" icon={faAngleRight} />
    </button>
  </div>
));

const Slider = React.forwardRef(({ children, slideCount }, ref) => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
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

export default Slider;
