import {
  Grid,
  Pagination,
  Box,
  Card,
  CardContent,
  ToggleButtonGroup,
} from "@mui/material";
import * as React from "react";
import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";
import { CustomToggleButton } from "../../../components/common/components/CustomToggleButton";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [displayCategory, setDisplayCategory] = React.useState(null);
  const [displayCategoryList, setDisplayCategoryList] = React.useState([]);
  const [searchUrl, setSearchUrl] = React.useState();

  const handleChange = async (event, newDisplayCategory) => {
    if (newDisplayCategory !== null) {
      setDisplayCategory(newDisplayCategory);
      navigate(`/search/${newDisplayCategory}?minPrice=0&maxPrice=100000000`);
    }
  };

  React.useEffect(() => {
    const fetchData = async (page) => {
      try {
        setDisplayCategoryList([]);
        const response = await axios.get(`http://localhost:3030/category/`);
        const data = response.data;
        if (data.find((value) => value.slug === categorySlug))
          setDisplayCategory(categorySlug);
        else navigate("/error");
        setDisplayCategoryList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return !displayCategoryList ? (
    <>Loading</>
  ) : (
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
        <Filter setSearchUrl={setSearchUrl} />
      </Grid>
      <Grid item xs={10} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <ToggleButtonGroup
              color="primary"
              value={displayCategory}
              exclusive
              onChange={handleChange}
            >
              {displayCategoryList
                .sort((a, b) => a.numOrder - b.numOrder)
                .map((item, index) => {
                  return (
                    <CustomToggleButton value={item.slug}>
                      {item.name}
                    </CustomToggleButton>
                  );
                })}
            </ToggleButtonGroup>
          </Grid>

          <Grid item xs={12}>
            <ProductGrid searchUrl={searchUrl} />
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
