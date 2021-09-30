import * as ActionTypes from '../actionTypes/index';
import { BaseReducer as EpisodesReducer } from './base';

const initialState = {
    fetchingEpisodes: false,
    episodesList: []
};

const eventHandlers = {
    [ActionTypes.EPISODES_LIST_IN_PROGRESS]: (state, action) => ({
        ...state,
        fetchingEpisodes: true
    }),

    [ActionTypes.EPISODES_LIST_SUCCESS]: (state, action) => ({
        ...state,
        fetchingEpisodes: false,
        episodesList: action.append === false ? action.results : [...state.episodesList, ...action.results]
    }),

    [ActionTypes.EPISODES_LIST_FAILED]: (state, action) => ({
        ...state,
        fetchingEpisodes: false
    })
};

export default EpisodesReducer(initialState, eventHandlers);
