import React from 'react';
import Contact from './Contact';
import Cro from '../component/Cro';
import Decorate from '../component/Decorate';
import Services from '../component/Services';

const Home = () => {
    return (
        <div>
            <Cro />
            <Decorate />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;