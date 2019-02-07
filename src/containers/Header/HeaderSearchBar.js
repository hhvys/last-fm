import React, {useState} from 'react';
import $ from 'jquery';

import Header from "../../components/Header/Header";
import SearchResultsContainer from "./SearchResultsContainer";
import SearchBar from '../../components/SearchBar/SearchBar';

const HeaderSearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);

    function onChange(event) {
        setSearchQuery(event.target.value);
        setShowSearchResults(!!event.target.value.length);
    }

    $(document).on('click','html',function(){
        setShowSearchResults(false);
    });

    return (
        <>
            <Header>
                <Header.Left className={'w-100 d-flex mr-4 ml-4'}>
                    <SearchBar
                        searchQuery={searchQuery}
                        onChange={onChange}
                        placeholder={'Search for Songs, Album, Artist... '}
                    />
                </Header.Left>
            </Header>
            {
                showSearchResults ?
                    <SearchResultsContainer searchQuery={searchQuery}/> :
                    null
            }

        </>
    )
};

export default HeaderSearchBar;
