import fetch from "node-fetch";

const API_ENDPOINT = "https://oauth.reddit.com/top";

// fetch top posts using access token from query string
exports.handler = async (event) => {
  return fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${event.queryStringParameters.token}`,
    },
  })
    .then((response) => response.json())
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data.children),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify(String(error)),
    }));
};
