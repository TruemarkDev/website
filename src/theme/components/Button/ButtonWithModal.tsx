import React from 'react';

import Tracker from '@services/tracker';
import EstimateModal from '@components/Modal/EstimateModal';
import SubscribeModal from '@components/Modal/SubscribeModal';
import ContactModal from '@components/Modal/ContactModal';
import CVModal from '@components/Modal/CVModal';

interface ButtonWithModalProps {
  text?: string;
  className?: string;
  modalType: string;
  attributes: Record<string, any>;
  title: string;
  subTitle?: string;
  estimateModalType: string;
  children?: React.ReactNode;
}

interface ButtonWithModalState {
  modal: boolean;
}

class ButtonWithModal extends React.Component<ButtonWithModalProps, ButtonWithModalState> {
  constructor(props: ButtonWithModalProps) {
    super(props);

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
    modalType: string,
    isModalOpen: boolean,
    attributes: Record<string, any>,
    title: string,
    subTitle: string,
    estimateModalType: string,
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
        return <SubscribeModal title='' isOpen={isModalOpen} toggle={this.toggle} />;
      case 'contact':
        return <ContactModal isOpen={isModalOpen} toggle={this.toggle} />;
      case 'cv':
        return (
          <CVModal
            title={title}
            subTitle={subTitle}
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
            estimateModalType={estimateModalType}
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
        {this.renderModal(
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

export default ButtonWithModal;
