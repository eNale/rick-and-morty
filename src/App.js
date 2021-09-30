/**
 * Rick and Morty App
 * TODO: repo url here
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import PropTypes from 'prop-types';

// UI Components
import {
    SafeAreaView,
    useColorScheme,
    View,
    FlatList,
    Text
} from 'react-native';

// Styles
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

// Store
import * as CharactersActions from './store/actions/characters';
import { useSelector, useDispatch } from 'react-redux';

const App: () => Node = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const charactersList = useSelector(state => state.characters.charactersList);
    // const singleCharacter = useSelector(state => state.characters.character);
    const dispatch = useDispatch();
    const getAllCharacters = filters => dispatch(CharactersActions.getAllCharacters(filters));
    // const getSingleCharacter = id => dispatch(CharactersActions.getSingleCharacter(id));

    const [charactersListState, setCharactersList] = useState([]);

    useEffect(() => {
        getAllCharacters({ page: 2 })
            .then(response => {
                setCharactersList(response.data.results);
                console.warn('response.data.results', response.data.results);
                console.warn('charactersListState', charactersListState);
            })
            .catch(err => console.log('Something went wrong'));
    }, []);

    const _onRenderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        );
    };

    _onRenderItem.propTypes = {
        item: PropTypes.object
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <FlatList
                // refreshControl={}
                contentContainerStyle={{paddingHorizontal: 8}}
                data={charactersListState || charactersList.results}
                keyExtractor={item => item.id.toString()}
                renderItem={_onRenderItem}
                // ListEmptyComponent={}
                // ListFooterComponent={}
            />
        </SafeAreaView>
    );
};

export default App;
