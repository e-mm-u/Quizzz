import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showResult = (option, correctAns) => {
    if (option === correctAns) {
        toast.success('You are RIGHT !', {
            position: toast.POSITION.TOP_CENTER
        });
        console.log('you are right')
    } else {
        toast.error(`OOps, wrong, right ans is "${correctAns}"`, {
            position: toast.POSITION.TOP_CENTER
        });
        console.log('wrong');
        
    }

    return (
        <div>

        </div>
    );
};

export default showResult;