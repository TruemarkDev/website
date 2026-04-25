import React from 'react';
import { Form } from 'react-final-form';

import Tracker from '@services/tracker';

import {
  composeValidators,
  required,
  isEmail,
} from '@utils/formValidators';

import notyService from '@services/notyService';

import HubspotApi from '@services/api/HubspotApi';

interface SubscribeFormProps {
  onSubmit?: (values: { email: string }) => void;
}

class SubscribeForm extends React.Component<SubscribeFormProps> {
  sendContactMessage = (values: { email: string }) => {
    const { email } = values;

    const contactData = {
      contact: {
        email,
      },
    };

    notyService.processInit();

    HubspotApi.post(contactData).then(
      () => {
        notyService.processSuccess();
      },
      () => {
        notyService.processFailed();
      }
    );
  };

  render() {
    return (
      <div className="contact-form">
        <CustomForm onSubmit={this.sendContactMessage} />
      </div>
    );
  }
}

export default SubscribeForm;

interface CustomFormProps {
  onSubmit: (values: { email: string }) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form className="pt-3" onSubmit={handleSubmit}>
        <div className="form-row px-2 px-lg-5">
          <div className="input-group newsletter-subscribe-form">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter your email here"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              validate={composeValidators(required, isEmail)}
            />
            <button
              type="submit"
              value="Send Message"
              onClick={Tracker.trackSubmitContactForm}
              className="input-group-prepend btn btn-inline "
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    )}
  />
);
