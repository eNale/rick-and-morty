/**
 * @format
 */

import React from 'react';

// App registry
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Store
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/configureStore';


const PersistentReduxApp = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => PersistentReduxApp);
