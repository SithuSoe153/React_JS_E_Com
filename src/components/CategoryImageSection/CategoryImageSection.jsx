import React from 'react';
import { Grid, Box, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        marginTop: theme.spacing(100),
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        padding: '0 30px', // Ensure no padding
        marginTop: 80,
        width: '100%', // Ensure full width
    },


    card: {
        width: 200,
        margin: 'auto',
        transition: '0.3s',
        border: '1px solid lightgrey',
        '&:hover': {
            border: `1px solid ${theme.palette.primary.main}`,
        },
    },
    media: {
        height: 180,
    },
    cardContent: {
        textAlign: 'center',
    },
    selectedCard: {
        border: `1px solid ${theme.palette.primary.main}`,
    },
    selectedText: {
        color: theme.palette.primary.main,
    },
}));

const randomSeed = Math.floor(Math.random() * 1000);

const categories = [
    { name: 'Tops', image: `https://picsum.photos/400/400?random=${randomSeed + 1}` },
    { name: 'Bottoms', image: `https://picsum.photos/400/400?random=${randomSeed + 2}` },
    { name: 'Shoes', image: `https://picsum.photos/400/400?random=${randomSeed + 3}` },
    { name: 'Bags', image: `https://picsum.photos/400/400?random=${randomSeed + 4}` },
    { name: 'Phones', image: `https://picsum.photos/400/400?random=${randomSeed + 5}` },
    { name: 'Watches', image: `https://picsum.photos/400/400?random=${randomSeed + 6}` },
];

const CategorySelection = () => {
    const classes = useStyles();
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category.name);
    };

    return (
        <Box className={classes.container}>
            <Grid container justifyContent='space-between'>
                {categories.map((category) => (
                    <Grid item key={category.name}>
                        <Card
                            className={`${classes.card} ${selectedCategory === category.name ? classes.selectedCard : ''}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            <CardMedia
                                className={classes.media}
                                image={category.image}
                                title={category.name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="button" display="block"
                                    // variant="subtitle1"
                                    className={selectedCategory === category.name ? classes.selectedText : ''}
                                >
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default CategorySelection;
