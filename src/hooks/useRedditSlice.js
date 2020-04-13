import { useSelector } from "react-redux";
import { useActions } from "./";
import useSWR from "swr";

import { actions } from "../reducers/redditSlice";

export const useRedditSlice = () => {
  const { token } = useSelector((state) => state.reddit);

  const { data, mutate } = useSWR(
    () => token && `/.netlify/functions/top?token=${token}`
  );

  const bindedActions = useActions(actions);

  return [data, bindedActions];
};
