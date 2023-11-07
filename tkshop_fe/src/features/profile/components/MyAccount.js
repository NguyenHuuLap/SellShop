import { Box, Grid, Typography, TextField } from "@mui/material"


import imgLogo  from '../../../assets/images/img_logo_100px.png';
const MyAccount = () =>{
    const fullname = "Nguyễn Hưng Khang";
    const isEditFullname = false;
    const editFullname = (isEditFullname) =>{
        if (isEditFullname!= false)
        {
            fullname = "";
        }
    }

    return (
        <Grid container item sx={{position:'relative'}} spacing={2}>
            <Grid item sx={{ position: 'relative', alignItems: 'center' }} >
                <Box sx={{width: '900px'}}>
                <center>
                    <img src={imgLogo}></img>
                    <Typography>Nguyễn Hưng Khang</Typography>
                    <TextField id="input-with-sx" label={"Họ và tên: " + fullname}  variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                </center>
                </Box>
            </Grid>
        </Grid>
    )
}
export default MyAccount