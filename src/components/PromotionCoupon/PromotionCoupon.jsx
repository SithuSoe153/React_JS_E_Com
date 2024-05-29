import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px 15px',
        backgroundColor: '#fffafa',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    card: {
        width: '48%',
        // padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardMedia: {
        width: '48%',
        // padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        height: '250px',
        // width: '100%',
        // marginRight: theme.spacing(2),
        borderRadius: 20
    },
    cardContent: {
        flex: '1 0 auto',
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const PromotionCoupon = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {/* <Card className={classes.card} style={{ backgroundColor: '#e3f2fd' }}> */}
            <CardMedia
                className={classes.cardMedia}
                image='./TUF4.png'
                title='Promotion Image'
            />
            {/* <CardContent className={classes.cardContent}>
                    <Typography variant="h6">THINGYAN DISCOUNT</Typography>
                    <Typography variant="h4" color="primary">65% OFF</Typography>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        VIEW ALL PROMOTIONS
                    </Button>
                </CardContent> */}
            {/* </Card> */}
            {/* <Card className={classes.card} style={{ backgroundColor: '#ffcc80' }}> */}
            <CardMedia
                className={classes.cardMedia}
                image='./TUF.png'
                title='Coupon Image'
            />
            {/* <CardContent className={classes.cardContent}>
                    <Typography variant="h6">30% OFF PURCHASE DELIVERY</Typography>
                    <Typography variant="h4" color="primary">CODE: 1234567890</Typography>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        VIEW ALL COUPONS
                    </Button>
                </CardContent> */}
            {/* </Card> */}
        </Box>
    );
};

export default PromotionCoupon;
