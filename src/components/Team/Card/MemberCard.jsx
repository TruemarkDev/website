import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faArrowRight,
  faSearch,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import ButtonWithModal from 'components/Button/ButtonWithModal';
import TechStack from 'components/TechStack/TechStack';

const techIconHandler = (techName) => {
  switch (techName) {
    case 'IOS':
      return ['truemark', 'ios-icon'];
    case 'UI/UX':
      return ['truemark', 'ui-ux-icon'];
    case 'React Native':
      return ['truemark', 'react-icon'];
    case 'ReactJS':
      return ['truemark', 'react-icon'];

    case 'Project Management':
      return ['truemark', 'management-icon'];

    case 'NodeJS':
      return faNode;
    case 'Software Architecture':
      return faSitemap;
    case 'HTML':
      return ['truemark', 'html-icon'];

    case 'CSS':
      return ['truemark', 'css-icon'];

    case 'SEO':
      return faSearch;

    case 'Digital Marketing':
      return ['truemark', 'content-creator-icon'];

    case 'Content Strategy':
      return ['truemark', 'content-creator-icon'];

    case 'SEM':
      return faSearch;
    case 'SMM':
      return faSearch;

    case 'Ruby on Rails':
      return ['truemark', 'rails-icon'];

    default:
      return;
  }
};

const SkillList = ({ skills }) =>
  skills.map((skill) => (
    <li key={skill.title} className="nav-item">
      <TechStack
        icon={techIconHandler(skill.title)}
        name={skill.title}
        bgColor={skill.className}
        iconClass="text-white w-75 h-75"
        size="xs"
      />
    </li>
  ));

const MemberCard = ({ member, type }) => {
  const isDigitalMarketing = type == 'digitalMarketing';
  const modalTitle = isDigitalMarketing
    ? 'Need Help With Digital Marketing?'
    : `Hire ${member.name}`;
  const modalSubtitle = isDigitalMarketing
    ? `Let ${member.name} and team know your requirements`
    : 'What do you need?';

  return (
    <div className="col-lg-4 col-md-12 col-sm-12 rm-sm-3">
      <div className="team-card h-100">
        <div className="user-detail d-flex align-items-center p-5 text-center flex-column justify-content-between h-100">
          <img
            src={member.avatar}
            alt="contact truemark digital marketing"
            className="img-fluid img-thumbnail user-image mb-3 mx-auto d-block shadow-sm"
          />
          <h5 className="text-primary">{member.name}</h5>
          <p
            className="text-secondary"
            dangerouslySetInnerHTML={{ __html: member.bio }}
          />
          <ul className="nav mt-4 flex-row justify-content-center text-secondary stacks">
            <SkillList skills={member.skills} />
          </ul>
          <ButtonWithModal
            className="outlined mt-4"
            modalType="estimate"
            estimateModalType={type}
            attributes={member.attributes}
            title={modalTitle}
            subTitle={modalSubtitle}
          >
            Hire me
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </ButtonWithModal>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
