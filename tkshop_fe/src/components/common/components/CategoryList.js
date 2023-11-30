import * as React from "react";
import {
  Grid,
  Paper,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Card,
} from "@mui/material";
import {
  Delete,
  Folder,
  ArrowForwardIos,
  Laptop,
  Headphones,
} from "@mui/icons-material";
import Carosel from "./CaroselTest";
import CategoryItem from "./CategoryItem";
import AdsCarosel from "./AdsCarosel";
import CustomMegaMenu from "./CustomMegaMenu";

const CategoryList = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CustomMegaMenu />
        </Grid>
        <Grid
          item
          xs={6}
          md={9}
          sx={{
            position: "relativve",
          }}
        >
          <Carosel />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryList;
