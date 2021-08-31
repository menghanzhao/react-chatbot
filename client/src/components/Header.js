import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-2">
                <Link to={'/'} className='brand-logo'>Sports Club</Link>
                <ul id='nav-mobil' className='right hide-on-med-and-down'>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;