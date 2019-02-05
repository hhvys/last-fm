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

export function fetchAlbumsFromGenres(genre, limit = 30) {
    const params = {
        method: 'tag.gettopalbums',
        tag: genre,
        limit,
        ...defaultParams
    };
    return fetchJSONData(params);
}

