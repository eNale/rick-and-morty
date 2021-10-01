import { StyleSheet } from 'react-native';
import { fonts, colors, SPACE_SMALL, SPACE_XX_SMALL } from '../styles/index';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.gray_card,
        marginBottom: 20,
        borderRadius: 8,
        flexDirection: 'row',
        marginHorizontal: SPACE_XX_SMALL
    },
    image: {
        flex: 0.4,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8
    },
    infoContainer: {
        flex: 0.6,
        flexDirection: 'column',
        paddingStart: SPACE_SMALL,
        paddingVertical: SPACE_SMALL,
        paddingEnd: SPACE_SMALL
    },
    name: {
        fontSize: fonts.size.xxlarge,
        fontFamily: fonts.Roboto.Bold,
        color: colors.less_white
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusText: {
        fontSize: fonts.size.medium,
        fontFamily: fonts.Roboto.Medium,
        color: colors.less_white,
        paddingStart: SPACE_XX_SMALL
    },
    statusCircle: {
        width: 8,
        height: 8,
        borderRadius: 8
    },
    label: {
        fontSize: fonts.size.small,
        fontFamily: fonts.Roboto.Regular,
        color: colors.light_gray,
        paddingTop: SPACE_SMALL
    },
    info: {
        fontSize: fonts.size.medium,
        fontFamily: fonts.Roboto.Medium,
        color: colors.less_white,
        paddingTop: SPACE_XX_SMALL
    }
});
