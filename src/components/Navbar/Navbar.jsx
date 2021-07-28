import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from './assets'


function Navbar() {
    return (
        <>
            <AppBar position="fixed" className={CallMissedSharp.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="Tribe.js" height="25px" className={Classes.image} />
                        Tribe.js
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
