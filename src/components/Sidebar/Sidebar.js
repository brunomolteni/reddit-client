import React, { useEffect } from "react";
import styles from "./Sidebar.css";

import { useRedditSlice } from "../../hooks";

import ListItem from "./ListItem";

export default function Sidebar() {
  const { posts, read, actions } = useRedditSlice();

  // When we first show the list, mark the first post as read
  useEffect(() => {
    posts && !read.includes(posts[0].name) && actions.setAsRead(posts[0].name);
  }, [posts]);

  return (
    <div className={styles.sidebar}>
      {!posts && <p>...Loading</p>}
      {posts &&
        posts.map((post) => (
          <ListItem
            key={post.name}
            post={post}
            isRead={read.includes(post.name)}
          />
        ))}
    </div>
  );
}
