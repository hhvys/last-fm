import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import SearchBar from "./SearchBar/SearchBar";
import Footer from "./Footer/Footer";
import HomePage from "../containers/HomePage";

const App = () => {
    return (
        <Router>
            <>
                <Header>
                    <Header.Left className={'w-100 d-flex mr-4 ml-4'}>
                        <SearchBar placeholder={'Search for Songs, Album, Artist... '}/>
                    </Header.Left>
                </Header>
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

export default React.memo(App);
