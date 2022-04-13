import React from "react";
import { Phone } from "../types";
import styles from "./GridItem.module.scss";

type PhoneCardProps = {
  phone: Phone;
};

export const PhoneItem: React.FC<PhoneCardProps> = ({ phone }) => {
  return (
    <div className={styles.root}>
      <img alt={phone.displayName} src={phone.imgUrl} />
      <h3>{phone.displayName}</h3>
    </div>
  );
};
