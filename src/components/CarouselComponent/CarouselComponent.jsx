import React, { useRef } from 'react';
import { Grid, Button, Typography, makeStyles } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginTop: theme.spacing(10),
    },
    carouselContainer: {
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
    },
    item: {
        minWidth: '200px',
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: '#fff',
    },
    prevButton: {
        left: 0,
    },
    nextButton: {
        right: 0,
    },
}));

const randomSeed = Math.floor(Math.random() * 1000);

const items = [
    {
        id: 1,
        image: `https://picsum.photos/400/400?random=${randomSeed + 1}`,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 'MMK 5,690,000',
    },
    {
        id: 2,
        image: `https://picsum.photos/400/400?random=${randomSeed + 2}`,
        name: 'CK ONE',
        brand: 'Calvin Klein',
        price: 'MMK 340,300',
    },
    {
        id: 3,
        image: `https://picsum.photos/400/400?random=${randomSeed + 3}`,
        name: 'Zinger Stacker Combo',
        brand: 'KFC',
        price: 'MMK 7,000',
    },
    {
        id: 4,
        image: `https://picsum.photos/400/400?random=${randomSeed + 4}`,
        name: 'BLACKPINK 2ND ALBUM',
        brand: 'YG Entertainment',
        price: 'MMK 487,500',
    },
    {
        id: 5,
        image: `https://picsum.photos/400/400?random=${randomSeed + 5}`,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 'MMK 5,690,000',
    },
    {
        id: 6,
        image: `https://picsum.photos/400/400?random=${randomSeed + 6}`,
        name: 'CK ONE',
        brand: 'Calvin Klein',
        price: 'MMK 340,300',
    },
    {
        id: 7,
        image: `https://picsum.photos/400/400?random=${randomSeed + 7}`,
        name: 'Zinger Stacker Combo',
        brand: 'KFC',
        price: 'MMK 7,000',
    },
    {
        id: 8,
        image: `https://picsum.photos/400/400?random=${randomSeed + 8}`,
        name: 'BLACKPINK 2ND ALBUM',
        brand: 'YG Entertainment',
        price: 'MMK 487,500',
    },
    {
        id: 9,
        image: `https://picsum.photos/400/400?random=${randomSeed + 9}`,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 'MMK 5,690,000',
    }
];

const CustomCarousel = () => {
    const classes = useStyles();
    const carouselRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className={classes.root}>
            <Button
                className={`${classes.navButton} ${classes.prevButton}`}
                onClick={() => scroll(-300)}
            >
                <ArrowBackIos />
            </Button>
            <div className={classes.carouselContainer} ref={carouselRef}>
                {items.map((item) => (
                    <div key={item.id} className={classes.item}>
                        <img src={item.image} alt={item.name} className={classes.img} />
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2">{item.brand}</Typography>
                        <Typography variant="body2">{item.price}</Typography>
                    </div>
                ))}
            </div>
            <Button
                className={`${classes.navButton} ${classes.nextButton}`}
                onClick={() => scroll(300)}
            >
                <ArrowForwardIos />
            </Button>
        </div>
    );
};

export default CustomCarousel;
