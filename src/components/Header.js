import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">All Books</Link>
            <Link to='/books/add' className="item">Add new</Link>

            <div className="right menu"> 
                <div className="item">Log in</div>
            </div>
        </div>
    );};

export default Header;