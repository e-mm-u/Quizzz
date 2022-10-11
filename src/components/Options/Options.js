import React from 'react';
import './Options.css'
const Options = ({n, option }) => {
    return (
        <div className='option'>
           {n}  .  {option}
        </div>
    );
};

export default Options;