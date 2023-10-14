import * as React from "react";
import { styled, Button, Card, CardContent, Stack, Grid, CardMedia, IconButton, Typography, Box, Paper, Rating, CardActions } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

const CustomCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: 260, p: 0 }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-asus-tuf-gaming-f15-fx506hf-hn014w.png"
                    sx={{ padding: 'auto', pt: 3, objectFit: "contain" }}
                />
                <CardContent sx={{ pb: 0, pt: 0.5 }}>
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', lineHeight: 1.2 }}>
                        Laptop ASUS TUF Gaming F15 FX506HC-HN144W
                    </Typography>
                    <Stack mt={2} direction="row" spacing={1} >
                        <Typography variant="body1"
                            sx={{
                                color: "red",
                                fontWeight: 'bold'
                            }}
                        >
                            17.999.000₫
                        </Typography>
                        <Typography variant="body2"
                            sx={{
                                textDecoration: 'line-through',
                                pt: 0.5,
                                fontWeight: 'bold'
                            }}
                        >
                            22.100.000₫
                        </Typography>
                    </Stack>
                    <Paper
                        sx={{
                            p: 1,
                            boxShadow: 0,
                            backgroundColor: '#F3F4F6',
                            mt: 1
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 1km khác
                        </Typography>
                    </Paper>
                    <Rating
                        value={3}
                        sx={{
                            mt: 1
                        }}
                    />

                </CardContent>
                <CardActions sx={{ mt: 0 }}>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Typography variant="body2" color="text.secondary">
                        Yêu thích
                    </Typography>

                    <IconButton disableRipple>
                        <FavoriteBorder sx={{ color: 'red' }} />
                    </IconButton>

                </CardActions>
            </Card>
        </>
    );
}

export default CustomCard;