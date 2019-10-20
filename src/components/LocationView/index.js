import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import tinycolor from 'tinycolor2';

import styles, { iconStyle } from './style';

const LocationView = ({
    captionStyle,
    color,
    children
}) => {
    const rgbaColor = tinycolor(color);
    rgbaColor.setAlpha(0.7);

    return (
        <View style={[styles.root, { backgroundColor: rgbaColor.toRgbString() }]}>
            <Icon
                name="place"
                size={iconStyle.size}
                color={iconStyle.color}
            />
            <Text style={[captionStyle, styles.caption]}>
                {children}
            </Text>
        </View>
    );
};

LocationView.propTypes = {
    captionStyle: PropTypes.object,
    color: PropTypes.string,
    children: PropTypes.string
};

export default LocationView;
