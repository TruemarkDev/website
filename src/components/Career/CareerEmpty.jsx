import React from 'react';
import { Col } from 'reactstrap';

const heroImage = '/images/career/work-with-us-hero-image.png';
import ButtonWithModal from 'components/Button/ButtonWithModal';

export default () => (
  <>
    <div className="position-absolute sky-blue-star">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 0.40625L13.2009 7.70534L20.5 10.4062L13.2009 13.1072L10.5 20.4062L7.79909 13.1072L0.5 10.4062L7.79909 7.70534L10.5 0.40625Z"
          fill="#9AEDF8"
        />
      </svg>
    </div>
    <Col lg={8} md={12} className="mx-auto">
      <div className="no-job text-center mt-4">
        <span className="position-absolute pink-small-circle d-none d-md-block">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              opacity="0.5"
              cx="5.39631"
              cy="5.38847"
              rx="5.0135"
              ry="5.01347"
              fill="#FF5757"
            />
          </svg>
        </span>
        <span className="position-absolute purple-circle d-none d-md-block">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="15" cy="15.9062" r="15" fill="#9897F3" />
          </svg>
        </span>
        <div className="hero-image">
          <img
            className="mb-3 position-relative"
            src={heroImage}
            alt="work with us hero image"
          />
        </div>
        <span className="position-absolute arrow-icon">
          <svg
            width="92"
            height="82"
            viewBox="0 0 92 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.2192 31.0491L40.8128 50.4777L69.9224 79.6205L89.3288 1.90625L2 35.9063L21.4064 45.6205L31.1096 74.7634L45.6644 55.3348"
              stroke="#F08985"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="position-absolute yellow-polygon d-none d-md-block">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.4248 0.676906L19.6895 28.0536L0.848264 5.93416L29.4248 0.676906Z"
              fill="#FFE292"
            />
          </svg>
        </span>
        <span className="position-absolute pink-big-circle d-none d-md-block">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="12" cy="12.9062" r="12" fill="#FF5757" />
          </svg>
        </span>
        <h3 className="mt-3">
          Sorry, there are no positions available at this time
        </h3>
        <p className="text-secondary mb-5 mb-md-4">
          Currently we don't have any open positions but if you are interested
          in possible future opportunities please send your CV
        </p>

        <ButtonWithModal
          text="Send us your CV"
          title="Send us your CV"
          subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
          modalType="cv"
          className="mt-md-0 mb-0"
        />
      </div>
    </Col>
    <span className="position-absolute blue-circle">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_5047_18431)">
          <path
            d="M24.8145 13.6806C24.8145 19.4952 20.1008 24.2089 14.2862 24.2089C8.47151 24.2089 3.75781 19.4952 3.75781 13.6806C3.75781 7.86602 8.47151 3.15234 14.2862 3.15234C20.1008 3.15234 24.8145 7.86602 24.8145 13.6806Z"
            fill="#6B81AA"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5047_18431"
            x="0.757812"
            y="0.152344"
            width="27.0547"
            height="27.0547"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.5"
              result="effect1_foregroundBlur_5047_18431"
            />
          </filter>
        </defs>
      </svg>
    </span>
    <span className="position-absolute orange-star">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4778 0.09375L15.6686 8.7167L24.2915 11.9075L15.6686 15.0983L12.4778 23.7212L9.28701 15.0983L0.664062 11.9075L9.28701 8.7167L12.4778 0.09375Z"
          fill="#C35714"
        />
      </svg>
    </span>
    <div className="position-absolute ellipse-group d-none d-md-block">
      <svg
        width="64"
        height="83"
        viewBox="0 0 64 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <ellipse
            cx="59"
            cy="5.91016"
            rx="5"
            ry="4.99997"
            transform="rotate(90 59 5.91016)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="41.0078"
            cy="5.92188"
            rx="5"
            ry="4.99997"
            transform="rotate(90 41.0078 5.92188)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="22.9844"
            cy="5.90625"
            rx="5"
            ry="4.99997"
            transform="rotate(90 22.9844 5.90625)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="5.01565"
            cy="5.92188"
            rx="5"
            ry="4.99997"
            transform="rotate(90 5.01565 5.92188)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="58.9844"
            cy="23.9219"
            rx="5"
            ry="4.99997"
            transform="rotate(90 58.9844 23.9219)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="41.0078"
            cy="23.9141"
            rx="5"
            ry="4.99997"
            transform="rotate(90 41.0078 23.9141)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="23"
            cy="23.9141"
            rx="5"
            ry="4.99997"
            transform="rotate(90 23 23.9141)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="5.00784"
            cy="23.918"
            rx="5"
            ry="4.99997"
            transform="rotate(90 5.00784 23.918)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="59.0078"
            cy="41.918"
            rx="5"
            ry="4.99997"
            transform="rotate(90 59.0078 41.918)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="41.0078"
            cy="41.9141"
            rx="5"
            ry="4.99997"
            transform="rotate(90 41.0078 41.9141)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="23.0078"
            cy="41.918"
            rx="5"
            ry="4.99997"
            transform="rotate(90 23.0078 41.918)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="5.00003"
            cy="41.9141"
            rx="5"
            ry="4.99997"
            transform="rotate(90 5.00003 41.9141)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="59.0078"
            cy="59.9141"
            rx="5"
            ry="4.99997"
            transform="rotate(90 59.0078 59.9141)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="59.0078"
            cy="77.918"
            rx="5"
            ry="4.99997"
            transform="rotate(90 59.0078 77.918)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="40.9922"
            cy="59.918"
            rx="5"
            ry="4.99997"
            transform="rotate(90 40.9922 59.918)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="23"
            cy="59.9102"
            rx="5"
            ry="4.99997"
            transform="rotate(90 23 59.9102)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="5.00003"
            cy="59.9258"
            rx="5"
            ry="4.99997"
            transform="rotate(90 5.00003 59.9258)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="41"
            cy="77.9102"
            rx="5"
            ry="4.99997"
            transform="rotate(90 41 77.9102)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="23.0235"
            cy="77.9219"
            rx="5"
            ry="4.99997"
            transform="rotate(90 23.0235 77.9219)"
            fill="#6C757D"
          ></ellipse>
          <ellipse
            cx="5.00784"
            cy="77.9102"
            rx="5"
            ry="4.99997"
            transform="rotate(90 5.00784 77.9102)"
            fill="#6C757D"
          ></ellipse>
        </g>
      </svg>
    </div>
  </>
);
