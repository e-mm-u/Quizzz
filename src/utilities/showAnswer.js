import React from 'react';
import { toast } from 'react-toastify';


const showAnswer = (correctAnswer) => {
    toast.info(`The answer is "${correctAnswer}"`, {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div>
            
        </div>
    );
};

export default showAnswer;