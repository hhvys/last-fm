import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import HomePage from "../containers/HomePage/HomePage";
import HeaderSearchBar from "../containers/Header/HeaderSearchBar";
import FooterContainer from "../containers/Footer/FooterContainer";

const App = () => {
    return (
        <Router>
            <>
                <HeaderSearchBar />
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:genre" component={HomePage}/>
                <FooterContainer/>
            </>
        </Router>
    );
};

export default App;
