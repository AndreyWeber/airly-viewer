import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import locationViewStyles from './style';

const LocationView = ({
    children,
    style
}) => (
    <View style={locationViewStyles.root}>
        <Icon name="place" size={30} color="#ffffff" />
        <Text style={style}>{children}</Text>
    </View>
);

export default LocationView;
