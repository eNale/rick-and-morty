import * as ActionTypes from '../actionTypes/index';
import { BaseReducer as CharactersReducer } from './base';

const initialState = {
    fetchingCharacters: false,
    charactersList: [],
    character: {}
};

const eventHandlers = {
    [ActionTypes.CHARACTERS_LIST_IN_PROGRESS]: (state, action) => ({
        ...state,
        fetchingCharacters: true
    }),

    [ActionTypes.CHARACTERS_LIST_SUCCESS]: (state, action) => ({
        ...state,
        fetchingCharacters: false,
        charactersList: action.append === false ? action.results : [...state.charactersList, ...action.results]
    }),

    [ActionTypes.CHARACTERS_LIST_FAILED]: (state, action) => ({
        ...state,
        fetchingCharacters: false
    }),

    [ActionTypes.CHARACTER_GET_IN_PROGRESS]: (state, action) => ({
        ...state,
        fetchingCharacters: true
    }),

    [ActionTypes.CHARACTER_GET_SUCCESS]: (state, action) => ({
        ...state,
        fetchingCharacters: false,
        character: action.results
    }),

    [ActionTypes.CHARACTER_GET_FAILED]: (state, action) => ({
        ...state,
        fetchingCharacters: false
    }),
};

export default CharactersReducer(initialState, eventHandlers);
