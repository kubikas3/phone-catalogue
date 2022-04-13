import React from "react";
import styles from "./Grid.module.scss";

export const Grid: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
