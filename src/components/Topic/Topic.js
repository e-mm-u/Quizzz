import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,logo, name, total} = topic;
    return (
        <div>
            <div className="topic-img">
                <img src={logo} alt="" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{total}</p>
                <button> <Link to={`quiz/${id}`}> Start </Link> </button>
            </div>
        </div>
    );
};

export default Topic;