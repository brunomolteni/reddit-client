import React from "react";

import { useRedditSlice } from "../../hooks";

import Sidebar from "../../components/Sidebar";

export default function Home() {
  const { state } = useRedditSlice();

  return (
    <div>
      <Sidebar />
    </div>
  );
}
