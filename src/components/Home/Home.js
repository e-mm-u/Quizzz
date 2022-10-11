import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics_raw = useLoaderData();
    const topics = topics_raw['data'];
    return (
        <div className='topics-container'>
            {
                topics.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
            }
        </div>
    );
};

export default Home;