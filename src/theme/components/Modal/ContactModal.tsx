import React from 'react';
import { Modal } from 'reactstrap';

import ContactForm from './Form/ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, toggle }) => (
  <Modal
    isOpen={isOpen}
    toggle={toggle}
    backdrop
    backdropClassName="fade"
    className="modal-quote mt-5 mb-5"
  >
    <div className="modal-body p-0">
      <div className="row row-eq-height m-0">
        <div className="col-lg-4 col-md-4 col-sm-12 p-0">
          <div className="gray-bg d-flex flex-column align-items-center justify-content-center py-3 px-lg-4 px-2 h-100">
            <div className="contact-modal-header  d-flex justify-content-end align-items-center d-block d-md-none w-100 pe-3">
              <button
                type="button"
                className="btn-close p-1 m-0 float-end"
                onClick={toggle}
              />
            </div>

            <div className="modal-graphic text-center ">
              <div className="contact-banner left-modal-contact-banner" />
              <h3 className="modal-title">Contact us</h3>
              <p className="modal-sub-title text-secondary mt-3 rm-sm-4">
                We don’t like our customers waiting on us. We will respond
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="contact-modal-header  d-flex justify-content-end align-items-center d-none d-md-block pt-3 pe-2">
            <button
              type="button"
              className="btn-close p-1 m-0 float-end"
              onClick={toggle}
            />
          </div>
          <div className="contact-modal-body p-2 p-md-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

export default ContactModal;
