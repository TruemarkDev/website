import BaseRequest from 'services/requests/Base';

const URLS = {
  INDEX: 'https://gitconnected.com/v1/portfolio/:username',
};

class PortfolioApi extends BaseRequest {
  /**
   * fetch single portfolio by its username
   *
   * @param {string} username username for portfolio
   */
  static fetchOne(username) {
    const fetchOneUrl = URLS.INDEX.replace(':username', username);

    return this.get(fetchOneUrl);
  }
}

export default PortfolioApi;
