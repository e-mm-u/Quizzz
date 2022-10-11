import React from 'react';
import Options from '../Options/Options';

const Question = ({ ques }) => {
    const { id, question, options, correctAns } = ques;
    return (
        <div>
            <div className="question">
                {question.slice(3, -4)}
            </div>
            <div className="options">
                <Options options={options}></Options>
            </div>
        </div>
    );
};

export default Question;