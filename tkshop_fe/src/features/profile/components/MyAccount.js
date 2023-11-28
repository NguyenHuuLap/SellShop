import { EditNoteOutlined } from "@mui/icons-material";
import { Box, Grid, Typography, TextField, Avatar, IconButton } from "@mui/material"
import { format } from "date-fns";
const MyAccount = ({user}) =>{
    const formattedDate = format(new Date(user.createdAt), 'dd/MM/yyyy');

    return (
        <Grid container item sx={{position:'relative'}} spacing={2} marginBottom={80}>
            <Grid item sx={{ flexDirection:'column' ,display: 'flex', alignItems: 'center',width: '900px'}} >
                <Avatar src={user.avatar} sx={{height: '100px', width:'100px'}}/>
                <Typography>{user.firstname +' ' + user.lastname}</Typography>
                <Grid item sx={{flexDirection:'row', display: 'flex', alignItems: 'flex-end'}}>
                    <IconButton sx={{fontSize:'14px'}}><EditNoteOutlined/>Chỉnh sửa</IconButton>
                </Grid>
                <TextField id="input-with-sx" label={"Họ: " + user.lastname}  variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                <TextField id="input-with-sx" label={"Tên: " + user.firstname}  variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                <TextField id="input-with-sx" label={"Email: " + user.email}  variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                <TextField id="input-with-sx" label={"Ngày tham gia: " + formattedDate} disabled variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
                <TextField id="input-with-sx" label={"Địa chỉ: " + user.address}  variant="standard" sx={{width: '650px', marginBottom:'15px', }}/>
            </Grid>
            
        </Grid>
    )
}
export default MyAccount