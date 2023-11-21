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
            <Avatar alt="Nguyễn Hưng Khang" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/366843633_1748170288984803_5730509656188261732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8kNbARfLgU1vG6UBGykRvNx2DJFSMe5A3HYMkVIx7kBfYih2jLqELdfuKFDvDczKimMaYBPiTxR6tigSJjPuv&_nc_ohc=vydwcbPIsEMAX_9LUVM&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBGLD0m-847VHQpneQFF1PmNs-Sq-THdj9RLcWdWBTJsA&oe=655D3BF5" />
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