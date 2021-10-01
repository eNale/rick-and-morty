import { StyleSheet } from 'react-native';
import {
    fonts,
    colors,
    SPACE_X_SMALL,
    SPACE_MEDIUM,
    SPACE_LARGE
} from '../styles/index';

export default StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: colors.white
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerContainer: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SPACE_LARGE
    },
    headerTitle: {
        fontSize: fonts.size.xxlarge,
        fontFamily: fonts.Roboto.Black,
        color: colors.app_title
    },
    headerImage: {
        height: 64
    },
    list: {
        paddingHorizontal: SPACE_X_SMALL,
        paddingVertical: SPACE_MEDIUM
    },
    indicator: {
        paddingTop: SPACE_LARGE
    },
    emptyContainer: {
        paddingTop: SPACE_LARGE,
        alignItems: 'center'
    },
    emptyContainerText: {
        fontSize: fonts.size.xxlarge,
        fontFamily: fonts.Roboto.Black,
        color: colors.white
    }
});
