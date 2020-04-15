import React from "react";
import { useQueryParams, navigate } from "hookrouter";
import c from "classnames";

import styles from "./Pagination.css";

import { useRedditSlice } from "../../../hooks";

export default function Pagination() {
  const { posts, read, isFirstPage, isLastPage } = useRedditSlice();
  const [{ count = 0 }, setQueryParams] = useQueryParams();

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
    <div className="pagination">
      <div
        onClick={prevPage}
        className={c("sidebar-pagination", {
          "--disabled": !posts || isFirstPage,
        })}
      >
        <ion-icon name="arrow-back-circle" size="large" />
      </div>
      {posts && (
        <p>
          {posts.filter((post) => read.includes(post.name)).length} of{" "}
          {posts.length} Read
        </p>
      )}
      <div
        onClick={nextPage}
        className={c("sidebar-pagination", {
          "--disabled": !posts || isLastPage,
        })}
      >
        <ion-icon name="arrow-forward-circle" size="large" />
      </div>
    </div>
  );
}
