import UnAuthenticatedRequestService from '../requests/UnAuthenticated';

const URLS = {
  INDEX: 'https://invoice-api.truemark.com.np/api/contact',
};

class ContactApi {
  static post(data) {
    return UnAuthenticatedRequestService.post(URLS.INDEX, data);
  }

  static postFile(data) {
    return UnAuthenticatedRequestService.postFile(URLS.INDEX, data);
  }
}

export default ContactApi;
