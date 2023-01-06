import axios from 'axios';
import axiosRetry from 'axios-retry';
import { url } from '../constants';

const axiosInstance = axios.create({
  baseURL: url.API_BASE_URL,
  withCredentials: true,
  headers: {
    Pragma: 'no-cache',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
  },
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: function (retryNumber = 0) {
    const delay = Math.pow(2, retryNumber) * 1000;
    const randomMs = 1000 * Math.random();
    return delay + randomMs;
  },
});

/**
 * Handels incomimg requests
 * @param {Object} request
 */
const requestHandler = (config) => {
  if (isHandlerEnabled(config)) {
    console.log('REQUEST: ', config);
  }

  return config;
};

axiosInstance.interceptors.request.use((config) => requestHandler(config));

/**
 * Handels response
 * @param {Object} response
 */
const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    console.log('SUCCESS: ', error);
  }

  return response.data;
};

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    console.log('ERROR: ', error);
  }

  return Promise.reject({ ...error });
};

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

export const http = axiosInstance;
