import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, { iconStyle } from './style';

const LocationView = ({
    captionStyle,
    color,
    children
}) => (
    <View style={[styles.root, { backgroundColor: color }]}>
        <Icon
            name="place"
            size={iconStyle.size}
            color={iconStyle.color}
        />
        <Text style={captionStyle}>{children}</Text>
    </View>
);

LocationView.propTypes = {
    captionStyle: PropTypes.object,
    color: PropTypes.string,
    children: PropTypes.element
};

export default LocationView;
