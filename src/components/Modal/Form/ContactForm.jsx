import React from 'react';
import PropTypes from 'prop-types';
import Tracker from 'services/tracker';
import { Form, Field } from 'react-final-form';
import PhoneInput from 'react-phone-input-2';
import FormField, { FormRow } from 'components/Form/FormField';
import { FileInput } from 'components/Form/FileInput';
import {
  composeValidators,
  required,
  isNameValue,
  isEmail,
} from 'utils/formValidators';
import { createFormFieldsSubmissionData } from 'utils/formSubmission';
import CrmApi from 'services/api/CrmApi';
import ToastService from 'services/toastService';

const acceptedFileInputs = [
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'application/pdf',
  'image/*',
];

class ContactForm extends React.Component {
  sendContactMessage(values) {
    const {
      first_name: first_name,
      last_name: last_name,
      email,
      contact_number: phone,
      customNote: message,
      attachment: files,
    } = values;

    const contactData = {
      first_name,
      last_name,
      email,
      phone,
      message,
    };

    const formData = createFormFieldsSubmissionData(contactData, files);

    ToastService.processPromise(CrmApi.submitContactForm(formData));
  }

  render() {
    return (
      <div className="contact-form">
        <CustomForm onSubmit={this.sendContactMessage} />
      </div>
    );
  }
}

export default ContactForm;

const CustomForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="mt-4">
        <FormRow className="mb-3">
          <FormField
            name="first_name"
            label="First Name"
            placeholder="First Name"
            containerClassName="form-group col-md-6 mb-3 mb-lg-0"
            inputClassName="form-control"
            errorClassName="mt-2 pe-5 me-5 small"
            labelClassName="form-label"
            validate={composeValidators(required, isNameValue)}
          />

          <FormField
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
            containerClassName="form-group col-md-6"
            inputClassName="form-control"
            errorClassName="mt-2 pe-5 me-5 small"
            labelClassName="form-label"
          />
        </FormRow>

        <FormRow className="mb-3">
          <FormField
            name="email"
            label="Email"
            placeholder="morgan@freeman.com"
            containerClassName="form-group col-md-6 mb-3 mb-lg-0"
            inputClassName="form-control"
            errorClassName="mt-2 pe-5 me-5 small"
            labelClassName="form-label"
            validate={composeValidators(required, isEmail)}
          />
          <Field name="contact_number">
            {({ input }) => (
              <PhoneInput
                inputProps={{
                  name: 'contact_number',
                }}
                type="phone"
                labelClassName="form-label"
                country="np"
                specialLabel="Phone Number"
                inputClassName="form-control"
                placeholder="Contact Number"
                containerClassName="form-group col-md-6"
                errorClassName="mt-2 pe-5 me-5 small"
                specialLabelClassName="form-label"
                className="col-md-6 h-50"
                {...input}
              />
            )}
          </Field>
        </FormRow>

        <FormRow className="mb-3">
          <FormField
            name="customNote"
            containerClassName="form-group"
            inputClassName="form-control p-3"
            rows={3}
            placeholder="Please write your custom note here"
            label="Your Message"
            labelClassName="form-label"
            textArea
            validate={required}
          />
        </FormRow>

        <Field
          name="attachment"
          type="file"
          render={({ input }) => (
            <FileInput
              multiple
              input={input}
              inputClassName="form-control form-file-input"
              label="Upload attachments"
              containerClassName="form-group col-md-12 mb-3"
              acceptedFileInputs={acceptedFileInputs}
              labelClassName="form-label"
            />
          )}
        />

        <div className="form-group">
          <button type="submit" className="btn btn-primary w-100 mt-5 mx-auto">
            Send Message
          </button>
        </div>
      </form>
    )}
  />
);

CustomForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
