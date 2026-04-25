import React from 'react';
import PropTypes from 'prop-types';

import Tracker from 'services/tracker';
import EstimateModal from 'components/Modal/EstimateModal';
import SubscribeModal from 'components/Modal/SubscribeModal';
import ContactModal from 'components/Modal/ContactModal';
import CVModal from 'components/Modal/CVModal';

class ButtonWithModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  toggle() {
    const { modal } = this.state;

    modal ? Tracker.trackCloseContactForm() : Tracker.trackOpenContactForm();

    this.setState({
      modal: !modal,
    });
  }

  renderModal(
    modalType,
    isModalOpen,
    attributes,
    title,
    subTitle,
    estimateModalType,
  ) {
    switch (modalType) {
      case 'estimate':
        return (
          <EstimateModal
            title={title}
            subTitle={subTitle}
            initialValues={attributes}
            isOpen={isModalOpen}
            estimateModalType={estimateModalType}
            toggle={this.toggle}
          />
        );
      case 'subscribe':
        return <SubscribeModal isOpen={isModalOpen} toggle={this.toggle} />;
      case 'contact':
        return <ContactModal isOpen={isModalOpen} toggle={this.toggle} />;
      case 'cv':
        return (
          <CVModal
            title={title}
            subTitle={subTitle}
            initialValues={attributes}
            isOpen={isModalOpen}
            toggle={this.toggle}
          />
        );
      default:
        return (
          <EstimateModal
            title={title}
            subTitle={subTitle}
            initialValues={attributes}
            isOpen={isModalOpen}
            toggle={this.toggle}
          />
        );
    }
  }

  render() {
    const { modal } = this.state;
    const {
      text,
      className,
      children,
      modalType,
      attributes,
      title,
      subTitle,
      estimateModalType,
    } = this.props;
    const classNames = ['btn btn-lg btn-primary'];

    if (className) {
      classNames.push(className);
    }

    return (
      <>
        <button
          type="button"
          onClick={this.toggle}
          className={classNames.join(' ')}
        >
          {text || children}
        </button>
        {modal &&
          this.renderModal(
            modalType,
            modal,
            attributes,
            title,
            subTitle,
            estimateModalType,
          )}
      </>
    );
  }
}

ButtonWithModal.defaultProps = {
  className: '',
  text: undefined,
};

ButtonWithModal.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonWithModal;
