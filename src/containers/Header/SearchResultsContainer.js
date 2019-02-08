import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';

import styles from './SearchResultsContainer.module.scss';
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import {fetchSearchResults} from "../../api/lastFmServices";
import {getImageUrl} from "../../helpers/getSubComponentInstance";
import {imageSize} from "../../api/constants";
import ClickableImage from "../../components/ImageContainer/ClickableImage";
import noResults from '../../rsc/noResults.png';
import loading from '../../rsc/loading.gif';

const SearchResultsContainer = (props) => {

    const {
        searchQuery,
        ...restProps
    } = props;

    let [results, isSearching] = useFetchSearchResults(searchQuery);
    const [resultStored, setResultStored] = useState([]);
    const [resultStoredFor, setResultStoredFor] = useState('');
    const resultsFor = results.query;
    if(resultsFor === searchQuery && (resultStoredFor !== searchQuery || results.results.length > resultStored.length)) {
        setResultStored(results.results);
        setResultStoredFor(searchQuery);
    }
    const failedImage = resultStoredFor !== searchQuery || isSearching ? loading : noResults;

    return (

        (<div className={cx(styles.outer, 'd-flex justify-content-center position-fixed w-100')} {...restProps}>
            <div className={cx(styles.container, 'd-flex mx-2 p-2 flex-wrap overflow-auto justify-content-center')}>
                {
                    (resultStored.length) ?
                        resultStored.map((result, index) => {
                            const resultsOf = result.resultsOf;
                            const imageDetails = result.result.map(item => ({
                                imageUrl: '#',
                                imageSrc: getImageUrl(item, imageSize.MEDIUM),
                                imageText: item.name,
                                imageMeta: resultsOf !== 'artist' ? item.artist : ''
                            }));
                            return (
                                <ImageContainer
                                    key={index}
                                    headerText={resultsOf}
                                    headerButtonUrl={`/search/${result.resultsOf}/${searchQuery}`}
                                    headerButtonText={'View All'}
                                    imageDetails={imageDetails}
                                />
                            )
                        }) : (<ClickableImage imageSrc={failedImage} style={{width: 250}}/>)
                }
            </div>
        </div>)
    )
};


function useFetchSearchResults(query) {

    const [searchResults, setSearchResults] = useState({query, results: []});
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setIsSearching(true);
        const searchFor = ['artist', 'album', 'track'];

        //todo debounce
        Promise.all(searchFor.map(arg => fetchSearchResults(query, arg)))
            .then((results) => {
                const allResults = [];
                results.forEach((result, index) => {
                    const searchResultsOf = searchFor[index];
                    if (_.get(result, `results[${searchResultsOf + 'matches'}][${searchResultsOf}].length`)) {
                        allResults.push({
                            resultsOf: searchResultsOf,
                            result: _.get(result, `results[${searchResultsOf + 'matches'}][${searchResultsOf}]`)
                        })
                    }
                });
                setSearchResults({
                    query,
                    results: allResults
                });
                setIsSearching(false);
            })

    }, [query]);

    return [searchResults, isSearching];

}

SearchResultsContainer.propType = {
    searchQuery: PropTypes.string
};

export default SearchResultsContainer;
