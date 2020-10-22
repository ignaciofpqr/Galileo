import React, {Fragment, useState} from "react";
import {Avatar, Button, MenuItem, Menu, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';
import {Link} from 'react-router-dom';

const Nav = () => {


    return (
        <div id = "NAV">
            <div id = "NavBarButtons">
                    <div className="LogoConteiner">
                     <Link to="/"> <input type="Image" src="https://i.ibb.co/T19W4xk/Mesa-de-trabajo-3-copia-2.png" height="55" width="55"/></Link>
                    </div>
                <div>
                    <Link to='/'>
                        <Button id="indexHomeButton" aria-controls="simple-menu" aria-haspopup="true">
                            HOME
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to='/about'>
                        <Button id="indexAboutButton" aria-controls="simple-menu" aria-haspopup="true" >
                            ABOUT
                        </Button>
                    </Link>
                </div>
                <div>
                     <Button id="indexBlogButton" aria-controls="simple-menu" aria-haspopup="true" href="https://www.blogger.com" target="_blank">
                          BLOG
                     </Button>
                </div>
                <div>
                    <Link to='/contact'>
                        <Button id="indexContactButton" aria-controls="simple-menu" aria-haspopup="true">
                            CONTACT
                        </Button>
                    </Link>
                </div>
                <div>
                 {/* <Button id="indexOtrosButton" variant="contained" color="primary">
                    PROFILE
                 </Button> */}
                </div>
            </div>
        </div>
    )
}

export default Nav;