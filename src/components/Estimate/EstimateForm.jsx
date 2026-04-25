import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

import FormField, {
  FormRow,
  SelectFormField,
  CheckBoxField,
} from 'components/Form/FormField';

import {
  required,
  composeValidators,
  isEmail,
  checkBoxValidate,
} from 'utils/formValidators';
import {
  TECHNOLOGY_STACK,
  TEAM_EXPERIENCE,
  TEAM_SIZE,
  SERVICE_TYPE,
  COMMITMENT_LENGTH,
  DIGITAL_MARKETING_STACK,
} from 'constants/formConstants';
import CrmApi from 'services/api/CrmApi';

import NonLinearSlider from './NonLinearSlider';
import { createFormFieldsSubmissionData } from 'utils/formSubmission';
import { FileInput } from 'components/Form/FileInput';
import ToastService from 'services/toastService';

const EstimateFormWrapper = ({ children }) => (
  <div className="container mb-5">
    <div className="row">
      <div className="col-md-12 how-it-work shadow-lg mb-5">
        <div className="header text-center">
          <div className="header-tag">Kickstart Your Project with</div>
          <h2>Free Project Estimation</h2>
        </div>
        <div className="content mt-5">{children}</div>
      </div>
    </div>
  </div>
);

const acceptedFileInputs = [
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'application/pdf',
  'image/*',
];

