import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import SubscribeForm from './Form/SubscribeForm';

const SubscribeModel = ({
  isOpen,
  toggle,
  className,
  initialValues,
  title,
}) => {
  const closeButton = (
    <FontAwesomeIcon
      icon={faTimes}
      size="lg"
      onClick={toggle}
      className="contact-form-modal-close"
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      backdrop
      backdropClassName="fade"
      className=" mt-5 mb-5"
    >
      <div className="modal-header d-block top-modal-banner p-0">
        <div className="primary-overlay py-0 py-md-2 px-md-4 px-2">
          <button
            onClick={toggle}
            type="button"
            className="btn-close p-1 m-0 float-end"
            data-dismiss="modal"
            aria-label="Close"
          />
        </div>
      </div>

      <div className="modal-body py-5 py-md-5 px-lg-5 px-3">
        <h3 className="modal-title mb-3 text-center" id="emailModalLabel">
          {title}
        </h3>
        <p className="modal-sub-title text-secondary mb-3 text-center">
          Join our subscribers list to get the latest news, updates and special
          offers delivered directly in your inbox.
        </p>

        <SubscribeForm />
      </div>
    </Modal>
  );
};

SubscribeModel.defaultProps = {
  initialValues: {},
  isOpen: false,
  className: '',
  title: 'Subscribe To Our Newsletter',
};

SubscribeModel.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  initialValues: PropTypes.shape({}),
  title: PropTypes.string,
};

export default SubscribeModel;
