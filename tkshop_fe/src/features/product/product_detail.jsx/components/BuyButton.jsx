import { Grid, Typography, Divider, Box, Button, Card, CardContent, Stack, Snackbar, Alert } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from "react";
import { styled } from "@mui/system";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




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

const BuyButton = ({productId, sku}) => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    const handleAddCart = async()=>{
        try{
            const response = await axios.post('http://localhost:3030/cart/add',{
                userId: user._id,
                productId: productId,
                sku: sku,
                quantity: 1,
            });
            if(response.status === 200){
                setSnackbarMessage("Đã thêm vào giỏ hàng thành công!");
                setOpenSnackbar(true);
            }
        }catch(err){
            console.log('Err: ',err)
        }
    }
    const handleBuyNow = async()=>{
        if(!user){
            navigate('/login')
        }else{
            await handleAddCart(); 
            navigate('/cart');
        }
    }

    return (
        <Stack spacing={1}>
            <BuyNowButton variant="contained" onClick={handleBuyNow} startIcon={<StoreIcon />}>
                Mua ngay
            </BuyNowButton>
            <AddCartButton variant="outlined" onClick={handleAddCart} startIcon={<AddShoppingCartIcon />}>
                Thêm vào giỏ hàng
            </AddCartButton>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={()=> setOpenSnackbar(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Alert 
                    onClose={()=> setOpenSnackbar(false)}
                    severity= {snackbarMessage.includes("thành công") ? "success" : "error"}
                    sx={{width: '350px'}}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default BuyButton;