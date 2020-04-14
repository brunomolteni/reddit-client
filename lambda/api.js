import fetch from "node-fetch";

import { toQueryString } from "../src/util/queryStrings";

// fetch top posts using access token from query string
exports.handler = async (event) => {
  const API_ENDPOINT = event.path.replace("/.netlify/functions/api/", "");
  const API_URL = `https://oauth.reddit.com/${API_ENDPOINT}${toQueryString(
    event.queryStringParameters
  )}`;

  return fetch(API_URL, {
    headers: {
      Authorization: event.headers.authorization,
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      else
        throw {
          statusCode: response.status,
          body: JSON.stringify(response.statusText),
        };
    })
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => {
      if (error.statusCode) return error;
      else
        return {
          statusCode: 422,
          body: JSON.stringify(String(error)),
        };
    });
};
