import { Grid, Pagination, Box, Card, CardContent } from "@mui/material";
import * as React from "react";
import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";

const Search = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        maxWidth: "1200px",
        display: "flex",
        margin: "auto",
      }}
    >
      <Grid item xs={2} md={3}>
        <Filter />
      </Grid>
      <Grid item xs={10} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProductGrid />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination count={10} variant="outlined" color="primary" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
