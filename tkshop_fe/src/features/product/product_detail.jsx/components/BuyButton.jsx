import { Grid, Typography, Divider, Box, Button, Card, CardContent, Stack } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from "react";
import { styled } from "@mui/styles";

const BuyNowButton = styled(Button) ({
    backgroundColor: '#ec1c24',
    fontWeight: 700,
    padding: '15px 0',
    fontSize: 15,
    '&:hover':{
        backgroundColor: '#d40008'
    }
})

const AddCartButton = styled(Button) ({
    borderColor: '#ed7615',
    color: '#ed7615',
    fontWeight: 700,
    fontSize: 15,
    '&:hover':{
        borderColor: '#ed7615',
        color: '#ffffff',
        backgroundColor: '#ed7615'
    }
})

const BuyButton = () => {

    return (
        <Stack spacing={1}>
            <BuyNowButton variant="contained"  startIcon={<StoreIcon />}>
                Mua ngay
            </BuyNowButton>
            <AddCartButton variant="outlined" startIcon={<AddShoppingCartIcon />}>
                Thêm vào giỏ hàng
            </AddCartButton>
        </Stack>
    );
}

export default BuyButton;