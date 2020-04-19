import React from "react";
import { useUiSlice } from "../../hooks";

import styles from "./Header.css";

export default function Header() {
  const [{ sidebar }, { toggleSidebar }] = useUiSlice();
  return (
    <div className={styles.header}>
      <ion-icon name="logo-reddit" title="Reddit Logo"></ion-icon>
      <h1 className={styles.title}>Just a Reddit Client™</h1>
      <div className={styles.menu} onClick={() => toggleSidebar()}>
        {!sidebar && <ion-icon name="menu" size="large"></ion-icon>}
        {sidebar && <ion-icon name="newspaper-outline" size="large"></ion-icon>}
      </div>
    </div>
  );
}
