import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
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

    const from = format.asString(DATE_FORMAT_PATTERN, fromDateTime);
    const till = format.asString(DATE_FORMAT_PATTERN, tillDateTime);

    // TODO: Get to know why static text can be seen on app reload.
    //       Looks like was already rendered, on the level above,
    //       while its status as yet "loading"
    return (
        <View style={[styles.root, { backgroundColor: color }]}>
            <View style={styles.dateContainer}>
                <Text style={[rootFont, styles.text]}>From: {from}</Text>
                <Text style={[rootFont, styles.text]}>Till: {till}</Text>
            </View>
            <Text style={[rootFont, styles.value]}>{value}</Text>
            <Text style={[rootFont, styles.level]}>{level}</Text>
            <Text style={[rootFont, styles.text]}>{description}</Text>
        </View>
    );
};

// MeasurementView.propTypes = {
//     props: PropTypes.node.isRequired
// };

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
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
