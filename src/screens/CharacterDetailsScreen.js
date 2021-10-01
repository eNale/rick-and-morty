// Base imports
import React, { useState, useEffect } from 'react';

// UI Components
import {
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';

// Styles
import Styles from './CharacterDetailsScreen.style';

// Store
import * as CharactersActions from '../store/actions/characters';
import { useSelector, useDispatch } from 'react-redux';

// Navigation
import { useRoute } from '@react-navigation/native';

// API
import { NETWORK_REQUEST_FAILED } from '../api/constants';


const CharacterDetailsScreen = () => {

    const route = useRoute();

    // Retrieve values from store
    const state = useSelector(state => state);
    const { characters: { fetchingCharacters } } = state;

    const dispatch = useDispatch();
    const getSingleCharacter = id => dispatch(CharactersActions.getSingleCharacter(id));
    const [characterState, setCharacterState] = useState({});

    useEffect(() => {
        getSingleCharacter(route.params.characterId)
            .then(response => setCharacterState(response.data))
            .catch(err => console.log(NETWORK_REQUEST_FAILED, err));
    }, []);

    const type = characterState.type || 'unknown';
    const { name, species, gender, origin} = characterState;

    const imageSrc = fetchingCharacters ? require('../assets/images/rick-and-morty-bg.png') : { uri: characterState.image };

    return (
        <SafeAreaView style={Styles.safeAreaView}>
            <Image
                style={Styles.image}
                resizeMode={'contain'}
                source={imageSrc}
            />
            <View style={Styles.infoContainer}>
                <Text style={Styles.name}>{name}</Text>
                <Text style={Styles.label}>Species</Text>
                <Text style={Styles.info}>{species}</Text>
                <Text style={Styles.label}>Type</Text>
                <Text style={Styles.info}>{type}</Text>
                <Text style={Styles.label}>Gender:</Text>
                <Text style={Styles.info}>{gender}</Text>
                <Text style={Styles.label}>Place of Origin:</Text>
                <Text style={Styles.info}>{origin?.name}</Text>
            </View>
        </SafeAreaView>
    );
};

export default CharacterDetailsScreen;
