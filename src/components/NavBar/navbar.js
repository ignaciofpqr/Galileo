import React from "react";
import {Button} from '@material-ui/core';
import './navbar.css';
import {Link} from 'react-router-dom';

const Nav = () => {


    return (
        <div id="top">
            <div id = "NavBarButtons">
                    <div className="LogoConteiner">
                     <Link to="/"> <input type="Image" src="https://i.ibb.co/ByvfBhX/NACHO-03.png" height="55" width="55"/></Link>
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
            </div>
        </div>
    )
}

export default Nav;