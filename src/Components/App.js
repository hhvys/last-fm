import React from 'react';
import './App.css';
import Header from './Header/Header';
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  return (
      <Header>
          <Header.Left className={'w-100 d-flex mr-4 ml-4'}>
              <SearchBar placeholder={'Search for Songs, Album, Artist... '}/>
          </Header.Left>
      </Header>
  );
};

export default App;
