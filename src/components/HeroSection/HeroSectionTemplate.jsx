import React from 'react';
import PropTypes from 'prop-types';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import bannerImage from 'images/company/stand_out.svg?url';
const technologySvg = (technology) => {
  switch (technology) {
    case 'gatsbyjs':
      return (
        <svg
          className="mg-fluid flip-img hero-img"
          style={{ width: '40%' }}
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="svg-gatsby-139"
        >
          <title id="svg-gatsby-139">Gatsby</title>
          <path
            d="M28 0C12.6 0 0 12.6 0 28s12.6 28 28 28 28-12.6 28-28S43.4 0 28 0zM12.4 43.6C8.2 39.4 6 33.8 6 28.4L27.8 50c-5.6-.2-11.2-2.2-15.4-6.4zm20.4 5.8L6.6 23.2C8.8 13.4 17.6 6 28 6c7.4 0 13.8 3.6 17.8 9l-3 2.6C39.4 13 34 10 28 10c-7.8 0-14.4 5-17 12l23 23c5.8-2 10.2-7 11.6-13H36v-4h14c0 10.4-7.4 19.2-17.2 21.4z"
            fill="#639"
            fillRule="nonzero"
          />
        </svg>
      );
    case 'reactjs':
      return (
        <svg
          className="mg-fluid flip-img hero-img"
          style={{ width: '40%' }}
          viewBox="0 0 56 51"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="svg-react-452"
        >
          <title id="svg-react-452">React</title>
          <g transform="translate(0 -2)" fill="none" fillRule="evenodd">
            <path d="M0 0h56v56H0z" />
            <circle
              fill="#00D8FF"
              fillRule="nonzero"
              cx="28"
              cy="27.627"
              r="4.993"
            />
            <path
              d="M28 39.066c-7.012 0-13.14-.826-17.725-2.397-2.974-1.015-5.5-2.368-7.3-3.91C1.064 31.13.05 29.349.05 27.628c0-3.302 3.62-6.535 9.698-8.644 4.973-1.73 11.458-2.695 18.242-2.695 6.664 0 13.06.935 18.004 2.646 2.894.994 5.331 2.287 7.062 3.72 1.88 1.571 2.874 3.292 2.874 4.973 0 3.432-4.048 6.903-10.573 9.061C40.742 38.22 34.575 39.066 28 39.066zm0-20.391c-6.436 0-12.801.935-17.456 2.556-5.59 1.95-8.097 4.616-8.097 6.396 0 1.85 2.695 4.764 8.604 6.784 4.337 1.482 10.205 2.268 16.949 2.268 6.326 0 12.225-.796 16.611-2.258 6.137-2.04 8.942-4.954 8.942-6.794 0-.945-.716-2.059-2.02-3.143-1.501-1.253-3.69-2.397-6.305-3.302C40.523 19.57 34.406 18.675 28 18.675z"
              fill="#00D8FF"
              fillRule="nonzero"
            />
            <path
              d="M16.67 52.514c-1.014 0-1.91-.22-2.665-.657-2.855-1.651-3.85-6.405-2.646-12.722.985-5.182 3.392-11.27 6.784-17.148 3.332-5.769 7.33-10.842 11.28-14.273 2.307-2.01 4.644-3.482 6.753-4.258 2.298-.845 4.287-.845 5.74-.01 2.974 1.711 3.958 6.963 2.566 13.687-.985 4.775-3.332 10.534-6.615 16.233-3.501 6.068-7.28 10.962-10.931 14.154-2.368 2.07-4.805 3.581-7.033 4.367-1.163.418-2.258.627-3.232.627zm2.497-29.93l1.035.597c-3.213 5.57-5.59 11.548-6.505 16.402-1.104 5.819-.04 9.32 1.492 10.205.378.22.875.338 1.482.338 1.98 0 5.092-1.253 8.693-4.396 3.452-3.014 7.062-7.709 10.434-13.547 3.163-5.481 5.411-10.992 6.346-15.517 1.303-6.336.18-10.216-1.422-11.14-.816-.468-2.139-.408-3.73.178-1.84.677-3.92 2-6.008 3.82-3.75 3.263-7.58 8.116-10.782 13.667l-1.035-.607z"
              fill="#00D8FF"
              fillRule="nonzero"
            />
            <path
              d="M39.33 52.544c-2.706 0-6.138-1.632-9.719-4.715-3.998-3.442-8.066-8.564-11.468-14.443-3.342-5.769-5.73-11.767-6.734-16.91-.587-3.003-.696-5.758-.318-7.977.417-2.417 1.402-4.137 2.864-4.983 2.964-1.72 8.007.05 13.14 4.615 3.64 3.233 7.46 8.147 10.752 13.836 3.511 6.068 5.869 11.787 6.804 16.542.607 3.083.706 5.948.278 8.275-.457 2.477-1.492 4.238-2.984 5.103-.746.438-1.631.657-2.616.657zM20.211 32.193c3.222 5.57 7.221 10.613 10.961 13.825 4.486 3.86 8.047 4.695 9.589 3.8 1.601-.925 2.775-4.715 1.561-10.842-.895-4.496-3.153-9.966-6.535-15.805-3.173-5.48-6.823-10.186-10.275-13.25C20.68 5.626 16.76 4.66 15.16 5.586c-.816.468-1.423 1.651-1.711 3.322-.328 1.93-.229 4.397.308 7.112.955 4.884 3.243 10.623 6.456 16.174z"
              fill="#00D8FF"
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
    case 'ror':
      return (
        <svg
          className="mg-fluid flip-img hero-img"
          style={{ width: '40%' }}
          viewBox="0 0 56 44"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="svg-ruby-174"
        >
          <title id="svg-ruby-174">Ruby</title>
          <g fill="none" fillRule="evenodd">
            <path d="M0-7h56v56H0z" />
            <path fill="#900" d="M34.607 12.742H56L28 44.045z" />
            <path fill="#FA7B7C" d="M0 12.742h21.393l6.608 31.303z" />
            <path
              fill="#D50000"
              d="M17.618 12.742h20.764L28.001 44.045z"
            />
            <path fill="#FA7B7C" d="M9.281 0H28v12.742H9.281z" />
            <path fill="#FD0101" d="M28 0h18.562v12.742H28z" />
            <path fill="#900" d="M17.618 12.742h20.764L28 0z" />
            <path fill="#D50000" d="M38.382 12.742H56L46.247 0z" />
            <path fill="#FD0101" d="M0 12.742h17.618L9.281 0z" />
          </g>
        </svg>
      );
    case 'spree':
      return (
        <img
          className="mg-fluid flip-img hero-img"
          style={{ width: '40%' }}
          src="data:image/png;base64,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"
        />
      );
    default:
      null;
  }
};

const HeroSectionTemplate = ({
  title,
  tagline,
  paragraph1,
  paragraph2,
  technology,
}) => (
  <section className="position-relative overflow-hidden">
    <div className="container">
      <div className="row flip-content-sm">
        <div className="col-lg-6 col-md-10 col-sm-12 rm-content-container">
          <div className="header-tag mb-2">{title}</div>
          <h1 className="mb-4">{tagline}</h1>
          <p className="text-secondary">{paragraph1}</p>
          <p className="text-secondary">{paragraph2}</p>
          <ButtonWithModal text="Request A Quote" />
          {/* <button
            type="button"
            className="btn btn-lg btn-primary outlined ms-lg-2 ms-md-2"
          >
            Learn more
          </button> */}
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 rm-img-container hero-banner-img">
          {/* <img
              src={bannerImage}
              alt="digital marketing banner"
              className="img-fluid flip-img hero-img"
            /> */}
          {technologySvg(technology)}
        </div>
      </div>
    </div>
  </section>
);

HeroSectionTemplate.defaultProps = {
  title: '',
  tagline: '',
};

HeroSectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default HeroSectionTemplate;
