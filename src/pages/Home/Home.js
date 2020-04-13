import React from "react";

import { useRedditSlice } from "../../hooks";

export default function Home() {
  const [data, actions] = useRedditSlice();

  return (
    <div>
      {!data && <p>...Loading</p>}
      {data &&
        data.map((item) => <p key={item.data.name}>{item.data.title}</p>)}
    </div>
  );
}
