import React from 'react';
import Options from '../Options/Options';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEye);

const Question = ({ ques, n }) => {
    const { id, question, options, correctAns } = ques;
    let i = 0;
    return (
        <div className="question">
            <div className='ques-section'>
                <div><p> Quiz {n} : {question.slice(3, -4)}</p></div>
                <div><FontAwesomeIcon icon="fa-solid fa-eye"/></div>
    
            </div>
            <div className="options">
                {
                    options.map(option => {
                        i++;
                        return (
                            <div>
                                <Options n={i} option={option}></Options>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Question;