import React from 'react';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'reactstrap';

const ProcessingModal = ({
  title = 'Processing',
  isProcessing,
  hideModal,
  message,
}) => {
  return (
    <Modal
      isOpen={isProcessing}
      toggle={hideModal}
      backdrop
      backdropClassName="fade"
      className="modal-dialog-centered mt-5 mb-5"
    >
      <div className="modal-header d-block top-modal-banner p-0">
        <div className="primary-overlay py-0 py-md-2 px-md-4 px-2">
          <button
            onClick={hideModal}
            type="button"
            className="btn-close p-1 m-0 float-end"
            data-dismiss="modal"
            aria-label="Close"
          />
        </div>
      </div>

      <div className="modal-body py-5 py-md-5 px-lg-5 px-3">
        <h3 className="modal-title mb-3 text-center" id="processingModalLabel">
          {title}
        </h3>
        <div className="d-flex flex-column align-items-center justify-content-center py-3">
          <FontAwesomeIcon
            icon={faSpinner}
            pulse
            className="text-primary mb-3"
          />
          <p
            className="text-muted text-center"
            dangerouslySetInnerHTML={{
              __html: message || 'Please wait .....',
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProcessingModal;
