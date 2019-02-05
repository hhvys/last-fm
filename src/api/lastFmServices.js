import $ from 'jquery';

const baseUrl = 'http://ws.audioscrobbler.com/2.0?';
const api_key = '95a381fa908959275075bfe72427cece';
const format = 'json';

const getUrlFromParams = params => baseUrl + $.param(params);


export function fetchGenres(limit = 15) {
    const params = {
        method: 'chart.gettoptags',
        api_key,
        format,
        limit
    };
    return fetch(getUrlFromParams(params)).then(res => res.json())
}

