import HubspotAuthenticatedRequestService from 'services/requests/Hubspot';

const URLS = {
  INDEX: '/api/hubspotContact',
};

class HubspotApi {
  static post(data: any) {
    return HubspotAuthenticatedRequestService.post(URLS.INDEX, data);
  }

  static postFile(data: any) {
    return HubspotAuthenticatedRequestService.postFile(URLS.INDEX, data);
  }
}

export default HubspotApi;
