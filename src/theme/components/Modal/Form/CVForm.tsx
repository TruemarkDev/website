import React from 'react';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

import FormField, { FormRow } from '@components/Form/FormField';
import { FileInput } from '@components/Form/FileInput';

import {
  required,
  composeValidators,
  isNameValue,
  isEmail,
  isPhoneNumber,
} from '@utils/formValidators';

import ContactApi from '@services/api/ContactApi';
import notyService from '@services/notyService';

const acceptedFileInputs = [
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'application/pdf',
  'image/*',
];

const CVForm = () => {
  const onSubmit = async (values: any) => {
    const {
      firstName: first_name,
      lastName: last_name,
      email,
      phone,
      userMessage: message,
      userFileCoverLetter: fileCL,
      userFileCV: fileCV,
    } = values;
    const userData = {
      first_name,
      last_name,
      email,
      phone,
      message,
    };
    const formData = new FormData();

    if (fileCV) {
      formData.append('file[]', fileCL);
      formData.append('file[]', fileCV);
    }
    const keys = Object.keys(userData);
    keys.forEach((key) => formData.append(`${key}`, userData[key]));

    notyService.processInit();
    return ContactApi.postFile(formData)
      .then(() => {
        notyService.processSuccess();
      })
      .catch(() => {
        notyService.processFailed();
      });
  };

  return <CVApplyForm onSubmit={onSubmit} />;
};

export default CVForm;

interface CVApplyFormProps {
  onSubmit: (values: any) => void;
}

const CVApplyForm: React.FC<CVApplyFormProps> = ({ onSubmit }) => (
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
            containerClassName="form-group col-md-6"
            inputClassName="form-control"
            validate={composeValidators(required, isEmail)}
            labelClassName="form-label"
          />
          <FormField
            name="phone"
            label="Your Phone"
            containerClassName="form-group col-md-6"
            inputClassName="form-control"
            validate={composeValidators(required, isPhoneNumber)}
            labelClassName="form-label"
          />
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
            name="userFileCoverLetter"
            type="file"
            render={({ input }) => (
              <FileInput
                input={input}
                inputClassName="form-control form-file-input"
                label="Upload cover letter"
                containerClassName="form-group col-md-12 mb-3"
                acceptedFileInputs={acceptedFileInputs}
                labelClassName="form-label"
              />
            )}
          />
          <Field
            name="userFileCV"
            type="file"
            render={({ input }) => (
              <FileInput
                input={input}
                inputClassName="form-control form-file-input"
                label="Upload CV"
                containerClassName="form-group col-md-12 mb-3"
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
          Send
          {!submitting && (
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          )}
        </button>
      </form>
    )}
  />
);
