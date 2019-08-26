import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LocationView = ({
    children,
    style
}) => (
    <View style={styles.root}>
        <Icon name="place" size={30} color="#ffffff" />
        <Text style={style}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)', // Check how to set values
        width: '100%',
        paddingVertical: 7
    }
});

export default LocationView;
