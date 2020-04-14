import React from "react";
import { render } from "react-dom";

import store from "./store";
import { actions } from "./reducers/redditSlice";
import { saveStateToSession } from "./util";

const renderApp = () => {
  const App = require("./App").default;

  render(<App />, document.getElementById("app"));
};

// If there's no token saved, fetch the access token
if (!store.getState().reddit.token) {
  store.dispatch(actions.refreshToken());
}

// before closing the window, save the state to session storage
window.onbeforeunload = function () {
  saveStateToSession();
};

renderApp();

// enable hot reload
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", renderApp);
}
