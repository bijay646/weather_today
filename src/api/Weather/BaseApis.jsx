import axios from "axios";

export const DEFAULT_HEADERS = {
  Accept: "application/json",
};

class BaseRequest {
  static headers(headers) {
    return { headers: headers || DEFAULT_HEADERS };
  }

  static get(url) {
    return axios.get(url, this.headers());
  }
}

export default BaseRequest;
