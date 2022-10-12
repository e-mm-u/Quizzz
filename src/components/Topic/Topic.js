import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id,logo, name, total} = topic;
    return (
        <div className='topic-container'>
            <div>
                <img src={logo} alt="" className="topic-img"/>
            </div>
            <div className="details">
                <p> Topic : <b> {name}</b></p>
                <p><small>Questions : {total}</small></p>
                <button> <Link to={`quiz/${id}`}> Start </Link> </button>
            </div>
        </div>
    );
};

export default Topic;