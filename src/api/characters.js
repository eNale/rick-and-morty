import axios from 'axios';
import { API_BASE_URL } from './constants';
import { buildQueryString } from './utils';

/**
 * Get the list of all available characters
 * @param {Object} filters Network request filters
 * @returns {Promise} Axios request promise
 */
export const getAllCharacters = (filters: Object = {}) => {
    const query = {
        ...filters
    };

    return axios.request({
        method: 'get',
        url: `${API_BASE_URL}/character${buildQueryString(query)}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

/**
 * Get a single character
 * @param id the id of the character
 * @returns {Promise} Axios request promise
 */
export const getSingleCharacter = (id: number) => {
    return axios.request({
        method: 'get',
        url: `${API_BASE_URL}/character/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
