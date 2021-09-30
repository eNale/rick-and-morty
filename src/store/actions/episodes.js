import * as ActionTypes from '../actionTypes/index';
import * as EpisodesCalls from '../../api/episodes';

/**
 * Requests all available episodes from the server
 * @returns {Promise}
 */
export const getAllEpisodes = params => {
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
            type: ActionTypes.EPISODES_LIST_IN_PROGRESS
        });

        return EpisodesCalls.getAllEpisodes(filters)
            .then(response => {
                dispatch({
                    type: ActionTypes.EPISODES_LIST_SUCCESS,
                    append: page != null && page > 1,
                    results: response.data.results
                });
                return response.data.results;
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.EPISODES_LIST_FAILED,
                    error
                });
                return Promise.reject(error);
            });
    };
};
