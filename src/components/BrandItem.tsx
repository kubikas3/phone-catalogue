import React from "react";
import { Link } from "react-router-dom";
import { addItem, removeItem, selectItems } from "../redux/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BrandOption } from "../types";
import styles from "./BrandItem.module.scss";

type BrandItemProps = {
  brand: BrandOption;
};

export const BrandItem: React.FC<BrandItemProps> = ({
  brand: { id, displayName, displayImageUrl },
}) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const favorite = items.includes(id);

  const handleFavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(favorite ? removeItem(id) : addItem(id));
  };

  return (
    <div className={styles.container}>
      <Link className={styles.header} to={`/phones/${id}`}>
        <img className={styles.image} alt={displayName} src={displayImageUrl} />
        <h3>{displayName}</h3>
        <button onClick={handleFavClick}>
          {favorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </Link>
    </div>
  );
};
