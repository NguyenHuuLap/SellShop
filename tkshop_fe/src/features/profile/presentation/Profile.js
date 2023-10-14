import BlockMenu from "../components/BlockMenu"
import { Grid, } from "@mui/material"
import HomeProfile from "../components/HomeProfile";

const Profile = () => {
    return (
        <>
            <Grid container
                sx={{
                    maxWidth: "1200px",
                    backgroundColor:'#eeebeb',
                    display: "flex",
                    margin: "auto"
                }}>
                <Grid item xs={12}>
                    <HomeProfile/>
                </Grid>
            </Grid>
        </>
    )
}
export default Profile;