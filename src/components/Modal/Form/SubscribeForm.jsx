import React from 'react';
import PropTypes from 'prop-types';
import Tracker from 'services/tracker';
import { Form } from 'react-final-form';
import FormField from 'components/Form/FormField';
import {
  composeValidators,
  required,
  isNameValue,
  isEmail,
  isPhoneNumber,
} from 'utils/formValidators';
// import ToastService from 'services/toastService';

class SubscribeForm extends React.Component {
  sendContactMessage(values) {
    const { email } = values;

    const contactData = {
      contact: {
        email,
      },
    };

    // ToastService.processPromise(FormSubmissionApi.post(contactData));
  }

  render() {
    return (
      <div className="contact-form">
        <CustomForm onSubmit={this.sendContactMessage} />
      </div>
    );
  }
}

export default SubscribeForm;

const CustomForm = ({ onSubmit }) => (
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

SubscribeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
