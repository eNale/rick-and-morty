import axios from 'axios';
import { API_BASE_URL } from './constants';
import { buildQueryString } from './utils';

/**
 * Get a list of all Rick and Morty episodes
 * @param {Object} filters Network request filters
 * @returns {Promise} Axios request promise
 */
export const getAllEpisodes = (filters: Object = {}) => {
    const query = {
        ...filters
    };

    return axios.request({
        method: 'get',
        url: `${API_BASE_URL}/episode${buildQueryString(query)}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
