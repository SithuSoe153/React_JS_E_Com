import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '50px 15px',
        backgroundColor: '#fffafa',
    },
    carouselContainer: {
        width: '100%',
    },
    root: {
        backgroundColor: '#FEFAF9',
        margin: '0 15px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        border: '1px solid #ddd', // Fix border
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Add shadow for better border visibility
    },
    media: {
        height: 300,
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        height: 40,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1, // Ensure only one line is shown
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    slickList: {
        padding: '0 10px',
    },
    NewArrival: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 15px',
        marginBottom: 50,
    }
}));

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

const CustomCarousel = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dev2.mtlexpress.com.mm/qq-delivery-backend/v1/pos/product/listAllProductNewArrival'); // Replace with your actual API URL
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setItems(result.data.items); // Adjust this according to your actual response structure
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={classes.container}>
            <Box className={classes.NewArrival}>
                <Typography variant="h4" color="initial">
                    <Box fontWeight="fontWeightBold">New Arrival</Box>
                </Typography>
                <Button variant="outlined" color="primary">
                    View All
                </Button>
            </Box>
            <Slider {...settings} className={classes.carouselContainer}>
                {items.map((item) => (
                    <div key={item.guid}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.img ? `https://dev2.mtlexpress.com.mm/qq-delivery-backend/v1/image/download/${item.img}` : './comingSoon.jpg'}
                                    title={item.name}
                                />
                                <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
                                        {truncateText(item.name, 30)} {/* Adjust maxLength as needed */}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Box className={classes.price}>
                                            MMK {item.priceSell}
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomCarousel;
