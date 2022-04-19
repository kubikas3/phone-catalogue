import React from "react";
import { Phone } from "../types";
import styles from "./PhoneItem.module.scss";

type PhoneCardProps = {
  phone: Phone;
};

export const PhoneItem: React.FC<PhoneCardProps> = ({ phone }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt={phone.displayName}
        src={phone.imgUrl}
      />
      <div className={styles.colors}>
        {phone.colorOptions.length > 0 &&
          phone.colorOptions.map((color) => (
            <div
              className={styles.colorItem}
              style={{ backgroundColor: color.hex }}
            />
          ))}
      </div>
      <div className={styles.chipContainer}>
        {phone.internalMemoryGB.map((imem) => (
          <div className={styles.chip}>{imem} GB</div>
        ))}
      </div>
      <h3 className={styles.header}>{phone.displayName}</h3>
    </div>
  );
};
