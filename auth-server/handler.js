'use strict';

const axios = require('axios');

module.exports.getAccessToken = async(event) => {

    const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access' +
        '?client_id=100295477959-tem3bmq4gjh0pmq56bk4b4qi9b7dqmbu' +
        '&client_secret=466LP0JI7ZTkGUr41Ai-pk_y' +
        '&grant_type=authorization_code' +
        '&redirect_uri=https://mmmenges.github.io/meet/' +
        '&code=' + event.pathParameters.code;

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            access_token: info.data.access_token,
            refresh_token: info.data.refresh_token,
        }),
    };
};

module.exports.refreshAccessToken = async(event) => {

    const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access' +
        '?client_id=p7ek3hd2gcir2hpcvsih91or6d' +
        '&client_secret=pqgonkb21iceki5idn28u6pl5a' +
        '&grant_type=refresh_token' +
        '&refresh_token=' + event.pathParameters.refresh_token;

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            access_token: info.data.access_token,
            refresh_token: info.data.refresh_token,
        }),
    };
};