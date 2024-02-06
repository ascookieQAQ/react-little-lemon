import React from 'react';

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className='about-img'>
                <div className='inner'>
                    <img src={require('../images/chefs-2.jpg')} alt="Little Lemon Chefs"></img>
                </div>
                <div className='inner'>
                    <img src={require('../images/chefs-1.jpg')} alt="Little Lemon Chefs"></img>
                </div>
            </div>
        </div>
    );
};

export default About;