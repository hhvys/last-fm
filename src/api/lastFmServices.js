import $ from 'jquery';

const baseUrl = 'http://ws.audioscrobbler.com/2.0?';
const api_key = '95a381fa908959275075bfe72427cece';
const format = 'json';
const defaultParams = {
    api_key,
    format
};

const getUrlFromParams = params => baseUrl + $.param(params);
const fetchJSONData = params => fetch(getUrlFromParams(params)).then(res => res.json());

export function fetchTopCharts(chartsFor, limit = 15) {
    const params = {
        method: `chart.gettop${chartsFor}s`,
        limit,
        ...defaultParams
    };
    return fetch(getUrlFromParams(params)).then(res => res.json())
}

export function fetchFromGenre(fetchFor, genre, limit = 30) {
    const params = {
        method: `tag.gettop${fetchFor}s`,
        tag: genre,
        limit,
        ...defaultParams
    };
    return fetchJSONData(params);
}

export const fetchSearchResults = function (query, searchFor, limit = 3) {
    const params = {
        method: `${searchFor}.search`,
        [searchFor]: query,
        limit,
        ...defaultParams
    };

    return fetchJSONData(params);
};
