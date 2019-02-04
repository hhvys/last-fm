import React from 'react';

import './App.css';
import Header from './Header/Header';
import SearchBar from "./SearchBar/SearchBar";
import Footer from "./Footer/Footer";
import ThumbnailContainer from "./AlbumThumbnail/ThumbnailContainer";
import NavigationRow from "./NavigationRow/NavigationRow";

const App = () => {
    return (
        <>
            <Header>
                <Header.Left className={'w-100 d-flex mr-4 ml-4'}>
                    <SearchBar placeholder={'Search for Songs, Album, Artist... '}/>
                </Header.Left>
            </Header>
            <NavigationRow
                navigationTabs = {[
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    },
                    {
                        key: 1,
                        name: 'item1'
                    }
                ]}/>
            <ThumbnailContainer style={{width: '25%'}}/>
            <Footer>
                <Footer.Column
                    header={'Top Songs'}
                    itemList={[{key: 1, content: 'item1', url: 'hh'}, {key: 2, content: 'item2'}]}/>
            </Footer>
        </>
    );
};

export default App;