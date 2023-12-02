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
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
>>>>>>> dev-khang
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { searchProducts, setCategory, setPage } from "../../../actions/SearchAction";

const Search = () => {
<<<<<<< HEAD
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [displayCategory, setDisplayCategory] = React.useState(null);
  const [displayCategoryList, setDisplayCategoryList] = React.useState([]);
  const [searchUrl, setSearchUrl] = React.useState();

  const handleChange = async (event, newDisplayCategory) => {
    if (newDisplayCategory !== null) {
      setDisplayCategory(newDisplayCategory);
      navigate(`/search/${newDisplayCategory}?minPrice=0&maxPrice=100000000`);
=======
    const brand = useSelector((state) => state.search.brand);
    const minPrice = useSelector((state) => state.search.minPrice);
    const maxPrice = useSelector((state) => state.search.maxPrice);
    const category = useSelector((state) => state.search.category);
    const keyword = useSelector((state) => state.search.keyword);
    const page = useSelector((state) => state.search.page);
    const amount = useSelector((state) => state.search.amount);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [displayCategory, setDisplayCategory] = React.useState(null);
    const [displayCategoryList, setDisplayCategoryList] = React.useState([]);
    const [searchUrl, setSearchUrl] = React.useState();

    const handleChange = async (event, newDisplayCategory) => {
        if (newDisplayCategory !== null) {
            dispatch(setCategory(newDisplayCategory));
            dispatch(searchProducts(minPrice, maxPrice, newDisplayCategory, brand, keyword));
            setDisplayCategory(newDisplayCategory);
            navigate(`/search?category=${newDisplayCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}&brand=${brand}&keyword=${encodeURIComponent(keyword)}`)
        }
>>>>>>> dev-khang
    }
  };

<<<<<<< HEAD
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
=======
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setDisplayCategoryList([]);
                const response = await axios.get(`http://localhost:3030/category/`)
                const data = response.data;
                const searchParams = new URLSearchParams(location.search);
                if (searchParams.get("category") === "" || (searchParams.get("category") && data.find(value => value.slug === searchParams.get("category")))) {
                    dispatch(setCategory(searchParams.get("category")));
                    setDisplayCategory(searchParams.get("category"));
                }
                setDisplayCategoryList(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        dispatch(searchProducts(minPrice, maxPrice, category, brand, keyword, page));
>>>>>>> dev-khang

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

<<<<<<< HEAD
export default Search;
=======
    React.useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/category/`)
                const data = response.data;
                const searchParams = new URLSearchParams(location.search);
                if (searchParams.get("category") && data.find(value => value.slug === searchParams.get("category"))) {
                    dispatch(setCategory(searchParams.get("category")));
                    setDisplayCategory(searchParams.get("category"));

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        dispatch(searchProducts(minPrice, maxPrice, category, brand, keyword, page));
    }, [category, dispatch]);

    const handlePaginator = (event, value) => {
        dispatch(setPage(value));
        dispatch(searchProducts(minPrice, maxPrice, category, brand, keyword, value));
    }

    return !displayCategoryList ? (<>Loading</>) : (
        <Grid container spacing={3}
            sx={{
                maxWidth: "1200px",
                display: "flex",
                margin: "auto",
            }}
        >
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <ToggleButtonGroup
                            color='primary'
                            value={displayCategory}
                            exclusive
                            onChange={handleChange}
                        >
                            <CustomToggleButton value={""}>Tất cả</CustomToggleButton>
                            {

                                displayCategoryList.sort((a, b) => a.numOrder - b.numOrder).map((item, index) => {
                                    return (
                                        <CustomToggleButton value={item.slug}>{item.name}</CustomToggleButton>
                                    );

                                })}
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={5} sm={4} md={3}>
                <Filter/>
            </Grid>

            <Grid item xs={7} sm={8} md={9}>

                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <ProductGrid />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Pagination page={page} onChange={handlePaginator} count={Math.floor(amount/10)} variant="outlined" color="primary" />
                        </Box>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    );
}

export default Search;
>>>>>>> dev-khang
