import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Footer from "./Footer/Footer";
import HomePage from "../containers/HomePage/HomePage";
import HeaderSearchBar from "../containers/Header/HeaderSearchBar";

const App = () => {
    return (
        <Router>
            <>
                <HeaderSearchBar />
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:genre" component={HomePage}/>
                <Footer>
                    <Footer.Column
                        header={'Top Songs'}
                        itemList={[{key: 1, content: 'item1', url: 'hh'}, {key: 2, content: 'item2'}]}/>
                </Footer>
            </>
        </Router>
    );
};

export default App;
