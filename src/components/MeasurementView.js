import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import format from 'date-format';

const DATE_FORMAT_PATTERN = 'dd-MM-yyyy hh:mm';

const MeasurementView = ({
    value,
    level,
    description,
    fromDateTime,
    tillDateTime,
    color
}) => {
    const { rootFont } = styles;

    // If date-time-to-format is undefined, asString() will set it to current date-time
    const from = fromDateTime
        ? `From: ${format.asString(DATE_FORMAT_PATTERN, fromDateTime)}`
        : null;
    const till = tillDateTime
        ? `Till: ${format.asString(DATE_FORMAT_PATTERN, tillDateTime)}`
        : null;

    return (
        <View style={[styles.root, { backgroundColor: color }]}>
            <View style={styles.body}>
                <View style={styles.dateContainer}>
                    <Text style={[rootFont, styles.text]}>{from}</Text>
                    <Text style={[rootFont, styles.text]}>{till}</Text>
                </View>
                <Text style={[rootFont, styles.value]}>{value}</Text>
                <Text style={[rootFont, styles.level]}>{level}</Text>
                <Text style={[rootFont, styles.text]}>{description}</Text>
            </View>
            <View style={styles.bottom}>
                <Icon name="place" size={30} color="#ffffff" />
                <Text style={[rootFont, styles.text]}>Sdfsdsfd</Text>
            </View>
        </View>
    );
};

// MeasurementView.propTypes = {
//     props: PropTypes.node.isRequired
// };

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.2)', // Check how to set values
        width: '100%',
        paddingVertical: 7
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '40%'
    },
    rootFont: {
        color: '#ffffff',
        fontFamily: 'AvenirNext-DemiBold'
    },
    text: {
        fontSize: 15
    },
    level: {
        fontSize: 20
    },
    value: {
        fontSize: 60
    }
});

export default MeasurementView;
