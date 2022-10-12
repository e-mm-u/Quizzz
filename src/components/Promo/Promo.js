import React from 'react';
import './Promo.css';
import didUKnow from '../../images/did-you-know.webp';
import waiting from '../../images/what-are-you-waiting-for.webp';
import show from '../../images/quiz-show.webp';

const Promo = () => {
    return (
        <div className='promo'>
            <div className="first">
                <img src={didUKnow} alt="" />
                <p>Like you, more people're preparing for their first tech-job. Take quizes to compare how compatible you are.</p>
            </div>
            <div className="second">
                <div>
                    <img src={waiting} alt=""/>
                    <p>What are you waiting for? Start a quiz now!</p>
                </div>
                <img src={show} alt="" />
            </div>
        </div>
    );
};

export default Promo;