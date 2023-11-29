import { FormHelperText, Paper, Grid, Typography, Box, Card, CardContent, FormGroup, FormControlLabel, FormLabel, Checkbox, RadioGroup, Radio, ToggleButton, ToggleButtonGroup, Stack, FormControl, Slider, Divider, Input, Button } from "@mui/material";
import * as React from "react";
import ProductGrid from "../components/ProductGrid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NumericFormat } from 'react-number-format';
<<<<<<< HEAD
import { styled } from "@mui/system";
=======
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SelectBox from "./SelectBox";
>>>>>>> dev-khang

const testList = [
    { checked: false, name: "Dell", key: "dell" },
    { checked: false, name: "ASUS", key: "asus" },
];

const Filter = ({ setSearchUrl }) => {
    const { categorySlug } = useParams();
    const location = useLocation();
    const [value, setValue] = React.useState(null);;
    const [brandSearch, setBrandSearch] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {

        const initalPrice = () => {
            const searchParams = new URLSearchParams(location.search);
            const minPrice = searchParams.get("minPrice");
            const maxPrice = searchParams.get("maxPrice");
            setValue([minPrice, maxPrice]);
            setSearchUrl(`http://localhost:3030/product/search?category=${categorySlug}&minPrice=${minPrice}&maxPrice=${maxPrice}&${brandSearch}`)
        }
        initalPrice()
    }, [categorySlug])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const searchWithFilter = () => {
        setSearchUrl(`http://localhost:3030/product/search?category=${categorySlug}&minPrice=${value[0]}&maxPrice=${value[1]}&${brandSearch}`)
        navigate(`/search/${categorySlug}?minPrice=${value[0]}&maxPrice=${value[1]}&${brandSearch}`)
    };

    return !value ? (<>Loading</>) : (
        <Card>
            <CardContent>
                <Grid container spacing={3}
                    sx={{
                        maxWidth: "1200px",
                        display: "flex",

                    }}
                >
                    <Grid item xs={12}>
                        <Button onClick={searchWithFilter} variant="contained" sx={{ width: "100%" }}>
                            Tìm kiếm
                        </Button>
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
                                readOnly
                            />
                            <NumericFormat
                                value={value[1]}
                                thousandSeparator=","
                                prefix="Đến: "
                                endAdornment="VNĐ"
                                customInput={Input}
                                readOnly
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
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectBox setParams={setBrandSearch} title="Thương hiệu" searchText="brand" data={testList} />
                    </Grid>
                </Grid >
            </CardContent>
        </Card>

    );
}

export default Filter;