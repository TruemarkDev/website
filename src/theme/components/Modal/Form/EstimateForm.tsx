import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

import FormField, {
  FormRow,
  SelectFormField,
  CheckBoxField,
} from '@components/Form/FormField';

import {
  required,
  composeValidators,
  isEmail,
  checkBoxValidate,
} from '@utils/formValidators';

import {
  TECHNOLOGY_STACK,
  TEAM_EXPERIENCE,
  TEAM_SIZE,
  SERVICE_TYPE,
  COMMITMENT_LENGTH,
  DIGITAL_MARKETING_STACK,
} from '@constants/formConstants';

import notyService from '@services/notyService';

import NonLinearSlider from '@components/Estimate/NonLinearSlider';
import HubspotApi from '@services/api/HubspotApi';

interface RenderEstimateFormProps {
  onSubmit: (values: any) => void;
  initialValues: any;
  forId: string;
  estimateModalType: string;
}

interface EstimateFormWrapperProps {
  children?: React.ReactNode;
}

const EstimateFormWrapper: React.FC<EstimateFormWrapperProps> = ({ children }) => (
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

const RenderEstimateForm: React.FC<RenderEstimateFormProps> = ({
  onSubmit,
  initialValues,
  forId,
  estimateModalType,
}) => {
  const isDigitalMarketing = estimateModalType === 'digitalMarketing';
  const defaultRate = initialValues?.defaultRate;

  const defaultSubmit = (values: any) => {
    const { userEmail, ...formValues } = values;
    const data = {
      ...formValues,
      email: userEmail,
    };

    notyService.processInit();

    return HubspotApi.post(data)
      .then(() => {
        notyService.processSuccess();
      })
      .catch(() => {
        notyService.processFailed();
      });
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
              label="Technology Used"
              labelClassName="form-label"
              name="technologyUsed"
              forId={forId}
              containerClassName="form-group w-100"
              options={
                isDigitalMarketing ? DIGITAL_MARKETING_STACK : TECHNOLOGY_STACK
              }
              validate={composeValidators(required, checkBoxValidate)}
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
              options={TEAM_EXPERIENCE}
            />
            <SelectFormField
              name="developerTeam"
              label="Developer Team"
              labelClassName="form-label"
              inputClassName="form-control custom-select"
              containerClassName="form-group col-lg-6 mt-3 mt-lg-0"
              forId={forId}
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
                  options={SERVICE_TYPE}
                />
                <SelectFormField
                  name="lengthOfCommitment"
                  label="Length of Commitment"
                  labelClassName="form-label"
                  inputClassName="form-control custom-select"
                  containerClassName="form-group col-lg-4 mt-3 mt-lg-0"
                  forId={forId}
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
                  />
                </div>
              </FormRow>
            )}
          />

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

const EstimateForm = ({
    forId,
    forModal,
    onSubmit,
    initialValues,
    estimateModalType,
  }: any) => {
    const Wrapper = forModal ? Fragment : EstimateFormWrapper;
  
    return (
      <Wrapper>
        <RenderEstimateForm
          forId={forId}
          onSubmit={onSubmit}
          initialValues={initialValues}
          estimateModalType={estimateModalType}
        />
      </Wrapper>
    );
  };

  export default EstimateForm;