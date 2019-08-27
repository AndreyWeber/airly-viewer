import { StyleSheet, Dimensions } from 'react-native';

/*
 * Definition for all base style properties
 */
export const dimensions = {
    maxHeight: Dimensions.get('window').height,
    maxWidth: Dimensions.get('window').width
};

 /*
  * Definition for all base styles
  */
const baseStyles = {};

const createStyles = (overrides = {}) =>
    StyleSheet.create({ ...baseStyles, ...overrides });

export default createStyles;
