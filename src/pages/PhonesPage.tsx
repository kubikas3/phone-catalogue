import React from "react";
import { useParams } from "react-router-dom";
import { PhoneItem } from "../components/PhoneItem";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPhonesAsync, selectByBrand } from "../redux/phoneSlice";
import { Grid } from "../components/Grid";

type Params = {
  brand: string;
};

export const PhonesPage: React.FC = () => {
  const { brand } = useParams<Params>();

  const dispatch = useAppDispatch();
  const phones = useAppSelector((state) => selectByBrand(state, brand));
  const loading = useAppSelector((state) => state.phones.loading);

  React.useEffect(() => {
    (() => {
      dispatch(fetchPhonesAsync());
    })();
  }, []);

  return (
    <>
      {loading && "Loading..."}
      <Grid>
        {phones.map((phone) => (
          <PhoneItem key={phone.contentKey} phone={phone} />
        ))}
      </Grid>
    </>
  );
};
