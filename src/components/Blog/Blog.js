import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Welcome to our blog.<br /> Happy reading :) </h1>
            <div className="blog-cards-container">
                <div className="blog-card">
                    <p>What is the purpose of using  <code>'react-router'  </code>  ?</p>
                    <code>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</code>
                </div>
                <div className="blog-card">
                    <p>How does  <code>'context api'</code>  works ?</p>
                    <code>The Context API allows us to have a central store where our data lives (just like in Redux). The store can be inserted into any component directly. We can cut out the middleman! The refactoring is quite easy we don't have to make any changes to how the components are structured.</code>
                </div>
                <div className="blog-card">
                    <p>What is the use of  <code>'useRef'</code>  hook ?</p>
                    <code>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</code>
                </div>
            </div>

        </div>
    );
};

export default Blog;