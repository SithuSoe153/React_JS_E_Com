import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, IconButton, Link } from '@material-ui/core';
import { Facebook, WhatsApp, Apple, Shop, Phone, Room, Mail } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(6),
        color: '#fff',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    logo: {
        height: '100px',
        marginBottom: 10,
        borderRadius: 4,
        marginRight: theme.spacing(2),
    },
    column: {
        flex: 1,
        padding: theme.spacing(2),
    },
    socialIcons: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    appIcons: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appIcon: {
        height: '40px',
        margin: theme.spacing(1),
    },
    footerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: theme.spacing(2),
        borderTop: '1px solid lightgrey',
        paddingTop: theme.spacing(2),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Box display="flex" flexDirection="row">
                <Box className={classes.column}>
                    <Box className={classes.logoContainer}>
                        <img src="/TUF.png" alt="Logo" className={classes.logo} />
                        <Typography variant="h4" >
                            <Box fontWeight={800}>
                                E-Commerce
                            </Box>
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.column}>
                    <Typography variant="h6">Explore More</Typography>
                    <Typography>Contact Us</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Terms & Condition</Typography>
                </Box>
                <Box className={classes.column}>
                    <Typography variant="h6">Contact Us</Typography>
                    <Typography><Phone /> 09587999885 | 09878755221</Typography>
                    <Typography><Room /> No.23, East Horse Race Course, Tarmwe, Yangon, Myanmar, 156878</Typography>
                    <Typography><Mail /> support@soemm.com</Typography>
                </Box>
                <Box className={classes.column}>
                    <Typography variant="h6">Connect With Us</Typography>
                    <Box className={classes.socialIcons}>
                        <IconButton color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit">
                            <WhatsApp />
                        </IconButton>
                    </Box>
                    <Typography variant="h6">Download App</Typography>
                    <Box className={classes.appIcons}>
                        <Apple />
                        <Shop />

                        {/* <img src="/path-to-google-play-icon.png" alt="Google Play" className={classes.appIcon} />
                        <img src="/path-to-app-store-icon.png" alt="App Store" className={classes.appIcon} /> */}
                    </Box>
                </Box>
            </Box>

            <Box className={classes.footerBottom}>
                <Typography variant="body2">
                    © 2024 <Link href="#" color="inherit">E-Commerce</Link>. All Rights Reserved.
                </Typography>
                <Typography variant="body2">
                    Web Design by <Link href="#" color="inherit">Soe</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
