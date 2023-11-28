import {  ArrowBack, CheckBox, CheckCircle,  } from "@mui/icons-material";
import {  Button, Checkbox, Grid,Typography, } from "@mui/material"
import CartItem from "../component/CartItem";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, deleteCart, selectAllItems } from "../../../actions/CartAction.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DeleteAllButton = styled.button `
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    margin-left: 400px;
    color: inherit; 
    &:hover{
        text-decoration: underline;
        font-weight: bold;
    }
`

const Cart =  () =>{
    const user =  useSelector((state) => state.user.user);
    
    const [isEmptyCart, setIsEmptyCart] = useState(true);
    const items = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(()=>{
        const getItems = async() => {
            try{
                const response = await axios.get(`http://localhost:3030/cart/${user._id}`);
                if(response.status ===200){
                    const cartItem = response.data.data?.items || [];  
                    dispatch(cartItems(cartItem));
                    if(cartItem.length > 0){
                        setIsEmptyCart(false);
                    }
                }
            }catch(err){
                console.log('ERR: ', err)
            }
        }
        getItems();
    },[])

    const handleHome = ()=>{
        navigate('/')
    }

    const handleSelectAll = ()=>{
        dispatch(selectAllItems(!items.every((item) => item.isSelected)));
    }
    const handleDeleteAll = async() => {
        try{
            const response = await axios.delete(`http://localhost:3030/cart/${user._id}/clean`);
            if(response.status === 200){
                console.log('Delete Successfull');
                dispatch(deleteCart(!items.every((item) => item.isSelected)));
                setIsEmptyCart(true);
            }
        }catch(err){
            console.log('Err: ', err);
        }
    }

    const selectedItems = items.filter((item)=> item.isSelected);
        const totalSelected = selectedItems.reduce(
        (total, item) => total + item.quantity * item.productId.variants.find(variant => variant.sku === item.sku)?.price, 0
    );
    const formattedPrice = totalSelected.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    return (
        <>
            <Grid container
                sx={{
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection:'column',
                    margin: "auto",
                    marginTop: "10px",
                }}>
                    <Grid sx={{
                        flexDirection:'row',
                        width:'100%',
                        display: 'flex',
                        marginBottom:'4px',
                        borderBottom: '2px solid #ccc',
                        alignItems:'center',
                    }}>
                        <ArrowBack onClick={handleHome} ></ArrowBack>
                        <Typography variant="h6" 
                            fontWeight={500} 
                            sx={{marginLeft:'200px'}} >Giỏ hàng của bạn</Typography>
                    </Grid>
                    
                    {isEmptyCart ? (
                        <center><Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
                        Giỏ hàng của bạn trống.
                        Hãy thêm sản phẩm để tiếp tục mua sắm!
                    </Typography></center>
                    ) : (
                        <>
                            <Grid sx={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                display: 'flex'
                            }}>
                                <Checkbox
                                    checked={items.length > 0 && items.every((item) => item.isSelected)}
                                    onChange={handleSelectAll}
                                    icon={<CheckCircle />}
                                    checkedIcon={<CheckCircle />}
                                />
                                <Typography variant="body1" sx={{ marginLeft: '5px' }}>Chọn tất cả </Typography>
                                { items.length > 0 && items.every((item) => item.isSelected) &&(
                                    <DeleteAllButton onClick={handleDeleteAll} >Xóa tất cả</DeleteAllButton>
                                )}
                            </Grid>
                            
                            <CartItem/>
                        </>
                    )}
                    <Grid sx={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography margin={1}>Tổng: </Typography>
                        <Typography>{formattedPrice}</Typography>
                    </Grid>
            </Grid>
        </>
    )
}

export default Cart;