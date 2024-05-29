import React from 'react';
import { Container, Box, Card, CardMedia, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CategorySection from './components/CategorySection';
import ImageSlider from "./ImageSlider";
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        padding: '50px 30px', // Ensure no padding
        width: '100%', // Ensure full width
    },
    mediaContainer: {
        flex: 1, // Take the remaining space
        display: 'flex',
        justifyContent: 'center', // Center content if needed
    },
    card: {
        borderRadius: 20,
        width: '100%',
    },
    media: {
        height: 600,
        width: '100%',
    },



}));

// const slides = [
//     { url: "https://picsum.photos/400/400?random=1", title: "beach" },
//     { url: "http://localhost:3000/image-2.jpg", title: "boat" },
//     { url: "http://localhost:3000/image-3.jpg", title: "forest" },
//     { url: "http://localhost:3000/image-4.jpg", title: "city" },
//     { url: "http://localhost:3000/image-5.jpg", title: "italy" },
// ];
// const containerStyles = {
//     width: "500px",
//     height: "280px",
//     margin: "0 auto",
// };

const slides = [
    "/TUF.png",
    "/TUF3.png",
    "/TUF2.png",
    "/TUF1.png",
    "/TUF4.png",

]

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}> {/* Use Box instead of Container */}
            <CategorySection />
            <Box className={classes.mediaContainer}>
                {/* <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="/TUF.png"
                        title="Contemplative Reptile"
                    />
                </Card> */}

            </Box>

            <div className={classes.card}>

                <Carousel >
                    {slides.map((s) => (
                        <img src={s} alt="" />
                    ))}
                </Carousel>

            </div>

        </Box>
    );
};

export default HeroSection;
