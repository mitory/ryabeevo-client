import axios from 'axios';
import config from './config'

const instance = axios.create({
    baseURL: config.apiURL,
    timeout: 5000,
    // withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
});

  
export default instance;