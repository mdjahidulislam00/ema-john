import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='main-logo'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/Order-Review">Order-Review</a>
                <a href="/Inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;