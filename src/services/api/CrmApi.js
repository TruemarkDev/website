import UnAuthenticatedRequest from 'services/requests/UnAuthenticated';

const URLS = {
  FORM_SUBMISSIONS: `${process.env.CRM_API_URL}/forms/:formId/submissions`,
};

class CrmApi extends UnAuthenticatedRequest {
  static submitFormFields(formId, data) {
    return this.postFile(URLS.FORM_SUBMISSIONS.replace(':formId', formId), data);
  }

  static submitContactForm(data) {
    return this.submitFormFields(process.env.CRM_CONTACT_FORM_ID, data)
  }

  static submitQuoteForm(data) {
    return this.submitFormFields(process.env.CRM_QUOTE_FORM_ID, data);
  }

  static submitEstimationForm(data) {
    return this.submitFormFields(process.env.CRM_ESTIMATION_FORM_ID, data);
  }
}

export default CrmApi;
