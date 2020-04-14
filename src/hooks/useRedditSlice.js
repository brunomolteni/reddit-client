import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";

import { useActions } from "./";
import { toQueryString } from "../util";
import { actions } from "../reducers/redditSlice";

const leaveOnlyNecessaryData = ({
  name,
  title,
  author,
  num_comments,
  thumbnail,
  hidden,
  created_utc,
  subreddit,
}) => ({
  name,
  title,
  author,
  num_comments,
  thumbnail,
  hidden,
  created_utc,
  subreddit,
});

export const useRedditSlice = () => {
  const { token, read, category, page } = useSelector((state) => state.reddit);

  const queryString = toQueryString({
    ...page,
    limit: 50,
  });

  const { data } = useSWR(
    () => token && `/.netlify/functions/api/${category}${queryString}`
  );

  const bindedActions = useActions(actions);

  const posts =
    data && data.children.map((item) => item.data).map(leaveOnlyNecessaryData);

  return {
    posts,
    read,
    isFirstPage: data && !data.before,
    isLastPage: data && !data.after,
    actions: bindedActions,
  };
};
