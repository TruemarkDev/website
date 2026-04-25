import React from 'react';

const artlordsLogo = '/images/client-logo/art-lords.png';
const freedomHillLogo = '/images/client-logo/freedom-hill-church.png';
const flexonetLogo = '/images/client-logo/flexonet.png';
const givesuranceLogo = '/images/client-logo/givesurance.png';
const lwfLogo = '/images/client-logo/love-with-food.png';
const snacknationLogo = '/images/client-logo/snack-nation.png';
const soonoLogo = '/images/client-logo/soono.png';
const travelbookLogo = '/images/client-logo/travel-book.png';
const TrustedBySection = () => (
  <aside className="company-stats">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="header-tag text-white mb-5">Trusted By</div>
          </div>
        </div>

        <div className="col-md-11 stat-box d-flex flex-row flex-wrap  mx-auto">
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a href="https://flexonet.dk/" target="_blank" rel="noreferrer">
              <img
                src={flexonetLogo}
                className="img-fluid"
                alt="Flexonet logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a
              href="https://lovewithfood.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={lwfLogo}
                className="img-fluid"
                alt="Love with food logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a href="https://snacknation.com/" target="_blank" rel="noreferrer">
              <img
                src={snacknationLogo}
                className="img-fluid"
                alt="Snack nation logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a href="https://travelbook.com/" target="_blank" rel="noreferrer">
              <img
                src={travelbookLogo}
                className="img-fluid"
                alt="travel book logo"
              />
            </a>
          </div>

          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a
              href="https://www.givesurance.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={givesuranceLogo}
                className="img-fluid"
                alt="givesurance logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a href="https://artlords.com/" target="_blank" rel="noreferrer">
              <img
                src={artlordsLogo}
                className="img-fluid"
                alt="art lord logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-md-start stat text-center clients">
            <a href="https://mysoono.com/" target="_blank" rel="noreferrer">
              <img
                src={soonoLogo}
                className="img-fluid gray-filter"
                alt="soono logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default TrustedBySection;
