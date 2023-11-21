import { Grid } from "@mui/material";
import * as React from "react";
import CustomCard from "../../../components/common/components/CustomCard";

const ProductGrid = () => {
    return (
        <Grid container spacing={1}
            sx={{
                maxWidth: "1200px",
                display: "flex",
                margin: "auto",
            }}
        >
            {}
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
            <Grid item xs={4}>
                <CustomCard />
            </Grid>
        </Grid>
    );
}

export default ProductGrid;