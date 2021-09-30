/**
 * Redux Store Setup
 *
 * - Configure persistence
 * - Set up root reducer
 * - Expose store
 */

// Redux imports
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

// Reducer imports
import { CharactersReducer, EpisodesReducer } from './reducers/index';

/**
 * Generate persistence configurations
 * @param {string} key the redux store key
 * @param {Array.<string>} whitelist the persisted value names
 * @returns {Object} persistence configuration
 */
const persistConfig = (key, whitelist) => ({
    key,
    storage: AsyncStorage,
    whitelist
});

const RootReducer = combineReducers({
    characters: persistReducer(
        persistConfig(
            'characters',
            ['charactersList', 'character']
        ),
        CharactersReducer
    ),
    episodes: persistReducer(
        persistConfig(
            'episodes',
            ['episodesList']
        ),
        EpisodesReducer
    )
});

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
