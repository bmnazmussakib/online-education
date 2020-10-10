import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt=""/>
            <div className='input'>
                <input type="text" placeholder="search"/>
            </div>
            <nav>
                <a href="/Categries">Categries</a>
                <a href="/Best Seller">Best Seller</a>
                <a href="About">About</a>
            </nav>
        </div>
    );
};

export default Header;