import React from 'react';
import ButtonWithModal from 'components/Button/ButtonWithModal';
const TraineeHeroSectionImage = '/images/trainee/TraineeHeroSection1.png';
const KnowledgeImage = '/images/trainee/Knowledge.png';
const JobOpportunityImage = '/images/trainee/JobOpportunity.png';
const PersonalGrowthImage = '/images/trainee/PersonalGrowth.png';
const ProDevelopmentImage = '/images/trainee/ProDevelp.png';
function TraineeHeroSection() {
  return (
    <section className="bg-hero1 position-relative overflow-hidden py-5">
      <div className="position-relative container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className="header-tag mb-2">
              START YOUR PROFESSIONAL JOURNEY
            </div>
            <h1 className="mb-4 text-secondary">
              Jumpstart your career with Truemark
            </h1>
            <p className="text-secondary">
              At Truemark, we are always open to receiving applications from
              talented and driven individuals who are looking to jumpstart their
              careers. If you are a recent college graduate, we welcome you to
              apply for a position at Truemark and join our team.
            </p>
            <ButtonWithModal text="Apply Now" />
          </div>

          <div className="col-lg-6 position-relative  mb-sm-0 mb-md-0 d-flex justify-content-center">
            <img
              src={TraineeHeroSectionImage}
              alt="hero image"
              className="img-fluid bannerImage"
            />
            <span className="position-absolute bg-white border-radius tabs socialMedia rounded-4 px-2 py-1 d-flex align-items-center personal-growth">
              <img
                src={PersonalGrowthImage}
                alt=""
                height="40px"
                width="40px"
              />
              <span className="d-inline ms-2 fs-4">
                Personal Growth
              </span>
            </span>
            <span className="position-absolute bg-white border-radius tabs contentWriting rounded-4 px-2 py-1 d-flex align-items-center knowledge">
              <img src={KnowledgeImage} alt="" height="40px" width="40px" />
              <span className="d-inline ms-2 fs-4">
                Knowledge
              </span>
            </span>
            <span className="position-absolute bg-white border-radius tabs seo rounded-4 px-2 py-1 d-flex align-items-center job-opportunity">
              <img
                src={JobOpportunityImage}
                alt=""
                height="40px"
                width="40px"
              />
              <span className="d-inline ms-2 fs-4">
                Potential Job Opportunity
              </span>
            </span>
            <span className="position-absolute bg-white border-radius tabs seo rounded-4 px-2 py-1 d-flex align-items-center professional-development">
              <img
                src={ProDevelopmentImage}
                alt=""
                height="40px"
                width="40px"
              />
              <span className="d-inline ms-2 fs-4">
                Professional Development
              </span>
            </span>
          </div>
          <div className="pink position-absolute"></div>
          <div className="blue position-absolute"></div>
        </div>
      </div>
    </section>
  );
}

export default TraineeHeroSection;
