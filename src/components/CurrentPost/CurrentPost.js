import React from "react";
import dayjs from "dayjs";

import styles from "./CurrentPost.css";

import { useRedditSlice } from "../../hooks";

import LoadingIndicator from "../LoadingIndicator";

export default function CurrentPost() {
  const { current } = useRedditSlice();

  let image = current && current.post_hint === "image" ? current.url : false;

  const hasThumbnail =
    current && !["default", "self", "nsfw"].includes(current.thumbnail);

  return !current ? (
    <LoadingIndicator />
  ) : (
    <div className={styles.post}>
      <div className={styles.info}>
        <span>{current.author} </span>
        <span>{dayjs.unix(current.created_utc).fromNow()} </span>
      </div>

      {!image && (
        <a href={current.url}>
          <h2>{current.title}</h2>
        </a>
      )}
      {hasThumbnail && !image && (
        <img className={styles.image} src={current.thumbnail} />
      )}

      {image && <h2>{current.title}</h2>}
      {image && <img className={styles.image} src={image} />}
    </div>
  );
}
