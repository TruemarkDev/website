import UnAuthenticatedRequestService from '@services/requests/UnAuthenticated';

let URLS: {INDEX: String};

if (typeof window !== 'undefined' && window) {
const contactApiUrl = localStorage.getItem("contactApiUrl");

  if (contactApiUrl) {
    URLS = {
      INDEX: contactApiUrl,
    };
  }
}

class ContactApi {
  static post(data: any) {
    return UnAuthenticatedRequestService.post(URLS.INDEX, data);
  }

  static postFile(data: any) {
    return UnAuthenticatedRequestService.postFile(URLS.INDEX, data);
  }
}

export default ContactApi;
