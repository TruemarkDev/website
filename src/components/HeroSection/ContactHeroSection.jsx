import React from 'react';
import Man from 'images/contact-us/man.png?url';
import Arrow from 'images/contact-us/arrow.png?url';
import SmallElement from 'images/contact-us/small-element.svg?url';

const ContactHeroSection = () => (
  <section className="section hero-section-contact position-relative overflow-hidden">
    <div className="container position-relative h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div>
          <p className="text-center">Contact us</p>
          <h1 className="text-center position-relative contact-us-heading">
            We'd love to hear from you
          </h1>
        </div>
      </div>
      <div className="position-absolute img-man">
        <img src={Man} alt="" className="img-fluid" />
      </div>

      <div className="position-absolute img-arrow">
        <img src={Arrow} alt="" className="img-fluid" />
      </div>

      <div className="position-absolute small-element">
        <img src={SmallElement} alt="" className="img-fluid" />
      </div>

      <div className="position-absolute blur-pinkback"></div>
      <div className="position-absolute blur-blueback"></div>

      <div className="position-absolute left-icons"></div>
      <div className="position-absolute right-icons"></div>
    </div>

    <div className="position-absolute circle-left"></div>
  </section>
);

export default ContactHeroSection;
