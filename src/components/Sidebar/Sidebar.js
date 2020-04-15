import React, { useEffect } from "react";
import c from "classnames";

import styles from "./Sidebar.css";

import { useRedditSlice, useUiSlice } from "../../hooks";

import ListItem from "./ListItem";
import Pagination from "./Pagination";
import LoadingIndicator from "../LoadingIndicator";

export default function Sidebar() {
  const { posts, read, actions } = useRedditSlice();
  const [{ sidebar }] = useUiSlice();

  // When we first show the list, mark the first post as read
  useEffect(() => {
    posts &&
      posts.length &&
      !read.includes(posts[0].name) &&
      actions.setAsRead(posts[0].name);
  }, [posts]);

  const openPost = (post) => {
    actions.openPost(post.name);
    actions.setAsRead(post.name);
  };

  return (
    <>
      <div className={c(styles.sidebar, { "sidebar--open": sidebar })}>
        {!posts && <LoadingIndicator />}

        {posts &&
          posts.map((post) => (
            <ListItem
              key={post.name}
              post={post}
              isRead={read.includes(post.name)}
              open={openPost}
            />
          ))}
      </div>
      <Pagination />
    </>
  );
}
