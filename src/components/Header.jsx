import React, {useState} from 'react';
import '../App.scss'

function Header() {
    return(
        <div className='header'>
            <nav className='buttons'>
                <a href=''>Our Properties</a>
                <a href=''>Buyers</a>
                <a href=''>Sellers</a>
                <a href=''>About Us</a>
                <a href=''>Contact Us</a>
            </nav>
        </div>
    )
};

export default Header