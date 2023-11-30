import { Grid } from "@mui/material";
import * as React from "react";
import CustomCard from "../../../components/common/components/CustomCard";
import axios from "axios";

const ProductGrid = ({ searchUrl }) => {
  const [productList, setProductList] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(searchUrl);
        const data = response.data;
        setProductList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [, searchUrl]);

  return !productList ? (
    <>Loading</>
  ) : (
    <Grid
      container
      spacing={1}
      sx={{
        maxWidth: "1200px",
        display: "flex",
        margin: "auto",
      }}
    >
      {productList.map((item, index) => {
        return (
          <Grid item xs={4} key={index}>
            <CustomCard data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
