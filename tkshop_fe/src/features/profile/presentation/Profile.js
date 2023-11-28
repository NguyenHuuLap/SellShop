import BlockMenu from "../components/BlockMenu"
import { Grid, Typography, } from "@mui/material"
import HomeProfile from "../components/HomeProfile";
import { useLocation } from "react-router";
import { async } from "q";

const Profile = () => {
    const location = useLocation();
    const user = location?.state?.user || null;
    return (
        <>
            <Grid container
                sx={{
                    maxWidth: "1200px",
                    display: "flex",
                    margin: "auto",
                    marginTop: "10px",
                    borderRadius: "10px"
                }}>
                <BlockMenu user= {user}/>
            </Grid>
        </>
    )
}
export default Profile;