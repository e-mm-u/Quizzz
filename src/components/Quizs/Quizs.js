import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizs.css'

const Quizs = () => {
    const quizs = useLoaderData()['data'];
    const questions = quizs['questions'];
    console.log(quizs);
    console.log(questions);

    return (
        <div className="questions-details-container">
            <h2 className='quiz-name'>{quizs.name} Quizzz</h2>
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