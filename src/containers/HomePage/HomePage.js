import React, {useEffect, useState} from 'react'

import NavigationRow from "../../components/NavigationRow/NavigationRow";
import {fetchTopCharts} from "../../api/lastFmServices";
import HomePageMain from "./HomePageMain";

const HomePage = (props) => {
    const navigationTabs = useFetchTopCharts('tag');
    const genre = props.match.params.genre;

    if(!genre && navigationTabs.length)
        props.history.push(navigationTabs[0].name);

    return (
        <>
            <NavigationRow navigationTabs={navigationTabs}/>
            <HomePageMain genre={genre}/>
        </>
    );
};

export function useFetchTopCharts(chartsFor) {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetchTopCharts(chartsFor)
            .then(res => {
                const charts = res[chartsFor + 's'][chartsFor].map(chart => {
                    return {
                        name: chart.name,
                        id: chart.name
                    }
                });
                setState(charts);
            })
    }, []);
    return state;
}


export default HomePage;
