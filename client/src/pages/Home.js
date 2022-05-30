import React from 'react';
import Contact from './Contact';
import Cro from '../component/Cro';
import Decorate from '../component/Decorate';
import Services from '../component/Services';
import Slider from '../component/Slider';

const Home = () => {
    
    return (
        <div>
            <Slider />
            <Cro />
            <Decorate />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;