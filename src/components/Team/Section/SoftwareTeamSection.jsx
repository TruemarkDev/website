import React, { useState } from 'react';
import { TEAM_MEMBERS, SOFTWARE_FEATURED_MEMBERS } from 'constants/members';
import MemberCard from '../Card/MemberCard';

const SoftwareTeamSection = ({ }) => {
  const memberList = SOFTWARE_FEATURED_MEMBERS.map((member) => (
    <MemberCard key={member.name} type="software" member={member} />
  ));

  return (
    <section id="team">
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

export default SoftwareTeamSection;
