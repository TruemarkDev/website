import React from 'react';
import { Link } from 'gatsby';

const Fiverr = '/images/blogs/how-much-does-it-cost-to-build-an-app-like-fiverr/freelance-marketplace-development.png';
const uber = '/images/blogs/how-much-does-it-cost-to-build-an-app-like-uber/cost-to-build-uber-app.jpg';
const netflix = '/images/blogs/how-much-does-it-cost-to-build-an-app-like-netflix/cost-to-build-an-app-like-netflix.jpg';
const uberEats = '/images/blogs/how-much-does-it-cost-to-build-food-delivery-app/food-delivery-app-like-ubereats.jpg';
const nftMarketplace = '/images/blogs/how-much-does-it-cost-to-develop-an-nft-marketplace/nft-marketplace-development-cost.png';
const EstimationBlog: React.FC = () => {
    return (
      <ul className="col-10">
        <span className="d-flex align-items-center">
          <li className="m-0 col-6">
            <Link
              to="/blog/freelance-marketplace-estimate/"
              className="nav-dropdown-item d-block mb-1 py-2 px-2"
              activeClassName="active"
            >
              <span className="d-flex align-items-center mb-0">
                <span className="col-4 blog-img-holder">
                  <img src={Fiverr} alt="Fiverr" className="img-fluid rounded" />
                </span>
                <span className="nav-item ps-0">
                  <span className="fw-bold nav-heading">
                    Cost of building a Freelancing Marketplace
                  </span>
                  <span className="d-block nav-text">
                    like Fiverr, Upwork, Toptal and many more
                  </span>
                </span>
              </span>
            </Link>
          </li>
          <li className="m-0 col-6">
            <Link
              to="/blog/development-cost-to-build-an-app-like-uber/"
              className="nav-dropdown-item d-block mb-1 py-2 px-2"
              activeClassName="active"
            >
              <span className="d-flex align-items-center mb-0">
                <span className="col-4 blog-img-holder">
                  <img src={uber} alt="Uber" className="img-fluid rounded" />
                </span>
                <span className="nav-item ps-0">
                  <span className="fw-bold nav-heading">
                    Cost of building a Ride Hailing Service
                  </span>
                  <span className="d-block nav-text">like Uber, Grab, Ola</span>
                </span>
              </span>
            </Link>
          </li>
        </span>
        <span className="d-flex align-items-center">
          <li className="m-0  col-6">
            <Link
              to="/blog/cost-to-build-netflix-like-app/"
              className="nav-dropdown-item d-block mb-1 py-2 px-2"
              activeClassName="active"
            >
              <span className="d-flex align-items-center mb-0">
                <span className="col-4 blog-img-holder">
                  <img
                    src={netflix}
                    alt="Netflix"
                    className="img-fluid rounded"
                  />
                </span>
                <span className="nav-item ps-0">
                  <span className="fw-bold nav-heading">
                    To build a Video Streaming Service
                  </span>
                  <span className="d-block nav-text">
                    like Netflix, Amazon Prime, Hulu, Hotstar, Disney+
                  </span>
                </span>
              </span>
            </Link>
          </li>
          <li className="m-0 col-6">
            <Link
              to="/blog/cost-to-build-food-delivery-app-like-uber-eats/"
              className="nav-dropdown-item d-block mb-1 py-2 px-2"
              activeClassName="active"
            >
              <span className="d-flex align-items-center mb-0">
                <span className="col-4 blog-img-holder">
                  <img
                    src={uberEats}
                    alt="UberEats"
                    className="img-fluid rounded"
                  />
                </span>
                <span className="nav-item ps-0">
                  <span className="fw-bold nav-heading">
                    To build an Food Delivery Service
                  </span>
                  <span className="d-block nav-text">
                    like Uber Eats, Zomato, DoorDash, Grubhub, Swuggy, etc.
                  </span>
                </span>
              </span>
            </Link>
          </li>
        </span>
        <span className="d-flex align-items-center">
          <li className="m-0 col-6">
            <Link
              to="/blog/nft-marketplace-development-cost/"
              className="nav-dropdown-item d-block mb-1 py-2 px-2"
              activeClassName="active"
            >
              <span className="d-flex align-items-center mb-0">
                <span className="col-4 blog-img-holder">
                  <img
                    src={nftMarketplace}
                    alt="NFT marketplace"
                    className="img-fluid rounded"
                  />
                </span>
                <span className="nav-item ps-0">
                  <span className="fw-bold nav-heading">
                    To make a NFT marketplace
                  </span>
                  <span className="d-block nav-text">
                    like OpenSea, Axie, CryptoPunks, etc
                  </span>
                </span>
              </span>
            </Link>
          </li>
          <Link
            className="m-0 view-all container mx-2 d-flex justify-content-between px-4 py-2 rounded align-items-center"
            to="/blog/"
          >
            <span className="nav-item ps-0">
              <span className="fw-bold nav-heading">View all</span>
              <span className="d-block nav-text">other estimations too</span>
            </span>
            <span className="svg-arrow">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1002_4284)">
                  <path
                    d="M16.172 11.987L10.808 6.62298L12.222 5.20898L20 12.987L12.222 20.765L10.808 19.351L16.172 13.987H4V11.987H16.172Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1002_4284">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.987305)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Link>
        </span>
      </ul>
    );
  };

export default EstimationBlog;