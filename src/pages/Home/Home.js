import React from "react";

import { useRedditSlice } from "../../hooks";

import Sidebar from "../../components/Sidebar";
import CurrentPost from "../../components/CurrentPost";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <CurrentPost />
    </main>
  );
}
