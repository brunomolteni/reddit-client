import React from "react";

import { useUiSlice } from "../../hooks";

export default function Home() {
  const [ui, actions] = useUiSlice();

  return <div>Home is working!</div>;
}
