import * as React from "react";
import { styled, Button, Card, CardContent, Stack, Grid, CardMedia, IconButton, Typography, Box, Paper, Rating, CardActions } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import CustomCard from "./CustomCard";

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color: 'white'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        color: 'white'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        color: 'white'
    },
});

const MainSale = () => {
    return (
        <>
            <Card
                sx={{
                    background: 'linear-gradient(red, black)'
                }}
            >
                <CardContent>
                    <Stack spacing={2} direction="row">
                        <CustomButton variant="contained">Laptop</CustomButton>
                        <CustomButton variant="contained">Phụ kiện</CustomButton>
                        <CustomButton variant="contained">Điện thoại</CustomButton>
                    </Stack>
                    <Grid container mt={3} spacing={2}>
                        <Grid item>
                            <CustomCard />
                        </Grid>
                        <Grid item>
                            <CustomCard />
                        </Grid><Grid item>
                            <CustomCard />
                        </Grid><Grid item>
                            <CustomCard />
                        </Grid>

                    </Grid>
                </CardContent>

            </Card>
        </>
    );
}

export default MainSale;