import * as React from "react";
import { Grid, Paper, MenuList, MenuItem, Button, Menu, Container } from "@mui/material";
import CategoryList from "./CategoryList";
import AdsFullWidth from "./AdsFullWidth";
import MainSale from "./MainSale";


const Home = () => {

    return (
        <>
            <Grid container spacing={3}
                sx={{
                    maxWidth: "1200px",
                    display: "flex",
                    margin: "auto"
                }}
            >
                <Grid item xs={12}>
                    <CategoryList />
                </Grid>
                <Grid item xs={12}>
                    <AdsFullWidth />
                </Grid>
                <Grid item xs={12} sx={{marginBottom:'100px'}}>
                    <MainSale />
                </Grid>
            </Grid>

        </>
    );
};

export default Home;

