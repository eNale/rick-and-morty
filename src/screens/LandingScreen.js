// Base imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// UI Components
import {
    SafeAreaView,
    FlatList,
    Button,
    Text,
    View,
    ImageBackground,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { CardItem } from '../components/index';

// Styles
import Styles from './LandingScreen.style';
import { colors } from '../styles/index';

// Store
import * as CharactersActions from '../store/actions/characters';
import * as EpisodesActions from '../store/actions/episodes';
import { useSelector, useDispatch } from 'react-redux';

// Navigation
import { useNavigation } from '@react-navigation/native';

// API
import { NETWORK_REQUEST_FAILED } from '../api/constants';


const LandingScreen = () => {

    const navigation = useNavigation();

    // Retrieve values from store
    const state = useSelector(state => state);
    const {
        episodes: { episodesList },
        characters: { charactersList, fetchingCharacters }
    } = state;

    const dispatch = useDispatch();
    const getAllCharacters = filters => dispatch(CharactersActions.getAllCharacters(filters));
    const getAllEpisodes = filters => dispatch(EpisodesActions.getAllEpisodes(filters));

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    // Fetch first page of characters and all episodes on mount
    useEffect(() => {
        getAllCharacters({ page })
            .catch(err => console.log(NETWORK_REQUEST_FAILED, err));

        // 'episodes' endpoint has exactly 3 pages...
        for (let page = 1; page <= 3; page++) {
            getAllEpisodes({ page })
                .catch(err => console.log(NETWORK_REQUEST_FAILED, err));
        }
    }, []);

    // Fetch next page of characters everytime 'Load more' is pressed
    useEffect(() => {
        getAllCharacters({ page })
            .catch(err => console.log(NETWORK_REQUEST_FAILED, err));
    }, [page]);

    const _onRenderItem = ({ item }) => {
        /**
         * Regex that retrieves the series of characters from
         * the end of the string that don't contain a slash
         *
         * The string is the url of the first episode in the list of episodes
         * We need the episode id to get it's name,
         * because it doens't exist in the 'character' endpoint
         */
        const firstSeenInEpisodeId = parseInt(/[^/]*$/.exec(item.episode[0])[0]);
        const firstSeenIn = episodesList.find(obj => obj.id === firstSeenInEpisodeId);

        return (
            <CardItem
                item={item}
                firstSeenIn={firstSeenIn?.name}
                onCardItemPress={() => navigation.navigate('CharacterDetailsScreen', { characterId: item.id })}
            />
        );
    };

    _onRenderItem.propTypes = {
        item: PropTypes.object
    };

    const _onRenderEmptyContainer = () => {
        return (
            <View style={Styles.emptyContainer}>
                <Text style={Styles.emptyContainerText}>{'Let\'s Get Schwifty!!!'}</Text>
            </View>
        );
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        getAllCharacters({ page: 1 })
            .then(setIsRefreshing(false))
            .catch(err => console.log(NETWORK_REQUEST_FAILED, err));
    };

    return (
        <>
            <SafeAreaView style={Styles.safeAreaTop} />
            <SafeAreaView style={Styles.safeAreaBottom}>
                <View style={Styles.headerContainer}>
                    <ImageBackground
                        source={require('../assets/images/rick-and-morty-bg-darker.png')}
                        resizeMode='contain'
                        style={Styles.headerImage}>
                        <Text style={Styles.headerTitle}>The Rick and Morty API</Text>
                    </ImageBackground>
                </View>
                {(!fetchingCharacters && page === 1) || page > 1
                    ? <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={handleRefresh}
                                tintColor={colors.light_gray} />}
                        contentContainerStyle={Styles.list}
                        data={charactersList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={_onRenderItem}
                        ListEmptyComponent={_onRenderEmptyContainer}
                        ListFooterComponent={
                            <Button
                                onPress={() => setPage(page + 1)}
                                title={'Load more'}
                                color={colors.white}/>
                        }
                    />
                    : <ActivityIndicator animating={true} style={Styles.indicator} />
                }
            </SafeAreaView>
        </>
    );
};

export default LandingScreen;
