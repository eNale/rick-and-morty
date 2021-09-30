import * as ActionTypes from '../actionTypes/index';
import * as CharacterCalls from '../../api/characters';

/**
 * Requests all available characters from the server
 * @returns {Promise}
 */
export const getAllCharacters = params => {
    const { page, ...restParams } = params;

    let filters = {
        ...restParams,
        page
    };

    if (page != null) {
        filters.page = page;
    }

    return dispatch => {
        dispatch({
            type: ActionTypes.CHARACTERS_LIST_IN_PROGRESS
        });

        return CharacterCalls.getAllCharacters(filters)
            .then(response => {
                dispatch({
                    type: ActionTypes.CHARACTERS_LIST_SUCCESS,
                    append: page != null && page > 1,
                    results: response.data
                });
                return response;
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.CHARACTERS_LIST_FAILED,
                    error
                });
                return Promise.reject(error);
            });
    };
};

/**
 * Requests a single characters from the server
 * @param id the id of the character to be retrieved
 * @returns {Promise}
 */
export const getSingleCharacter = id => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CHARACTER_GET_IN_PROGRESS,
            id
        });

        return CharacterCalls.getSingleCharacter(id)
            .then(response => {
                dispatch({
                    type: ActionTypes.CHARACTER_GET_SUCCESS,
                    results: response.data
                });
                return response;
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.CHARACTER_GET_FAILED,
                    error
                });
                return Promise.reject(error);
            });
    };
};
