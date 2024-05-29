import React from 'react';

import { Divider, AppBar, Paper, Tabs, Tab, Box, Toolbar, Button, makeStyles } from '@material-ui/core';
import { BorderAllOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: '0 1px 0 0 rgba(128, 128, 128, 0.5), 0 -1px 0 0 rgba(128, 128, 128, 0.5)',
        minHeight: 48,
        justifyContent: 'center',
    },
    toolBar: {
        minHeight: 35,
        padding: theme.spacing(0, 1),
        justifyContent: 'space-between',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: '20%',
    }
}));


const BottomNav = () => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (




        <AppBar className={classes.appBar} position="static" color="secondary" >

            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant='fullWidth'
                centered
            >

                {["Home", "Brands", "Restaurant", "Shops", "New Arrival", "Best Deals"].map((label, index) => (
                    <Tab key={index} label={label} style={{ fontWeight: 'bold' }} />
                ))}
                <Box className={classes.box}>
                    <Tab label="Sell On E-Comm" />
                </Box>
            </Tabs>
        </AppBar >
    )
}

export default BottomNav;