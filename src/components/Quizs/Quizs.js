import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizs = () => {
    const quizs = useLoaderData()['data'];
    const questions = quizs['questions'];
    console.log(quizs);
    console.log(questions);

    return (
        <div>
            Quiz details 
            <div className="questions-container">
                {
                    questions.map(question => {
                        return <Question ques={question} key={question.id}></Question>
                    })
                }
            </div>
        </div>
    );
};

export default Quizs;