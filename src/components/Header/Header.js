import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>Quizz</Link>
            </div>
            <div className='others'>
                <Link to='/topics'>Topics</Link>
                <Link to='/stat'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>

        </nav>
    );
};

export default Header;