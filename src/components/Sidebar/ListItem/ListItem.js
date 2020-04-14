import React from "react";
import c from "classnames";

import styles from "./ListItem.css";

export default function ListItem({ post, isRead, open }) {
  return (
    <div
      className={c(styles.item, { "--read": isRead })}
      onClick={() => open(post)}
    >
      {post.thumbnail && (
        <img src={post.thumbnail} className={styles.thumbnail} />
      )}
      <div className={styles.info}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.author}>{post.author}</p>
        <span className={styles.comments}>{post.num_comments} comments</span>
      </div>
    </div>
  );
}
