import { FormHelperText, Paper, Grid, Typography, Box, Card, CardContent, FormGroup, FormControlLabel, FormLabel, Checkbox, RadioGroup, Radio, ToggleButton, ToggleButtonGroup, Stack, FormControl, Slider, Divider, Input } from "@mui/material";
import * as React from "react";
import ProductGrid from "../components/ProductGrid";
import { styled } from "@mui/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NumericFormat } from 'react-number-format';
import { useLocation } from "react-router-dom";

const SelectBox = ({ setParams, title, searchText, data }) => {
    const location = useLocation();
    const [dataSearch, setDataSearch] = React.useState(data);


    React.useEffect(() => {
        const getValue = () => {
            const searchParams = new URLSearchParams(location.search);
            if (searchParams.get(searchText))
                setParams(searchText + "=" + searchParams.get(searchText));
            else
                setParams("");
            let searchValue = [];
            if (searchParams.get(searchText))
                searchValue = searchParams.get(searchText).split(",");

            const tempList = [...dataSearch]
            const updateValue = tempList.map(item =>
            ({
                ...item,
                checked: searchValue.includes(item.key),
            })
            )
            setDataSearch(updateValue);
        }
        getValue();
    }, []);


    const handleChange = (event) => {

        const tempList = [...dataSearch]
        const updateValue = tempList.map(item => ({
            ...item,
            checked: event.target.name === item.key ? event.target.checked : item.checked,
        }));
        setDataSearch(updateValue);

        const textParams = updateValue
            .filter(item => item.checked)
            .map(item => item.key)
            .join(",");

        if (textParams !== "")
            setParams(searchText + "=" + updateValue
                .filter(item => item.checked)
                .map(item => item.key)
                .join(","))
        else
            setParams("");
    }



    return (
        <Box>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: "black", mb: 1 }}>{title}</Typography>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {dataSearch.map((item, index) => {
                        return (
                            <FormControlLabel key={index}
                                control={
                                    <Checkbox checked={item.checked} onChange={handleChange} name={item.key} />
                                }
                                label={item.name}
                            />
                        );
                    })}
                </FormGroup>
            </FormControl>
        </Box>

    );
}

export default SelectBox;