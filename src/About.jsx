import React from 'react';
import './App.css';
import Common from './Common';

const About = () => {

    return (
        <>
          <Common 
          name = 'Welcome to About page'
          img = {'https://wallpapercave.com/wp/wp3147504.jpg'}
          visit = '/contact' 
          btnName = 'Contact Now'
          />
        </>
    )
}

export default About;
