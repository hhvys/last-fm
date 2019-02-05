import React from 'react';

import './App.css';
import Header from './Header/Header';
import SearchBar from "./SearchBar/SearchBar";
import Footer from "./Footer/Footer";
import ThumbnailContainer from "./AlbumThumbnail/ThumbnailContainer";
import GenreNavigationRow from "../containers/GenreNavigationRow";

const App = () => {
    return (
        <>
            <Header>
                <Header.Left className={'w-100 d-flex mr-4 ml-4'}>
                    <SearchBar placeholder={'Search for Songs, Album, Artist... '}/>
                </Header.Left>
            </Header>
            <GenreNavigationRow/>
            <ThumbnailContainer style={{width: '100%'}}/>
            <Footer>
                <Footer.Column
                    header={'Top Songs'}
                    itemList={[{key: 1, content: 'item1', url: 'hh'}, {key: 2, content: 'item2'}]}/>
            </Footer>
        </>
    );
};

export default App;