const EstimateForm = ({
  onSubmit,
  initialValues,
  forId,
  estimateModalType,
}) => {
  const isDigitalMarketing = estimateModalType === 'digitalMarketing';
  const defaultRate = initialValues?.defaultRate;

  const defaultSubmit = (values) => {
    const {
      userEmail,
      companyName,
      platform,
      technologyUsed,
      teamExperience,
      developerTeam,
      trialPeriod,
      serviceRequired,
      lengthOfCommitment,
      budget,
      customNote,
      attachments,
    } = values;

    const data = {
      email: userEmail,
      company_name: companyName,
      platforms: platform,
      technologies_used: technologyUsed,
      team_experience: teamExperience,
      developer_team: developerTeam,
      trial_period: trialPeriod,
      service_required: serviceRequired,
      length_of_commitment: lengthOfCommitment,
      min_budget: budget.lowerValue,
      max_budget: budget.upperValue,
      message: customNote,
    };

    const formData = createFormFieldsSubmissionData(data, attachments);

    ToastService.processPromise(CrmApi.submitEstimationForm(formData));
  };

  return (
    <Form
      initialValues={{
        ...initialValues,
      }}
      onSubmit={onSubmit || defaultSubmit}
      render={({ handleSubmit, submitting }) => (
        <form name={forId} className="mt-4" onSubmit={handleSubmit}>
          <FormRow className="mb-3">
            <FormField
              name="companyName"
              forId={forId}
              containerClassName="form-group col-lg-5"
              inputClassName="form-control-lg form-control"
              placeholder="Apple Inc."
              label="Company / Name"
              labelClassName="form-label"
              validate={required}
            />
            <FormField
              name="userEmail"
              forId={forId}
              containerClassName="form-group col-lg-4 mt-3 mt-lg-0"
              inputClassName="form-control-lg form-control"
              placeholder="johndoe@xyz.com"
              label="Your Email"
              labelClassName="form-label"
              validate={composeValidators(required, isEmail)}
            />
            <CheckBoxField
              label="Platform"
              labelClassName="form-label"
              className="pr-3"
              name="platform"
              forId={forId}
              containerClassName="form-group col-lg-3 mt-3 mt-lg-0"
              optionsContainerClassName="checklist d-flex align-items-center"
              options={[
                { label: 'Mobile', value: 'mobile' },
                { label: 'Web', value: 'web' },
              ]}
              validate={composeValidators(required, checkBoxValidate)}
            />
          </FormRow>
          <FormRow className="mb-3">
            <SelectFormField
              className="custom__form--field"
              label="Technology Used"
              labelClassName="form-label"
              name="technologyUsed"
              forId={forId}
              containerClassName="form-group w-100"
              optionsContainerClassName="checklist d-flex flex-wrap"
              options={
                isDigitalMarketing ? DIGITAL_MARKETING_STACK : TECHNOLOGY_STACK
              }
              validate={composeValidators(required, checkBoxValidate)}
              simpleValue
              isMulti
            />
          </FormRow>
          <FormRow className="mb-3">
            <SelectFormField
              name="teamExperience"
              label="Experience"
              labelClassName="form-label"
              inputClassName="form-control custom-select"
              containerClassName="form-group col-lg-6"
              forId={forId}
              // validate={required}
              simpleValue
              options={TEAM_EXPERIENCE}
            />
            <SelectFormField
              name="developerTeam"
              label="Developer Team"
              labelClassName="form-label"
              inputClassName="form-control custom-select"
              containerClassName="form-group col-lg-6 mt-3 mt-lg-0"
              forId={forId}
              // validate={required}
              simpleValue
              options={TEAM_SIZE}
            />
          </FormRow>

          <Field
            name="budget"
            render={({ input }) => (
              <FormRow className="mb-3">
                <SelectFormField
                  name="trialPeriod"
                  label="Trial period/test task"
                  labelClassName="form-label"
                  inputClassName="form-control custom-select"
                  containerClassName="form-group col-lg-4"
                  forId={forId}
                  validate={required}
                  simpleValue
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                />
                <SelectFormField
                  name="serviceRequired"
                  label="Service"
                  labelClassName="form-label"
                  inputClassName="form-control custom-select"
                  containerClassName="form-group col-lg-4 mt-3 mt-lg-0"
                  forId={forId}
                  // validate={required}
                  simpleValue
                  options={SERVICE_TYPE}
                />
                <SelectFormField
                  name="lengthOfCommitment"
                  label="Length of Commitment"
                  labelClassName="form-label"
                  inputClassName="form-control custom-select"
                  containerClassName="form-group col-lg-4 mt-3 mt-lg-0"
                  forId={forId}
                  // validate={required}
                  simpleValue
                  options={COMMITMENT_LENGTH}
                />
              </FormRow>
            )}
          />

          <Field
            name="budget"
            render={({ input }) => (
              <FormRow className="mb-3">
                <div className="form-group col-md-12">
                  <label htmlFor="budgetPerHour" className="form-label mb-3">
                    Budget per hour
                  </label>
                  <NonLinearSlider
                    defaultValues={defaultRate}
                    onChange={input.onChange}
                    className="custom-range-slider"
                  />
                </div>
              </FormRow>
            )}
          />

          <FormRow className="mb-3">
            <FormField
              name="customNote"
              containerClassName="form-group"
              inputClassName="form-control p-3"
              rows={3}
              placeholder="Please write your custom note here"
              label="Notes"
              labelClassName="form-label"
              textArea
              validate={required}
              forId={forId}
            />
          </FormRow>

          <Field
            name="attachments"
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
            <button
              disabled={submitting}
              type="submit"
              className="btn btn-primary w-100 mt-5 mx-auto"
            >
              {submitting && (
                <FontAwesomeIcon icon={faSpinner} pulse className="me-3" />
              )}
              Done
              {!submitting && (
                <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
              )}
            </button>
          </div>
        </form>
      )}
    />
  );
};

const renderEstimateForm = ({
  forId,
  forModal,
  onSubmit,
  initialValues,
  estimateModalType,
}) => {
  const Wrapper = forModal ? Fragment : EstimateFormWrapper;

  return (
    <Wrapper>
      <EstimateForm
        forId={forId}
        onSubmit={onSubmit}
        initialValues={initialValues}
        estimateModalType={estimateModalType}
      />
    </Wrapper>
  );
};

export default renderEstimateForm;
