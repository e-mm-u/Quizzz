import React from 'react';
import Options from '../Options/Options';
import './Question.css'

const Question = ({ ques }) => {
    const { id, question, options, correctAns } = ques;
    return (
        <div className="question">
            <div >
               <p> {question.slice(3, -4)}</p>
            </div>
            <div className="options">
                {
                    options.map(option => {
                        return (
                            <div>
                                <Options option={option}></Options>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Question;