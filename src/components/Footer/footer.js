import React, {Fragment, useState} from "react";
import {Avatar, Button, MenuItem, Menu, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './footer.css';

const Footer = () => {


    return (
        <div id = "FOOTER">
            <div id = "FooterButtons">
                <div>
                <a href="default.asp" target="_blank">About Us</a>
                </div>
                <div>
                <a href="default.asp" target="_blank">Contact</a>
                </div>
            </div>
        </div>
    )

}

export default Footer;