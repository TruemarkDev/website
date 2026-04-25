import UnAuthenticatedRequest from "services/requests/UnAuthenticated"

const URLS = {
  APPLICANTS: `${import.meta.env.PUBLIC_LUCID_HIRE_API_URL}/applicants`,
};

class LucidHireApi extends UnAuthenticatedRequest {
  static sendCV(data) {
    return this.postFile(URLS.APPLICANTS, data);
  }
}

export default LucidHireApi;
