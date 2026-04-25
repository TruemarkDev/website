import React from 'react';

const bannerImage = '/images/company/beginnings.jpg';
import CompanyStatsOnlySection from 'components/Stats/Section/CompanyStatsOnlySection';

const AboutHeroStatsSection = () => (
  <section>
    <div className="container about-us">
      <div className="row row-eq-height align-items-center flex-column flex-md-row">
        <div className="col-lg-12">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-4 col-sm-12 rm-sm-4 p-md-3 p-0 about-img-holder">
              <img
                src={bannerImage}
                alt="about Truemark"
                className="img-fluid company-life about-img clip3"
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rm-sm-3 ps-4">
              <div className="header">
                <div className="header-tag">Our story</div>
                <h2 className="left mb-5">About Truemark</h2>
              </div>
              <p className="text-secondary">
                Our skills and knowledge are very flexible - we are able to
                accomplish literally any IT challenge today's market can throw
                on us.
              </p>
              <p className="text-secondary">
                Being on the market since 2017, we have managed to gain the
                trust and respect from our clients. Long-term relationships and
                happy customers have always been one of our main goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CompanyStatsOnlySection employeeCount={25} />
  </section>
);

export default AboutHeroStatsSection;
