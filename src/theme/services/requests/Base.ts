import axios from 'axios';

export const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const FORM_DATA_HEADERS = {
  'Content-Type': 'multipart/form-data',
};

class BaseRequest {
  static _headers() {
    return { headers: DEFAULT_HEADERS };
  }

  static get(url: string) {
    return axios.get(url, this._headers());
  }

  static post(url: string, data: any) {
    return axios.post(url, data, this._headers());
  }

  static patch(url: string, data: any) {
    return axios.patch(url, data, this._headers());
  }

  static postFile(url: string, data: any) {
    return axios.post(url, data, this._headers(FORM_DATA_HEADERS));
  }

  static delete(url: string) {
    return axios.delete(url, this._headers());
  }
}

export default BaseRequest;
