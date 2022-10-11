import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/stat'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default Header;