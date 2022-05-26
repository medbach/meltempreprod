import React from 'react';
import {Route,Routes} from "react-router-dom"
import Contact from '../pages/Contact';
import Detailannonces from '../pages/Detailannonces';
import Home from '../pages/Home';
import Inscription from '../pages/Inscription';
import Listing from '../pages/Listing';
import Login from '../pages/Login';
import Noutfound from '../pages/Noutfound';
import Secret from '../pages/Secret';
import TeplateSearch from '../pages/TeplateSearch';

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/listing" exact element={<Listing/>} />
                <Route path="/detailannonces/:id" exact element={<Detailannonces/>} />
                <Route path="/search/ville/:ville" exact element={<TeplateSearch/>} />
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/inscription" exact element={<Inscription/>} />
                <Route path="/login" exact element={<Login/>} />
                <Route path="/secret" exact element={<Secret/>} />
                <Route element={<Noutfound/>} />
            </Routes>
        </div>
    );
};

export default Allroutes;