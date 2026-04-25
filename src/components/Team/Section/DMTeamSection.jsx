import React from 'react';

import { TEAM_MEMBERS, DM_FEATURED_MEMBERS } from 'constants/members';
import MemberCard from '../Card/MemberCard';

const DMTeamSection = ({ }) => {
  const memberList = DM_FEATURED_MEMBERS.map((member) => (
    <MemberCard key={member.name} type="digitalMarketing" member={member} />
  ));

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header text-center">
              <div className="header-tag">OUR TEAM</div>
              <h2>Meet Our Experts</h2>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row row-eq-height">{memberList}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMTeamSection;
