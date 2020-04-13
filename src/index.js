import React from "react";
import { render } from "react-dom";

const renderApp = () => {
  const App = require("./App").default;

  render(<App />, document.getElementById("app"));
};

renderApp();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", renderApp);
}
