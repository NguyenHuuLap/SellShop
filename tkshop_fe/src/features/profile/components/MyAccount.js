import { Box, Grid, Typography, TextField } from "@mui/material"


import imgLogo  from '../../../assets/images/img_logo_100px.png';
const MyAccount = () =>{
    return (
        <Grid container item sx={{position:'relative'}} spacing={2}>
            <Grid item sx={{ position: 'relative', alignItems: 'center' }} >
                <Box sx={{width: '900px'}}>
                <center>
                    <img src={imgLogo}></img>
                    <Typography>Nguyễn Hưng Khang</Typography>
                    <TextField id="input-with-sx" label="Họ và tên: Nguyễn Hưng Khang" variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                </center>
                </Box>
            </Grid>
        </Grid>
    )
}
export default MyAccount