import BaseRequest, { DEFAULT_HEADERS } from './Base';

class HubspotAuthenticatedRequestService extends BaseRequest {
  static _authenticatedHeaders() {
    const _auth_header = {
      'Content-Type': 'multipart/form-data',
    };
    return { ...DEFAULT_HEADERS, ..._auth_header };
  }

  static _headers() {
    return { headers: this._authenticatedHeaders() };
  }
}

export default HubspotAuthenticatedRequestService;
