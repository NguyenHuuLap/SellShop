import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const AdsCaroselIndicator = () => {
    return (
        <>
            <Card
                sx={{
                    height: "70px",
                    width: "99.5%",
                }}
            >
                <CardContent 
                sx ={{
                    py: "5px !important"
                }}
                >
                    <Typography gutterBottom component="div" sx={{fontSize: "18px", fontWeight: "bold"}}>
                        Khuyến mãi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Khuyến mãi Laptop Asus 10%
                    </Typography>
                </CardContent>

            </Card>
        </>
    );
}

export default AdsCaroselIndicator;
