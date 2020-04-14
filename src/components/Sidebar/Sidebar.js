import React, { useEffect } from "react";
import styles from "./Sidebar.css";

import { useRedditSlice } from "../../hooks";

import ListItem from "./ListItem";

export default function Sidebar() {
  const { posts, state, actions } = useRedditSlice();

  const { read, hidden } = state;

  useEffect(() => {
    posts && actions.setAsRead(posts[0].data.name);
  }, [posts]);

  return (
    <div className={styles.sidebar}>
      {!posts && <p>...Loading</p>}
      {posts &&
        posts.map((post) => (
          <ListItem
            key={post.data.name}
            post={post.data}
            isRead={read.includes(post.data.name)}
          />
        ))}
    </div>
  );
}
