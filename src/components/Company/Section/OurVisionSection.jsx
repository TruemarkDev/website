import React from 'react';

const bannerImage = '/images/about-us/our-vision-banner.webp';
const OurVisionSection = () => (
  <section className="pt-0 pt-md-5">
    <div className="container about-us our-vision position-relative">
      <div className="row row-eq-height align-items-center flex-column flex-md-row our-vision-container">
        <div className="col-lg-12">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 p-md-3 p-0 about-img-holder d-none d-md-block">
              <div className="position-absolute our-vision-svg1">
                <svg
                  width="51"
                  height="70"
                  viewBox="0 0 51 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.95455"
                    cy="6.95552"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle cx="25.5" cy="6.95552" r="6.95455" fill="#FFCBCB" />
                  <circle
                    cx="44.0454"
                    cy="6.95552"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle
                    cx="6.95455"
                    cy="25.5014"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle
                    cx="6.95455"
                    cy="44.0473"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle
                    cx="6.95455"
                    cy="62.5922"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle cx="25.5" cy="62.5922" r="6.95455" fill="#FFCBCB" />
                  <circle
                    cx="44.0454"
                    cy="62.5922"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle cx="25.5" cy="44.0473" r="6.95455" fill="#FFCBCB" />
                  <circle
                    cx="44.0454"
                    cy="44.0473"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                  <circle cx="25.5" cy="25.5014" r="6.95455" fill="#FFCBCB" />
                  <circle
                    cx="44.0454"
                    cy="25.5014"
                    r="6.95455"
                    fill="#FFCBCB"
                  />
                </svg>
              </div>
              <img
                src={bannerImage}
                alt="our vision"
                className="img-fluid position-absolute our-vision-image"
              />
            </div>
            <div className="card card-border-animation col-lg-7 col-xl-7 col-md-6 col-xxl-8 our-vision-card">
              <div className="header">
                <h2 className="left mb-5">Our Vision</h2>
              </div>
              <div>
                <h5 className="mb-3">
                  “Unity in Innovation, Excellence in Execution”
                </h5>
                <p className="text-secondary">
                  Our vision is to assemble a community of exceptionally
                  talented engineers who will unite in the pursuit of solving
                  the most challenging problems. Through collaboration,
                  innovation, and knowledge-sharing, we will aim to build a
                  thriving tech community that will foster continuous learning
                  and drive positive change in the world.
                </p>
              </div>
            </div>
            <div className="position-absolute text-end our-vision-svg2 d-none d-md-block">
              <svg
                width="51"
                height="70"
                viewBox="0 0 51 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.95455" cy="6.95552" r="6.95455" fill="#FFCBCB" />
                <circle cx="25.5" cy="6.95552" r="6.95455" fill="#FFCBCB" />
                <circle cx="44.0454" cy="6.95552" r="6.95455" fill="#FFCBCB" />
                <circle cx="6.95455" cy="25.5014" r="6.95455" fill="#FFCBCB" />
                <circle cx="6.95455" cy="44.0473" r="6.95455" fill="#FFCBCB" />
                <circle cx="6.95455" cy="62.5922" r="6.95455" fill="#FFCBCB" />
                <circle cx="25.5" cy="62.5922" r="6.95455" fill="#FFCBCB" />
                <circle cx="44.0454" cy="62.5922" r="6.95455" fill="#FFCBCB" />
                <circle cx="25.5" cy="44.0473" r="6.95455" fill="#FFCBCB" />
                <circle cx="44.0454" cy="44.0473" r="6.95455" fill="#FFCBCB" />
                <circle cx="25.5" cy="25.5014" r="6.95455" fill="#FFCBCB" />
                <circle cx="44.0454" cy="25.5014" r="6.95455" fill="#FFCBCB" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurVisionSection;
