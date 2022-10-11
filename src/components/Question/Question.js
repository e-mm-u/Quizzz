import React from 'react';
import Options from '../Options/Options';
import './Question.css'

const Question = ({ ques,n }) => {
    const { id, question, options, correctAns } = ques;
    let i=0;
    return (
        <div className="question">
            <div >
               <p> Quiz {n} : {question.slice(3, -4)}</p>
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