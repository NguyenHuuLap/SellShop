import * as React from "react";
import { Grid, Paper, Container, Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Card } from "@mui/material";
import { Delete, Folder, ArrowForwardIos, Laptop, Headphones } from "@mui/icons-material";
import CategoryItem from "./CategoryItem";
import AdsCarosel from "./AdsCarosel";


const CategoryList = () => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Card>
                        <List>

                            <ListItem 
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Laptop sx={{mx: 1}}/>
                                <ListItemText
                                    primary="Laptop"
                                    primaryTypographyProps={{ fontSize: '14px' }}
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Phụ kiện"
                                />
                            </ListItem>
                            
                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>

                            <ListItem
                                sx={{py: 0.5}}
                                secondaryAction={
                                    <ArrowForwardIos fontSize="14px" />
                                }>
                                <Headphones sx={{mx: 1}} />
                                <ListItemText
                                    primary="Nothing"
                                />
                            </ListItem>
                            
                            
                        </List>

                    </Card>
                </Grid>
                <Grid item xs={6} md={9}
                    sx={{
                        position: "relativve"
                    }}
                >
                    <Card>
                        <CategoryItem />
                    </Card>

                    <AdsCarosel />
                </Grid>

            </Grid>
        </>
    );
};

export default CategoryList;