import { StyleSheet } from 'react-native';
import {
    fonts,
    colors,
    SPACE_SMALL,
    SPACE_X_SMALL,
    SPACE_XX_SMALL
} from '../styles/index';

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background
    },
    image: {
        aspectRatio: 1,
    },
    infoContainer: {
        alignItems: 'center',
        paddingTop: SPACE_X_SMALL
    },
    name: {
        fontSize: fonts.size.xxlarge,
        fontFamily: fonts.Roboto.Black,
        color: colors.less_white
    },
    info: {
        fontSize: fonts.size.medium,
        fontFamily: fonts.Roboto.Medium,
        color: colors.less_white,
        paddingStart: SPACE_XX_SMALL
    },
    label: {
        fontSize: fonts.size.small,
        fontFamily: fonts.Roboto.Regular,
        color: colors.light_gray,
        paddingTop: SPACE_SMALL
    }
});
