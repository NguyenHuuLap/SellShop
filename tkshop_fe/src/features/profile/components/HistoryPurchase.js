import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Avatar, Grid, Typography, Box, Divider, Button } from "@mui/material";

import imgEmpty from "../../../assets/images/Order-empty.webp";
import { useSelector } from "react-redux";

const dataButtons = [
  { title: "Tất cả", buttonName: "all", path: "" },
  { title: "Chờ xác nhận", buttonName: "waitconfirm", path: "" },
  { title: "Đã xác nhận", buttonName: "confirmed", path: "" },
  { title: "Đang vận chuyển", buttonName: "beingtransport", path: "" },
  { title: "Đã giao hàng", buttonName: "delivered", path: "" },
  { title: "Đã hủy", buttonName: "cancelled", path: "" },
];

const OrderButtons = ({ title, buttonName, activeButton, path, onClick }) => (
  <Button
    sx={{
      py: 0.5,
      marginBottom: "14px",
      minHeight: "35px",
      borderRadius: "10px",
      "--Grid-borderWidth": "1px",
      border: "var(--Grid-borderWidth) solid",
      borderColor: "divider",
      display: "flex",
      marginLeft: "20px",
      fontSize: "16px",
      textTransform: "none",
      backgroundColor: activeButton === buttonName ? "#A2C7FF" : "inherit",
    }}
    onClick={() => onClick(buttonName, path)}
  >
    {title}
  </Button>
);

const HistoryPurchase = () => {
  const [activeButton, setActiveButton] = useState(null);
  const user = useSelector((state) => state.user.user);
  const handleButtonClick = (buttonName, path) => {
    setActiveButton((prevButton) =>
      prevButton === buttonName ? null : buttonName,
    );
    console.log(path);
    // Thêm logic xử lý khi click vào đây nếu cần
  };
  return (
    <>
      <Grid
        container
        item
        sx={{ position: "relative" }}
        spacing={3}
        direction="row"
      >
        <Grid item sx={{ position: "relativve", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={user.avatar}
              sx={{
                border: "2px solid #1976d2",
                width: 50,
                height: 50,
                marginTop: "8px",
              }}
            />
            <Typography sx={{ marginLeft: "12px" }}>
              {user.firstname}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffff",
              marginTop: "20px",
              marginRight: "20px",
              borderRadius: "10px",
              width: "900px",
              height: "76px",
              "& hr": {
                mx: 2,
              },
            }}
          >
            <Box sx={{ width: "450px" }}>
              <center>
                <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
                  0
                </Typography>
                <Typography>đơn hàng</Typography>
              </center>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ width: "450px" }}>
              <center>
                <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
                  0đ
                </Typography>
                <Typography>Tổng tiền tích lũy</Typography>
              </center>
            </Box>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              sx={{
                width: "auto",
                borderRadius: "10px",
                marginTop: "14px",
                marginRight: "20px",
                display: "flex",
                alignItems: "end",
              }}
              defaultValue={dayjs("2022-04-17")}
            />
          </LocalizationProvider>
          <Grid
            container
            item
            marginLeft={10}
            sx={{ position: "relative", marginTop: "14px" }}
          >
            {dataButtons.map((orderButtons, index) => (
              <OrderButtons
                key={index}
                title={orderButtons.title}
                buttonName={orderButtons.buttonName}
                path={orderButtons.path}
                activeButton={activeButton}
                onClick={handleButtonClick}
              />
            ))}
          </Grid>
          <Grid sx={{ marginTop: "100px", marginBottom: "300px" }}>
            <Box>
              <img src={imgEmpty} />
              <Typography>Không có đơn hàng nào thỏa mãn</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default HistoryPurchase;
