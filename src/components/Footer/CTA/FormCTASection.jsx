import React from 'react';
import { Form, Field } from 'react-final-form';
import PhoneInput from 'react-phone-input-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

import FormField, { FormRow } from 'components/Form/FormField';
import {
  required,
  composeValidators,
  isNameValue,
  isEmail,
  isPhoneNumber,
} from 'utils/formValidators';
import { createFormFieldsSubmissionData } from 'utils/formSubmission';
import { FileInput } from 'components/Form/FileInput';
import CrmApi from 'services/api/CrmApi';

import ToastService from 'services/toastService';
import contactUsImage from 'images/layout/contact-us.svg?url';

const acceptedFileInputs = [
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'application/pdf',
  'image/*',
];

const FormCTASection = () => {
  const onSubmit = async (values) => {
    const {
      firstName: first_name,
      lastName: last_name,
      email,
      phone,
      userMessage: message,
      userFile: files,
    } = values;
    const userData = {
      first_name,
      last_name,
      email,
      phone,
      message,
    };

    const formData = createFormFieldsSubmissionData(userData, files);

    ToastService.processPromise(CrmApi.submitQuoteForm(formData));
  };

  return (
    <section className="footer-contact-form overflow-hidden">
      <div
        className="container container-footer position-relative"
        id="footerContactForm"
      >
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column text-md-start text-center justify-content-center align-center mx-auto">
            <div className="pe-0 pe-lg-5 text-center d-none d-lg-block">
              <div className="footer-contact-img">Request A Quote</div>
              <p className="text-secondary mt-4 rm-sm-5 d-none d-md-block-md-only">
                We don’t like our customers waiting on us. We will respond
                within 24 hours.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 position-relative quote-form">
            <h3 className="mb-2 text-lg-start text-md-center text-center">
              Request A Quote
            </h3>
            <p className="text-secondary mb-5 mb-lg-0 text-lg-start text-md-center text-center">
              Let’s turn your dream project into a reality.
            </p>
            <ContactForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormCTASection;

const ContactForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit} className="mt-4">
        <FormRow className="mb-3">
          <FormField
            name="firstName"
            label="First Name"
            containerClassName="form-group col-md-6"
            inputClassName="form-control"
            validate={composeValidators(required, isNameValue)}
            labelClassName="form-label"
          />
          <FormField
            name="lastName"
            label="Last Name"
            containerClassName="form-group col-md-6"
            inputClassName="form-control"
            validate={composeValidators(required, isNameValue)}
            labelClassName="form-label"
          />
        </FormRow>
        <FormRow className="mb-3">
          <FormField
            name="email"
            label="Your Email"
            containerClassName="form-group col-md-6 mb-3 mg-lg-0"
            inputClassName="form-control"
            validate={composeValidators(required, isEmail)}
            labelClassName="form-label"
          />

          <Field name="phone">
            {({ input }) =>
              typeof window === 'undefined' ? (
                <div className="form-group col-md-6">
                  <label className="form-label" htmlFor="footer-phone">
                    Your Phone *
                  </label>
                  <input
                    id="footer-phone"
                    name="phone"
                    className="form-control"
                    placeholder=""
                    {...input}
                  />
                </div>
              ) : (
                <PhoneInput
                  inputProps={{
                    name: 'phone',
                  }}
                  country="np"
                  placeholder=""
                  specialLabel="Your Phone *"
                  containerClassName="form-group col-md-6"
                  inputClassName="form-control"
                  required={composeValidators(required, isPhoneNumber)}
                  specialLabelClassName="form-label"
                  className="col-md-6 h-50"
                  {...input}
                />
              )
            }
          </Field>
        </FormRow>
        <FormRow className="mb-3">
          <FormField
            name="userMessage"
            label="Your Message"
            containerClassName="form-group col-md-12"
            inputClassName="form-control textarea"
            textArea
            validate={required}
            labelClassName="form-label"
          />
        </FormRow>
        <FormRow className="">
          <Field
            name="userFile"
            type="file"
            render={({ input }) => (
              <FileInput
                multiple
                input={input}
                inputClassName="form-control form-file-input"
                label="Any Attachments?"
                containerClassName="form-group col-md-12"
                acceptedFileInputs={acceptedFileInputs}
                labelClassName="form-label"
              />
            )}
          />
        </FormRow>
        <button
          disabled={submitting}
          type="submit"
          className="btn btn-primary w-100 mt-4"
        >
          {submitting && (
            <FontAwesomeIcon icon={faSpinner} pulse className="me-3" />
          )}
          Request A Quote
          {!submitting && (
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          )}
        </button>
      </form>
    )}
  />
);
