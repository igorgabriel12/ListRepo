import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: false,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

if (__DEV__) {
  api.interceptors.response.use(
    AxiosLogger.responseLogger,
    AxiosLogger.errorLogger,
  );
}

export default api;
