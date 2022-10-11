import React from 'react';
import showResult from '../../utilities/showResult';
import './Options.css';
import { ToastContainer } from 'react-toastify';

const Options = ({ n, option, correctAns }) => {

    return (
        <div className='option'>
            <div onClick={() => showResult(option, correctAns)} >{n}  .  {option}</div>

            <ToastContainer />
        </div>
    );
};

export default Options;