import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers/rootReducer";

import { getStateFromSession } from "./util/sessionState";

// Create store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: getStateFromSession() || {},
});

// Setup redux hot reloading
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers/rootReducer", () => {
    const newRootReducer = require("./reducers/rootReducer").rootReducer;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
