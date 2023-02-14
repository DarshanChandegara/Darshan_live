import React from 'react';
import './App.css';
import Common from './Common';

const Home = () => {

    return (
        <>
            <Common
                name='Grow your business with'
                img={'https://wallpapercave.com/wp/wp9365425.jpg'}
                visit='/service'
                btnName='Get Started'
            />
        </>
    )
}

export default Home;
