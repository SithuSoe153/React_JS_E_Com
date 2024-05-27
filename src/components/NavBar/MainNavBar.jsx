import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar } from '@material-ui/core';

import TopNav from './TopNav';
import MiddleNav from './MiddleNav';
import BottomNav from './BottomNav';

const useStyles = makeStyles((theme) => ({
}));


const MainNavBar = () => {

    const classes = useStyles();

    return (
        <>
            <TopNav />
            <MiddleNav />
            <BottomNav />
        </>

    )
}

export default MainNavBar;