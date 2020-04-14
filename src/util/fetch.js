import store from "../store";
import { actions } from "../reducers/redditSlice";
import { getToken } from "./sessionState";

const acceptOnly200 = (response) => {
  if (response.ok) {
    return response.json();
  }
  // if response is Unauthorized, refresh token
  if (response.status === 401) {
    // store.dispatch(actions.refreshToken());
  }

  return Promise.reject(response.statusText);
};

// fetch() helpers with predefined headers and validation of the response status
const request = (...args) => fetch(...args).then(acceptOnly200);

export const get = (url) =>
  request(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const post = (url, data) =>
  request(url, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const put = (url, data) =>
  request(url, {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const del = (url) =>
  request(url, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
