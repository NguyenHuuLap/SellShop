import * as React from "react";
import { Grid, Paper, MenuList, MenuItem, Button, Menu, Container } from "@mui/material";
import CategoryList from "./CategoryList";
import AdsFullWidth from "./AdsFullWidth";
import MainSale from "./MainSale";


const Home = () => {

    return (
        <>
            <Grid container spacing={3}
                sx={{
                    maxWidth: "1200px",
                    display: "flex",
                    margin: "auto"
                }}
            >
                <Grid item xs={12}>
                    <CategoryList />
                </Grid>
                <Grid item xs={12}>
                    <AdsFullWidth />
                </Grid>
                <Grid item xs={12}>
                    <MainSale />
                </Grid>
            </Grid>

        </>
    );
};

export default Home;

// export class Home extends Component {
//     constructor(props) {
//         super(props)

//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={()=>this.props.Decrement()}>Decrement</button>
//                 <button onClick={()=>this.props.Increment()}>Increment</button>
//             </div>
//         )
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//       Increment: () => dispatch(fc_increment()),
//       Decrement: () => dispatch(fc_decrement())

//     };
//   }
// export default connect(null,mapDispatchToProps)(Home)
