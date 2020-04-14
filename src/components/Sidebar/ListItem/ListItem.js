import React from "react";
import c from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import styles from "./ListItem.css";

dayjs.extend(relativeTime);

export default function ListItem({ post, isRead, open }) {
  return (
    <div
      className={c("list-item", { "--read": isRead })}
      onClick={() => open(post)}
    >
      {post.thumbnail &&
        !["default", "self", "nsfw"].includes(post.thumbnail) && (
          <img src={post.thumbnail} className={styles.thumbnail} />
        )}
      <div className={styles.info}>
        <span className={styles.author}>{post.author}</span>
        <span>{dayjs.unix(post.created_utc).fromNow()}</span>
        <span>{post.num_comments} comments</span>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
    </div>
  );
}
