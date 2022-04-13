import React from "react";
import { fetchBrandsAsync, selectOptions } from "../redux/brandsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BrandItem } from "../components/BrandItem";
import { Grid } from "../components/Grid";

export const BrandsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const brandOptions = useAppSelector(selectOptions);
  const loading = useAppSelector((state) => state.brands.loading);

  React.useEffect(() => {
    (async () => {
      dispatch(fetchBrandsAsync());
    })();
  }, []);

  return (
    <>
      {loading && "Loading..."}
      <Grid>
        {brandOptions.map((brand) => (
          <BrandItem key={brand.id} brand={brand} />
        ))}
      </Grid>
    </>
  );
};
