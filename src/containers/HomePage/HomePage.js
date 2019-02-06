import React, {useEffect, useState} from 'react'

import NavigationRow from "../../components/NavigationRow/NavigationRow";
import {fetchGenres} from "../../api/lastFmServices";
import HomePageMain from "./HomePageMain";

const HomePage = (props) => {
    const navigationTabs = useFetchGenres(props);
    const genre = props.match.params.genre;

    return (
        <>
            <NavigationRow navigationTabs={navigationTabs}/>
            <HomePageMain genre={genre}/>
        </>
    );
};

function useFetchGenres(props) {
    const genre = props.match.params.genre;
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
                if (!genre) {
                    props.history.push(tabs[0].name)
                }
            })
    }, []);
    return navigationTabs;
}


export default HomePage;
