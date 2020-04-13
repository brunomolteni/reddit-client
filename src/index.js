import React from "react";
import { render } from "react-dom";

import { post } from "./util";
import store from "./store";
import { actions } from "./reducers/redditSlice";

const API_ENDPOINT = "https://oauth.reddit.com/top";

const renderApp = () => {
  const App = require("./App").default;

  render(<App />, document.getElementById("app"));
};

if (!sessionStorage.getItem("token")) {
  post("/.netlify/functions/access_token").then((token) => {
    sessionStorage.setItem("token", token);
    store.dispatch(actions.setToken(token));
  });
}

renderApp();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", renderApp);
}
