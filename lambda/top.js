import fetch from "node-fetch";

const API_ENDPOINT = "https://oauth.reddit.com/top";

exports.handler = async (event, context) => {
  console.log(event.queryStringParameters.token);

  return fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${event.queryStringParameters.token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data.children),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify(String(error)),
    }));
};
