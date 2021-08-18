import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import Logo from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <h1> Hype Beast </h1>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option shop'>Shop</Link>
            <Link to='/contact' className='option contact'>Contact</Link>
        </div>
    </div>
)

export default Header; 