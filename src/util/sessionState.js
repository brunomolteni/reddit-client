// Helpers for managing redux state saved in session storage
import store from "../store";

export const saveStateToSession = () =>
  sessionStorage.setItem("state", JSON.stringify(store.getState()));

export const getStateFromSession = () =>
  sessionStorage.getItem("state") &&
  JSON.parse(sessionStorage.getItem("state"));

export const getToken = () => store.getState().reddit.token;
