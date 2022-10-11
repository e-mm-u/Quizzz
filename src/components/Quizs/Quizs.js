import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizs.css'

const Quizs = () => {
    const quizs = useLoaderData()['data'];
    const questions = quizs['questions'];
    let i=0;
    
    return (
        <div className="questions-details-container">
            <h2 className='quiz-name'>{quizs.name} Quizzz</h2>
            <div className="questions-container">
                {
                    questions.map(question => {
                        i++;
                        return <Question n={i} ques={question} key={question.id}></Question>
                    })
                }
            </div>
        </div>
    );
};

export default Quizs;