import React from 'react';
import artlordsLogo from 'images/client-logo/art-lords.png?url';
import freedomHillLogo from 'images/client-logo/freedom-hill-church.png?url';
import flexonetLogo from 'images/client-logo/flexonet.png?url';
import givesuranceLogo from 'images/client-logo/givesurance.png?url';
import lwfLogo from 'images/client-logo/love-with-food.png?url';
import snacknationLogo from 'images/client-logo/snack-nation.png?url';
import soonoLogo from 'images/client-logo/soono.png?url';
import travelbookLogo from 'images/client-logo/travel-book.png?url';

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
