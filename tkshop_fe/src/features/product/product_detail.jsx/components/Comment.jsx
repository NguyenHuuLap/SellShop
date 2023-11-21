import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { Avatar, Link, Rating } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from '@mui/icons-material/Circle';

const CommentBox = styled(Box)({
    borderRadius: "20px",
    boxShadow: "none",
    backgroundColor: "#ededed",
    padding: "10px 20px",
    marginLeft: 10,
    width: "100%"
})

export default function Comment() {

    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <Avatar alt="Nguyễn Hưng Khang" src="https://lh3.googleusercontent.com/a/ACg8ocLBquAasYkVKjj4S-n7L96PGgPhlknagAG7hn1hEM_P=s96-c?fbclid=IwAR3x61Qg6IhcYnwS6NFfwXbJggri5VU8tsf0NqSdk78phv22RU9wcbN-Hts" />
            <CommentBox>

                <Typography variant='body1' fontWeight={700} sx={{ mb: 0.5 }}>
                    Nguyễn Hưng Khang
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating size="small" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />


                    <ThumbUpIcon sx={{ color: "#1976d2", fontSize: 15, ml: 2, mr: 0.5 }} />
                    <Typography sx={{ color: "#1976d2", fontSize: 15 }}>
                        56
                    </Typography>
                </Box>


                <Typography variant='body1' >
                    Hàng xài ok nha sốp
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "#939ca3" }}>
                        10 ngày trước
                    </Typography>
                    <CircleIcon sx={{fontSize: 5, mt: 0.7, mx: 0.8, color: "#939ca3" }}/>
                    <Link sx={{ cursor: "pointer"}} underline='hover'>
                        <a>Thích</a>
                    </Link>
                    <CircleIcon sx={{fontSize: 5, mt: 0.7, mx: 0.8, color: "#939ca3" }}/>
                    <Link sx={{ cursor: "pointer"}} underline='hover'>
                        Trả lời
                    </Link>
                </Box>

            </CommentBox>
        </Box>

    );
}