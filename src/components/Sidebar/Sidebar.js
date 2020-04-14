import React, { useEffect } from "react";
import { useQueryParams, navigate } from "hookrouter";
import styles from "./Sidebar.css";
import c from "classnames";

import { useRedditSlice } from "../../hooks";

import ListItem from "./ListItem";

export default function Sidebar() {
  const { posts, read, isFirstPage, isLastPage, actions } = useRedditSlice();
  const [{ count = 0 }, setQueryParams] = useQueryParams();

  // When we first show the list, mark the first post as read
  useEffect(() => {
    posts &&
      posts.length &&
      !read.includes(posts[0].name) &&
      actions.setAsRead(posts[0].name);
  }, [posts]);

  const prevPage = () =>
    !isFirstPage &&
    setQueryParams({
      before: posts.shift().name, // id from first post
      after: "", // clear
    });

  const nextPage = () =>
    !isLastPage &&
    setQueryParams({
      after: posts.pop().name, // id from last post
      before: "", // clear
      count: count + 50, // total count of visited items
    });

  return (
    <div className={styles.sidebar}>
      {!posts && <ion-icon name="logo-reddit" title="Loading"></ion-icon>}
      {posts &&
        posts.map((post) => (
          <ListItem
            key={post.name}
            post={post}
            isRead={read.includes(post.name)}
          />
        ))}
      {posts && (
        <div className={styles.pagination}>
          <div
            onClick={prevPage}
            className={c("sidebar-pagination", { "--disabled": isFirstPage })}
          >
            <ion-icon name="arrow-back-circle" size="large" />
          </div>
          <div
            onClick={nextPage}
            className={c("sidebar-pagination", { "--disabled": isLastPage })}
          >
            <ion-icon name="arrow-forward-circle" size="large" />
          </div>
        </div>
      )}
    </div>
  );
}
