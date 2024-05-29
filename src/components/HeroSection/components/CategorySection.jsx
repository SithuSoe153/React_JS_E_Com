import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';




const useStyles = makeStyles((theme) => ({
    catContainer: {
        flex: '0 0 300px', // Fixed width for categories section
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        paddingTop: 5,
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        margin: 0,
        border: '1px solid #e0e0e0',
        borderRadius: 20,
        padding: 15,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        padding: theme.spacing(1),
        cursor: 'pointer'
    },
}));



const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Health & Beauty',
    'Toys & Games',
    'Automotive',
    'Books',
    'Music',
];



const CategorySection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.catContainer}>
            <List className={classes.list}>
                <Typography variant="h5" className={classes.title}>
                    Shop By Categories
                </Typography>
                <Divider />
                {categories.map((category, index) => (
                    <React.Fragment key={category}>
                        <ListItem className={classes.listItem} >
                            <ListItemText primary={category} /> <KeyboardArrowRightIcon />
                        </ListItem>
                        {index < categories.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};



export default CategorySection;