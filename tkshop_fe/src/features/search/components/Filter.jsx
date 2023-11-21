import { Paper, Grid, Typography, Box, Card, CardContent, FormGroup, FormControlLabel, FormLabel, Checkbox, RadioGroup, Radio, ToggleButton, ToggleButtonGroup, Stack, FormControl, Slider, Divider, Input } from "@mui/material";
import * as React from "react";
import ProductGrid from "../components/ProductGrid";
import { styled } from "@mui/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NumericFormat } from 'react-number-format';

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
});

function valuetext(value) {
    return `${value}°C`;
}



const Filter = () => {
    const [value, setValue] = React.useState([0, 100000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}
                    sx={{
                        maxWidth: "1200px",
                        display: "flex",

                    }}
                >
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "black", mb: 1 }}>Loại sản phẩm</Typography>
                        <FormControl>
                            <RadioGroup>
                                <Grid container>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="all" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Tất cả</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="laptop" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Laptop</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="loa" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Loa</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="tai-nghe" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Tai nghe</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="de-tan-nhiet" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Đế tản nhiệt</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="chuot" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Chuột</Typography>} /></Grid>
                                    <Grid item xs={12} lg={6}><FormControlLabel value="lot-chuot" control={<Radio sx={{ py: 0.2, '& .MuiSvgIcon-root': { height: 17, width: 17, } }} />} label={<Typography sx={{ fontSize: 14 }}>Lót chuột</Typography>} /></Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "black", mb: 1 }}>Khoảng giá</Typography>
                        <Box>
                            <NumericFormat 
                              value={value[0]}
                              thousandSeparator=","
                              endAdornment="VNĐ"
                              prefix="Từ: "
                              customInput={Input}
                            />
                            <NumericFormat 
                              value={value[1]}
                              thousandSeparator=","
                              prefix="Đến: "
                              endAdornment="VNĐ"
                              customInput={Input}
                            />
                        </Box>
                        <Box>
                            <Slider getAriaLabel={() => 'Price range'}
                                max={100000000}
                                min={0}
                                step={100000}
                                value={value}
                                onChange={handleChange} />
                        </Box>
                    </Grid>
                </Grid >
            </CardContent>
        </Card>

    );
}

export default Filter;