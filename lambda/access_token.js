import fetch from "node-fetch";
import { encode } from "base-64";

const {
  REDDIT_CLIENT_ID,
  REDDIT_CLIENT_SECRET,
  REDDIT_USER,
  REDDIT_PASSWORD,
} = process.env;
const API_ENDPOINT = "https://www.reddit.com/api/v1/access_token";

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Setup reddit Auth
  const body = new URLSearchParams();
  body.append("grant_type", "password");
  body.append("username", REDDIT_USER);
  body.append("password", REDDIT_PASSWORD);
  body.append("scope", "read");

  const headers = {
    Authorization:
      "Basic " + encode(REDDIT_CLIENT_ID + ":" + REDDIT_CLIENT_SECRET),
  };

  // fetch the access token
  return fetch(API_ENDPOINT, {
    method: "POST",
    body,
    headers,
  })
    .then((response) => response.json())
    .then(({ access_token }) => ({
      statusCode: 200,
      body: JSON.stringify(access_token),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify(String(error)),
    }));
};
