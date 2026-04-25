import React from 'react';

// import team member images
const memberAnil = '/images/team/anil.jpg';
const memberPrabin = '/images/team/prabin.jpg';
const memberPrakash = '/images/team/prakash.jpeg';
const memberSunil = '/images/team/sunil.png';
const memberKiran = '/images/team/kiran.jpg';
const memberSushil = '/images/team/sushil.jpeg';
const memberMausam = '/images/team/mausam.jpg';
const memberSunita = '/images/team/sunita.jpeg';
const memberAayush = '/images/team/aayush.jpeg';
const memberArogya = '/images/team/arogya.jpg';
const memberTruemarkHiring = '/images/team/truemark_is_hiring.png';
const TeamListSection = () => (
  <section className="team-area pb-100" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <div className="section-title">
            <h2>our team</h2>
            <p>Talented people, working together.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberPrabin} alt="Prabin Truemark" />
            <div className="team-hover">
              <h4>
                Prabin <span>CEO</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberPrakash} alt="Prakash Truemark" />
            <div className="team-hover">
              <h4>
                Prakash Sharma
                <span>CTO</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberAnil} alt="Anil Truemark" />
            <div className="team-hover">
              <h4>
                Anil <span>Tech Lead</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberTruemarkHiring} alt="Truemark is hiring" />
            <div className="team-hover">
              <h4>
                <a href="/jobs/software-engineer-rails">This could be you</a>
                <span>
                  <a href="/jobs/software-engineer-rails">
                    We're hiring Ruby Developer
                  </a>
                </span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberSushil} alt="Sushil Truemark" />
            <div className="team-hover">
              <h4>
                Sushil Shrestha
                <span>Senior Designer</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberMausam} alt="Mausam Truemark" />
            <div className="team-hover">
              <h4>
                Mausam Khanal
                <span>Senior Designer</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberTruemarkHiring} alt="Truemark is hiring" />
            <div className="team-hover">
              <h4>
                <a href="jobs/software-engineer-reactjs">This could be you</a>
                <span>
                  <a href="jobs/software-engineer-reactjs">
                    We're hiring Reactjs Engineer
                  </a>
                </span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberSunita} alt="Sunita Truemark" />
            <div className="team-hover">
              <h4>
                Sunita Gajurel
                <span>Associate Software Engineer</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberAayush} alt="Aayush Truemark" />
            <div className="team-hover">
              <h4>
                Aayush Shrestha <span>SEO Expert</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberTruemarkHiring} alt="Truemark is hiring" />
            <div className="team-hover">
              <h4>
                <a href="/careers">This could be you</a>
                <span>
                  <a href="/careers">We're hiring</a>
                </span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberKiran} alt="Kiran Truemark" />
            <div className="team-hover">
              <h4>
                Kiran <span>Content Writer</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberSunil} alt="Sunil Truemark" />
            <div className="team-hover">
              <h4>
                Sunil <span>Content Writer</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="single-team">
            <img src={memberArogya} alt="Arogya Truemark" />
            <div className="team-hover">
              <h4>
                Arogya <span>Digital Marketing Associate</span>
              </h4>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
              <a href="">
                <i className="fa fa-youtube" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamListSection;
