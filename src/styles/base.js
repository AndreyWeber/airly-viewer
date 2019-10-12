import { StyleSheet, Dimensions } from 'react-native';

/*
 * Definition for all base style properties
 */
export const dimensions = {
    maxHeight: Dimensions.get('window').height, // absolute Max Height
    maxWidth: Dimensions.get('window').width,   // absolute Max Width
    relMaxHeight: '100%',   // relative Max Height
    relMaxWidth: '100%'     // relative Max Width
};

export const colors = {
    background: '#000000',
    transparentBackground: 'rgba(52, 52, 52, 0.2)',
    text: '#ffffff',
    icon: '#ffffff',
    progressBar: '#c0c0c0',
    button: '#841584'
};

export const fonts = {
    small: 15,
    medium: 20,
    large: 60,
    primary: 'AvenirNext-DemiBold'
};

export const icons = {
    size: 30
};

 /*
  * Definition for all base styles
  */
const baseStyles = {
    smallText: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.small
    },
    mediumText: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.medium
    },
    largeText: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.large
    }
};

const createStyles = (overrides = {}) =>
    StyleSheet.create({ ...baseStyles, ...overrides });

export default createStyles;
