import React from "react";

import { useRedditSlice } from "../../hooks";

import Sidebar from "../../components/Sidebar";

export default function Home() {
  const { posts, actions } = useRedditSlice();

  return (
    <div>
      <Sidebar />
    </div>
  );
}
