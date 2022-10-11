import React from 'react';

const Topic = ({topic}) => {
    const {logo, name, total} = topic;
    return (
        <div>
            <div className="topic-img">
                <img src={logo} alt="" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{total}</p>
            </div>
        </div>
    );
};

export default Topic;