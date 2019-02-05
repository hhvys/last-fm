import React, {useState, useEffect} from 'react';

import NavigationRow from "../components/NavigationRow/NavigationRow";
import {fetchGenres} from "../api/lastFmServices";

function GenreNavigationRow(props) {

    const [navigationTabs, setNavigationTabs] = useState([]);

    useEffect(() => {
        fetchGenres()
            .then(res => {
                const tabs = res.tags.tag.map(tag => {
                    return {
                        name: tag.name,
                        id: tag.name
                    }
                });
                setNavigationTabs(tabs);
            })
    }, []);

    return(<NavigationRow navigationTabs = {navigationTabs} {...props}/>);
}

export default GenreNavigationRow;
