import React, { useState } from 'react';

import { Avatar, Grid, Typography, Box, Divider, Button } from "@mui/material";
import imgEmpty from '../../../assets/images/img_look_up_arranty.png';

const dataButtons = [
    {title: 'Tất cả', buttonName:'all', path:''},
    {title: 'Đã tiếp nhận', buttonName:'received', path:''},
    {title: 'Đang điều phối', buttonName:'coordinating', path:""},
    {title: 'Đang sửa', buttonName:'fixing', path:''},
    {title: 'Đã sửa xong', buttonName:'hasbeenfixed', path:''},
    {title: 'Đã trả máy', buttonName:'phonereturned', path:''},
];
const WarrantyButtons = ({ title, buttonName, activeButton, path, onClick }) => (
    <Button
      sx={{
        py: 0.5,
        marginBottom: '14px',
        minHeight:'35px',
        borderRadius: '10px',
        '--Grid-borderWidth': '1px',
        border: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        display: 'flex',
        marginLeft:'20px',
        fontSize:'16px',
        textTransform:'none',
        backgroundColor: '#ffffff','&:hover': { backgroundColor: '#A2C7FF',},
        backgroundColor: activeButton === buttonName ? '#A2C7FF' : 'inherit',
      }}
      onClick={() => onClick(buttonName, path)}
    >
    {title}
    </Button>
);
const LookUpWarranty =() =>{
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (buttonName, path) => {
        setActiveButton((prevButton) => (prevButton === buttonName ? null : buttonName));
        console.log(path);
        // Thêm logic xử lý khi click vào đây nếu cần
      };
    return(
        <>
            <Grid container item sx={{position:'relative'}} spacing={3} direction='row' >
                <Grid item sx={{ position: "relativve", alignItems:'center' }} >
                    <Grid container item marginLeft={10} sx={{ position: 'relative', marginTop: '14px' }}>
                        {dataButtons.map((warrantyButtons, index) => (
                        <WarrantyButtons
                            key={index}
                            title={warrantyButtons.title}
                            buttonName={warrantyButtons.buttonName}
                            path={warrantyButtons.path}
                            activeButton={activeButton}
                            onClick={handleButtonClick}
                        />
                        ))}
                    </Grid>
                    <Grid sx={{marginTop:'10px',marginBottom:'500px'}}>
                        <Box>
                            <img src={imgEmpty}  />
                            <Typography>Không có phiếu bảo hành nào thỏa mãn</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default LookUpWarranty;