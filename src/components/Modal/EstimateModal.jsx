import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import EstimateForm from '../Estimate/EstimateForm';

const EstimateModal = ({
  isOpen = false,
  toggle,
  className = '',
  initialValues = {},
  title = 'Project Estimation?',
  subTitle,
  estimateModalType,
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
      className="modal-quote mt-5 mb-5"
    >
      <div className="modal-body p-0">
        <div className="row row-eq-height m-0">
          <div className="col-lg-3 p-0 left-modal-banner">
            <div className="primary-overlay py-2 px-lg-4 px-3 h-100">
              <div className="contact-modal-header  d-flex justify-content-end align-items-center d-block d-lg-none">
                <button
                  type="button"
                  className="btn-close btn-primary py-2 px-3 mt-2 m-0 opacity-100 float-end"
                  onClick={toggle}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="contact-modal-header  d-flex justify-content-end align-items-center d-none d-lg-block pt-3 pe-2">
              <button
                type="button"
                className="btn-close btn-primary py-2 px-3 mt-2 m-0 opacity-100 float-end"
                onClick={toggle}
              />
            </div>
            <div className="contact-modal-body px-1 px-md-4 py-5 py-md-5">
              <h3 className="modal-title" id="emailModalLabel">
                {title}
              </h3>
              <p className="modal-sub-title text-secondary mb-3 mb-md-4">
                {subTitle}
              </p>
              <EstimateForm
                estimateModalType={estimateModalType}
                forId="hire-modal"
                initialValues={initialValues}
                forModal
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

EstimateModal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  initialValues: PropTypes.shape({}),
  title: PropTypes.string,
  scrollable: PropTypes.bool,
};

export default EstimateModal;
