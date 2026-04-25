import React from "react";
import { Toaster } from "react-hot-toast";
import { Form } from "react-final-form";
import FormField, { FormRow } from "components/Form/FormField";
import { composeValidators, required, isEmail } from "utils/formValidators";
import { createFormFieldsSubmissionData } from "utils/formSubmission";
import CrmApi from "services/api/CrmApi";
import ToastService from "services/toastService";

const REQUEST_SOURCE = "Agentic development subscription request";

const AgenticDevelopmentSubscribeForm = () => {
  const handleSubmit = async (values, form) => {
    const formData = createFormFieldsSubmissionData({
      first_name: values.name,
      email: values.email,
      company: values.company,
      source: REQUEST_SOURCE,
      service_interest: "Agentic Development",
      message: `${REQUEST_SOURCE}\n\nCompany: ${values.company || "Not provided"}\n\n${values.message}`,
    });

    const result = await ToastService.processPromise(
      CrmApi.submitContactForm(formData),
      {
        loadingMessage:
          "Please wait ..... <br /> Your subscription request is being processed.",
        successMessage:
          "Thank you! We have received your agentic development request.",
        errorMessage: "There seems to be some error. Please try again!",
        reloadPage: false,
      },
    );

    if (result) {
      form.restart();
    }
  };

  return (
    <div className="agentic-subscribe-form">
      <Toaster position="top-right" />
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormRow className="mb-3">
              <FormField
                name="name"
                label="Name"
                placeholder="Your name"
                containerClassName="form-group col-md-6 mb-3 mb-md-0"
                inputClassName="form-control"
                labelClassName="form-label"
                errorClassName="mt-2 small"
                validate={required}
              />
              <FormField
                name="email"
                label="Email"
                placeholder="you@company.com"
                containerClassName="form-group col-md-6"
                inputClassName="form-control"
                labelClassName="form-label"
                errorClassName="mt-2 small"
                validate={composeValidators(required, isEmail)}
              />
            </FormRow>

            <FormRow className="mb-3">
              <FormField
                name="company"
                label="Company"
                placeholder="Company name"
                containerClassName="form-group col-md-12"
                inputClassName="form-control"
                labelClassName="form-label"
                errorClassName="mt-2 small"
              />
            </FormRow>

            <FormRow className="mb-4">
              <FormField
                name="message"
                label="Project interest"
                placeholder="Tell us what you want agents and engineers to help ship."
                containerClassName="form-group col-md-12"
                inputClassName="form-control p-3"
                labelClassName="form-label"
                errorClassName="mt-2 small"
                rows={5}
                textArea
                validate={required}
              />
            </FormRow>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={submitting}
            >
              {submitting
                ? "Submitting request..."
                : "Request subscription access"}
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default AgenticDevelopmentSubscribeForm;
