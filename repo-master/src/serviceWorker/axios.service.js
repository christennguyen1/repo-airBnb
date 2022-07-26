import Axios from "axios";
import { store } from "..";
import { DOMAIN, TOKEN_CYBERSOFT } from "../configUrl/configURL";
import {
  set_spinner_end,
  set_spinner_start,
} from "../redux/Actions/spinnerActions";
// import { store } from "../index";

//import { set_spinner_end, set_spinner_start } from "../redux/action/spinnerAction";
import localStorageServ from "./locaStorage.service";

class AxiosService {
  axios;
  axiosConfig;
  authService;
  constructor(params) {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAxiosConfig();
  }

  getBaseUrl() {
    return DOMAIN;
  }

  getAxiosConfig = (_token) => {
    // const token = _token ? _token : localStorageServ.accessToken.get();
    this.axiosConfig = {
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        token: localStorageServ.token.get(),
       Authorization: "bearer " + localStorageServ.token.get(),
      },
    };
  };

  removeAxiosConfig = () => {
    this.axiosConfig = {
      headers: {
        iKeapy: ``,
        "Content-Type": "application/json",
      },
    };
  };

  getMethod(url, loading = true) {
    return this.handleFlow(this.axios.get(url, this.axiosConfig), loading);
  }

  postMethod(url, data, loading = true) {
    return this.handleFlow(
      this.axios.post(url, data, this.axiosConfig),
      loading
    );
  }

  putMethod(url, data, loading = true) {
    return this.handleFlow(
      this.axios.put(url, data, this.axiosConfig),
      loading
    );
  }

  patchMethod(url, data, loading = true) {
    return this.handleFlow(
      this.axios.patch(url, data, this.axiosConfig),
      loading
    );
  }

  deleteMothod(url, loading = true) {
    return this.handleFlow(this.axios.delete(url, this.axiosConfig), loading);
  }

  handleFlow(method, loading = true) {
    store.dispatch(set_spinner_start());

    return new Promise((resolve, reject) => {
      method
        .then((res) => {
          store.dispatch(set_spinner_end());
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          store.dispatch(set_spinner_end());
          this.handleError(err);
          reject({
            err: err,
          });
        });
    });
  }

  handleError = (err) => {
    const status = err.response?.status;
    switch (
      status
      // case 400:
      // case 401:
      // case 403:
      //   window.location.assign("/lms");
      //   break;
      // default:
      //   break;
    ) {
    }
  };
  //
  axiosInstance = (req) => {
    this.axios(req, this.axiosConfig);
  };
}

const AxiosServ = new AxiosService();
export default AxiosServ;
