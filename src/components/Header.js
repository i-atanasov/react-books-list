import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return ( 
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">All Books</Link>
            <Link to='/books/my' className="item">My Books</Link>
            <Link to='/books/add' className="item">Add new</Link>

            <div className="right menu"> 
                <GoogleAuth />

            </div>
        </div>
    );};

export default Header;