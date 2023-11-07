import React, { useState } from 'react';
import { CardGiftcard, EventAvailable, GppGoodOutlined, Home, InventoryOutlined, Logout, Paid, Person, WorkspacePremium } from "@mui/icons-material";
import { Avatar, Box, Card, Grid, List, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";

import ic_gift from "../../../assets/images/profile/ic_gift.svg";
import imgLogin from '../../../assets/images/img_logo_100px.png';
import HomeProfile from './HomeProfile';
import HistoryPurchase from './HistoryPurchase';
import LookUpWarranty from './LookUpWarranty';
import Promotion from './Promotion';
import MyAccount from './MyAccount';

const menuItems = [
  { icon: Home, text: 'Trang chủ', buttonName: 'home' },
  { icon: InventoryOutlined, text: 'Lịch sử mua hàng', buttonName: 'historypurchase' },
  { icon: GppGoodOutlined, text: 'Tra cứu bảo hành', buttonName: 'protectionactivities' },
  { icon: CardGiftcard, text: 'Ưu đãi của bạn', buttonName: 'youroffer' },
  { icon: Person, text: 'Tài khoản của bạn', buttonName: 'youraccount' },
  { icon: Logout, text: 'Đăng xuất', buttonName: 'logout' },
];

const MenuItem = ({ icon: Icon, text, buttonName, activeButton, onClick }) => (
  <ListItemButton
    sx={{
      py: 0.5,
      marginBottom: '14px',
      borderRadius: '10px',
      width:'240px',
      backgroundColor: activeButton === buttonName ? '#A2C7FF' : 'inherit',
      border: activeButton === buttonName ? '1px solid #4287ED' : '1px solid transparent',
    }}
    onClick={() => onClick(buttonName)}
  >
    {Icon && <Icon sx={{ mx: 1 }} />}
    <ListItemText primary={text} primaryTypographyProps={{ fontSize: '14px' }} />
  </ListItemButton>
);

const BlockMenu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton((prevButton) => (prevButton === buttonName ? null : buttonName));
    // Thêm logic xử lý khi click vào đây nếu cần
  };

  return (
    <>
        <center>
            <Grid container spacing={2}
                sx={{
                    display: "flex",
                    margin:'auto'
                }} direction="row">
                <Grid item >
                    <Card>
                        <List>
                            {menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                icon={menuItem.icon}
                                text={menuItem.text}
                                buttonName={menuItem.buttonName}
                                activeButton={activeButton}
                                onClick={handleButtonClick}
                            />
                            ))}
                        </List> 
                    </Card>
                </Grid>
                <Grid item direction="row">
                    <MyAccount/>
                </Grid>
            </Grid>
        </center>
    </>
  );
};

export default BlockMenu;
