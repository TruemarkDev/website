import React from 'react';

import { Link } from 'gatsby';

import ButtonWithModal from 'components/Button/ButtonWithModal';

import ROUTES from 'constants/routes';
import {
  TRAINEE_PROGRAM_TITLES,
  TRAINEE_PROGRAM_ICONS,
} from 'constants/traineeProgramConstants';

const OurTraineeProgramSection = ({ programs = { edges: [] } }) => {
  const traineeProgramData = programs;

  const formatLastApplyDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate
      .split(' ')
      .map((comma) => comma.replace(',', ''));
    return `${day} ${month} ${year}`;
  };

  const formatNextIntakeDate = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const handleTraineeProgramInformation = (traineeDetailData) => {
    const {
      positionOpen,
      dateForNextIntake,
      datePosted,
      validityInDays,
      vacancyCount,
      category: traineeProgramCategory,
    } = traineeDetailData.frontmatter;

    const getTraineeJobApplicationStatus = () => {
      if (positionOpen) {
        const traineeJobPostedDate = new Date(datePosted);

        const lastDateToApply = new Date(traineeJobPostedDate);
        lastDateToApply.setDate(
          traineeJobPostedDate.getDate() + validityInDays
        );

        return `Last date to apply - ${formatLastApplyDate(lastDateToApply)}`;
      } else {
        return `Next Intake - ${formatNextIntakeDate(dateForNextIntake)}`;
      }
    };

    const traineeProgramStatus = positionOpen ? 'Open Now' : 'Closed Now';

    const traineeProgramIcon = TRAINEE_PROGRAM_ICONS[traineeProgramCategory];

    const traineeStackTitle = `${traineeProgramCategory} ${
      positionOpen ? `(${vacancyCount})` : ''
    }`;

    const traineeProgramStatusClassName = positionOpen
      ? 'text-open'
      : 'text-closed';

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3 pb-3">
        <div className="card card1 p-4 h-100 w-100">
          <div className="d-flex align-items-center trainee-title">
            <span className="me-2 d-flex"> {traineeProgramIcon}</span>
            <h3 className="m-0">{traineeStackTitle}</h3>
          </div>
          <p className={traineeProgramStatusClassName}>
            {traineeProgramStatus}
          </p>
          <h4>{getTraineeJobApplicationStatus()}</h4>
          <ApplyNowButton isVisible={positionOpen} />
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="container trainee-program">
        <div className="col-md-12">
          <div className="header text-center">
            <div className="sub-header-tag">Explore</div>
            <h2>Our Trainee Program</h2>
          </div>
          <div className="trainee-sub-heading text-center pt-4">
            Join Truemark Technology's trainee program for hands-on experience
            and mentorship from industry leaders. Embrace real-world projects
            and unlock boundless opportunities for innovation and growth.
          </div>
        </div>
        <div className="row our-services mt-5">
          {TRAINEE_PROGRAM_TITLES.map((traineeTitle) => {
            const traineeDetail = traineeProgramData.edges.find(
              (title) => title.node.frontmatter.category === traineeTitle
            );

            const isTraineeDetailPresent =
              traineeDetail &&
              handleTraineeProgramInformation(traineeDetail.node);

            return isTraineeDetailPresent;
          })}
        </div>
        <div className="view-trainee-page text-center">
          <Link to={ROUTES.TRAINEE}>
            <button type="button" className="btn btn-lg btn-primary button">
              View Trainee Page
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTraineeProgramSection;

export const ApplyNowButton = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <ButtonWithModal
      text="APPLY NOW"
      title="Apply for this Job"
      subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
      modalType="cv"
      className="mb-0 w-100 text-primary p-0 apply-button text-start"
    />
  );
};
