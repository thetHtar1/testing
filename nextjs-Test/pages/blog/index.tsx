import { NextPage } from "next";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import MediaCard from "../../component/mediaCard"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Blog: NextPage = () => {
    {
        return (
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Typography variant="h2" gutterBottom>
                        Blog
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <MediaCard 
                            title={"Green"} 
                            description={`Lizards are a widespread group of squamate reptiles, with over 6,000 
                            species, ranging across all continents except Antarctica`} 
                            imgURL={"https://miro.medium.com/max/1100/1*sfwmPeBXnu2K2tbCB3R-yg@2x.webp"} />
                        </Grid>
                        <Grid item xs={4}>
                        <MediaCard 
                            title={"Paella"} 
                            description={`This impressive paella is a perfect party dish and a fun meal to cook together 
                            with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`} 
                            imgURL={"https://mui.com/static/images/cards/paella.jpg"} />                        
                            </Grid>
                        <Grid item xs={4}>
                        <MediaCard 
                            title={"Puppy"} 
                            description={`Lizards are a widespread group of squamate reptiles, with over 6,000 
                            species, ranging across all continents except Antarctica`} 
                            imgURL={"https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000"} />                        </Grid>

                    </Grid>
                </Box>
            </Container>
        )
    }
}
export default Blog;