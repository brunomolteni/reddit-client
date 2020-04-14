import React from "react";
import { A } from "hookrouter";

import styles from "./Header.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ion-icon name="logo-reddit" title="Reddit Logo"></ion-icon>
      <h1 className={styles.title}>Just a Reddit Client™</h1>
    </div>
  );
}
