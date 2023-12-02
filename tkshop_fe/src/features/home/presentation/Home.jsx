import * as React from "react";
import {
  Grid,
  Paper,
  MenuList,
  MenuItem,
  Button,
  Menu,
  Container,
} from "@mui/material";
import CategoryList from "../../../components/common/components/CategoryList.js";
import AdsFullWidth from "../../../components/common/components/AdsFullWidth.js";
import MainProduct from "../../../components/common/components/MainProduct.jsx";
<<<<<<< HEAD
import axios from "axios";

const Home = () => {
  const [productList, setProductList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
=======
import axios from 'axios';
import Carosel from "../../../components/common/components/CaroselTest.jsx";

const Home = () => {
    const [productList, setProductList] = React.useState([])
    const [mostViewProductList, setMostViewProductList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);
>>>>>>> dev-khang

  const handleLoading = () => {
    setIsLoading(false);
  };

  // React.useEffect(() => {
  //     window.addEventListener("load", handleLoading);
  //     return () => window.removeEventListener("load", handleLoading);
  // }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:3030/product/").then((value) => {
          value.data.forEach((item) => {
            setProductList((productList) => [item, ...productList]);
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

<<<<<<< HEAD
  return !productList ? (
    <div>Loading</div>
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
      <Grid item xs={12}>
        <CategoryList />
      </Grid>
      <Grid item xs={12}>
        <AdsFullWidth />
      </Grid>
      <Grid item xs={12}>
        <MainSale />
      </Grid>
      return !productList ? (<div>Loading</div>) : (
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "1200px",
          display: "flex",
          margin: "auto",
        }}
      >
        <Grid item xs={12}>
          <CategoryList />
        </Grid>
        <Grid item xs={12}>
          <AdsFullWidth />
        </Grid>
        <Grid item xs={12}>
          {/* <MainSale /> */}
=======
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:3030/product/newest')
                    .then(value => {
                        value.data.forEach(item => {
                            setProductList(productList => [item, ...productList])
                        })
                    })
                    await axios.get('http://localhost:3030/product/most-view')
                    .then(value => {
                        value.data.forEach(item => {
                            setMostViewProductList(mostViewProductList => [item, ...mostViewProductList])
                        })
                    })
                    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
     
        };
        fetchData();
    }, []);


    return !mostViewProductList || !productList ? (
        <div>Loading</div>
    ) : (
        <Grid container spacing={3}
            sx={{
                maxWidth: "1200px",
                display: "flex",
                margin: "auto"
            }}
        >
            <Grid item xs={12}>
                <Carosel />
            </Grid>
            <Grid item xs={12}>
                <AdsFullWidth />
            </Grid>
            <Grid item xs={12}>
                {/* <MainSale /> */}
            </Grid>

            <Grid item xs={12}>
                <MainProduct title="SẢN PHẨM MỚI NHẤT" gridRows={2} data={productList} displayVariant={true}/>
            </Grid>

            <Grid item xs={12}>
                <MainProduct title="SẢN PHẨM ĐƯỢC XEM NHIỀU NHẤT" gridRows={2} data={mostViewProductList} displayVariant={false}/>
            </Grid>

>>>>>>> dev-khang
        </Grid>

        <Grid item xs={12}>
          <MainProduct
            title="SẢN PHẨM MỚI NHẤT"
            gridRows={2}
            data={productList}
          />
        </Grid>
      </Grid>
      );
      <Grid item xs={12}>
        <MainProduct
          title="SẢN PHẨM MỚI NHẤT"
          gridRows={2}
          data={productList}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
