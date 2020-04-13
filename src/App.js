import React from "react";
import { useRoutes } from "hookrouter";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

import store from "./store";
import { routes } from "./routes";
import { get } from "./util";

import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Setup App component with store provider and routing
const App = () => {
  const activeRoute = useRoutes(routes);
  const notFound = <NotFound />;

  return (
    <SWRConfig
      value={{
        dedupingInterval: 10000,
        fetcher: get,
      }}
    >
      <Provider store={store}>
        <Header />
        <main>{activeRoute || notFound}</main>
      </Provider>
    </SWRConfig>
  );
};

App.displayName = "App";

export default App;
