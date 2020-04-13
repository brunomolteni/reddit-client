import { useSelector } from "react-redux";
import { useActions } from "../hooks";

import { actions } from "../reducers/uiSlice";

export const useUiSlice = () => {
  const state = useSelector((state) => state.ui);
  const bindedActions = useActions(actions);

  return [state, bindedActions];
};
