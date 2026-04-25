import React from 'react';
import { Modal } from 'reactstrap';

import SubscribeForm from './Form/SubscribeForm';

interface SubscribeModelProps {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
  initialValues?: any;
  title: string;
}

const SubscribeModel: React.FC<SubscribeModelProps> = ({
  isOpen,
  toggle,
  title,
}) => (
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

export default SubscribeModel;
