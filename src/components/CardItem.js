// Base imports
import React from 'react';
import PropTypes from 'prop-types';

// UI Components
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

// Styles
import Styles from './CardItem.style';
import { colors } from '../styles/index';


const CardItem = ({ item, firstSeenIn, onCardItemPress }) => {
    let statusColor;
    if (item.status === 'Alive') {
        statusColor = colors.green;
    } else if (item.status === 'Dead') {
        statusColor = colors.red;
    } else {
        statusColor = colors.light_gray;
    }
    return (
        <TouchableOpacity onPress={onCardItemPress}>
            <View style={Styles.container}>
                <Image
                    style={Styles.image}
                    resizeMode={'cover'}
                    source={{ uri: item.image }}
                />
                <View style={Styles.infoContainer}>
                    <Text style={Styles.name}>{item.name}</Text>
                    <View style={Styles.statusContainer}>
                        <View style={[Styles.statusCircle, { backgroundColor: statusColor }]} />
                        <Text style={Styles.statusText}>{`${item.status} - ${item.species}`}</Text>
                    </View>
                    <Text style={Styles.label}>Last known location:</Text>
                    <Text style={Styles.info}>{item.location?.name}</Text>
                    <Text style={Styles.label}>First seen in:</Text>
                    <Text style={Styles.info}>{firstSeenIn}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

CardItem.propTypes = {
    item: PropTypes.shape({
        status: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        species: PropTypes.string,
        location: PropTypes.shape({
            name: PropTypes.string
        })
    }),
    firstSeenIn: PropTypes.string,
    onCardItemPress: PropTypes.func
};

export default CardItem;
