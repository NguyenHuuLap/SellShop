import { Button, Card, CardContent, Divider, FormControl, FormControlLabel, FormLabel, Grid, LinearProgress, Pagination, Paper, Radio, RadioGroup, Rating, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import * as React from 'react';
import Comment from './Comment';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CustomToggleButton = styled(ToggleButton)({
    margin: "auto 10px",
    backgroundColor: "#f8f9fa",
    color: "black",
    border: "1px solid #e9ecef !important",
    borderRadius: "10px !important",
    fontWeight: 600,
    padding: 7,
    [`&.Mui-selected`]: {
        backgroundColor: "#1976d2",
        borderColor: "#1976d2",
        color: "white",
    },
    [`&.Mui-selected:hover`]: {
        backgroundColor: "#0a5cad",
        borderColor: "#1976d2",
        color: "white",
    }
})


const BorderLinearProgress = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    [`&.MuiLinearProgress-colorPrimary`]: {
        backgroundColor: "#edeeef !important"
    },
    [`& .MuiLinearProgress-bar`]: {
        borderRadius: 5,
        backgroundColor: "#48bb78"
    },
});

const Item = styled(Paper)({
    width: "50%",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

export default function ProductDetailRating() {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Box>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography fontSize={18} fontWeight={700} sx={{ textAlign: "center", mb: 2, color: "#0037af" }}>ĐÁNH GIÁ TỪ NGƯỜI DÙNG</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack direction="row" spacing={2}>
                        <Item>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={17} fontWeight={700} sx={{ mb: 0.5 }}>
                                    Đánh giá trung bình
                                </Typography>
                                <Typography fontSize={42} fontWeight={700} sx={{ mb: 0.5, color: "#d40008" }}>
                                    2.5/5
                                </Typography>
                                <Rating size="small" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                <Typography>
                                    95 đánh giá
                                </Typography>
                            </Box>
                        </Item>

                        <Item>
                            <Box sx={{ display: "block", width: "100%" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ mr: 0.2 }}>
                                        5
                                    </Typography>
                                    <StarIcon fontSize='small' sx={{ color: "#faaf00", mr: 1 }} />
                                    <BorderLinearProgress variant="determinate" sx={{ width: "60%" }} value={50} />
                                    <Typography sx={{ ml: 1 }}>
                                        20
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ mr: 0.2 }}>
                                        4
                                    </Typography>
                                    <StarIcon fontSize='small' sx={{ color: "#faaf00", mr: 1 }} />
                                    <BorderLinearProgress variant="determinate" sx={{ width: "60%" }} value={40} />
                                    <Typography sx={{ ml: 1 }}>
                                        20
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ mr: 0.2 }}>
                                        3
                                    </Typography>
                                    <StarIcon fontSize='small' sx={{ color: "#faaf00", mr: 1 }} />
                                    <BorderLinearProgress variant="determinate" sx={{ width: "60%" }} value={30} />
                                    <Typography sx={{ ml: 1 }}>
                                        20
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ mr: 0.2 }}>
                                        2
                                    </Typography>
                                    <StarIcon fontSize='small' sx={{ color: "#faaf00", mr: 1 }} />
                                    <BorderLinearProgress variant="determinate" sx={{ width: "60%" }} value={20} />
                                    <Typography sx={{ ml: 1 }}>
                                        20
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ mr: 0.2 }}>
                                        1
                                    </Typography>
                                    <StarIcon fontSize='small' sx={{ color: "#faaf00", mr: 1 }} />
                                    <BorderLinearProgress variant="determinate" sx={{ width: "60%" }} value={10} />
                                    <Typography sx={{ ml: 1 }}>
                                        20
                                    </Typography>
                                </Box>
                            </Box>
                        </Item>

                    </Stack>
                </CardContent>
            </Card>

            <Card>
                <CardContent sx={{ px: 7 }}>
                    <Box sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography sx={{ mr: 2 }}>
                            Lọc theo:
                        </Typography>
                        <ToggleButtonGroup
                            color='primary'
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                        >
                            <CustomToggleButton value="all">{alignment === "all" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}Tất cả</CustomToggleButton>
                            <CustomToggleButton value="5">{alignment === "5" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}5 Sao</CustomToggleButton>
                            <CustomToggleButton value="4">{alignment === "4" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}4 Sao</CustomToggleButton>
                            <CustomToggleButton value="3">{alignment === "3" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}3 Sao</CustomToggleButton>
                            <CustomToggleButton value="2">{alignment === "2" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}2 Sao</CustomToggleButton>
                            <CustomToggleButton value="1">{alignment === "1" ? <CheckCircleIcon sx={{fontSize: 15, mr: 0.5}}/> : ""}1 Sao</CustomToggleButton>
                        </ToggleButtonGroup>

                    </Box>
                    <Box>
                        <Comment />
                        <Comment />
                        <Comment />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <Pagination count={10} variant="outlined" color="primary" />
                    </Box>


                </CardContent>
            </Card>

        </Box>

    );
}