import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useQueryParams } from "hookrouter";

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
  url,
  post_hint,
}) => ({
  name,
  title,
  author,
  num_comments,
  thumbnail,
  hidden,
  created_utc,
  subreddit,
  url,
  post_hint,
});

export const useRedditSlice = () => {
  const bindedActions = useActions(actions);
  const { token, read, category, open } = useSelector((state) => state.reddit);
  const [queryParams] = useQueryParams();

  // form pagination query string from redux state
  const queryString = toQueryString({
    ...queryParams,
    limit: 50,
  });

  // SWR handles data fetching automatically. see https://swr.now.sh/
  const { data } = useSWR(
    () => token && `/.netlify/functions/api/${category}${queryString}`
  );

  // massage the data
  const posts =
    data && data.children.map((item) => item.data).map(leaveOnlyNecessaryData);

  const current =
    posts && (posts.find((post) => post.name === open) || posts[0]);

  return {
    posts,
    current,
    read,
    isFirstPage: data && !data.before,
    isLastPage: data && !data.after,
    actions: bindedActions,
  };
};
