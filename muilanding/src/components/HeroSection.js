import { Box, Button, Grid, Typography } from "@mui/material"
import Cake from '../images/cake.png';

const HeroSection = () => {
    return (
       <Grid container direction="row" alignItems="center">
            <Grid item xs={12} sm={6}>
                <Typography variant="h3">
                    A bliss in every byte
                </Typography>
                <Typography variant="h5">
                    We offer tasty cakes and sweets for you.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} justifyContent="center">
                <Box component="img" src={Cake} />
            </Grid>
       </Grid>
    )
}

export default HeroSection;