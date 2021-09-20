import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='manu'>
            <a href="/home">Home</a>
            <a href="/countries">Countries</a>
            <a href="/about">About Us</a>
        </div>
    );
};

export default Header;