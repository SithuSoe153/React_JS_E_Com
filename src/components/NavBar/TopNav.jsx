import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Height } from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
    toolBar: {
        minHeight: 35,
        alignItems: 'center',
    }
}));


const TopNav = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" >
            <Toolbar className={classes.toolBar}>
                <Box style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <HeadsetMicIcon fontSize="small" />
                    <Box fontWeight="fontWeightLight" marginLeft={1}>
                        09-98958-9668 | 09-98958-9668
                    </Box>

                </Box>
                <Box>

                    <Typography variant="body2" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/UK.svg" alt="UK Flag" style={{ marginRight: 5, verticalAlign: 'middle' }} />
                        ENGLISH

                        <ArrowDropDownIcon fontSize="small" style={{ marginLeft: 5, verticalAlign: 'middle' }} />
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar >
    )
}



export default TopNav;