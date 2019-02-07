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

export function fetchGenres(limit = 15) {
    const params = {
        method: 'chart.gettoptags',
        limit,
        ...defaultParams
    };
    return fetch(getUrlFromParams(params)).then(res => res.json())
}

export function fetchAlbumsFromGenre(genre, limit = 30) {
    const params = {
        method: 'tag.gettopalbums',
        tag: genre,
        limit,
        ...defaultParams
    };
    return fetchJSONData(params);
}

export function fetchArtistsFromGenre(genre, limit = 20) {
    const params = {
        method: 'tag.getTopArtists',
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
