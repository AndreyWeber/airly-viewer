import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';

import format from 'date-format';

// import LocationView from '../LocationView';

import styles from './style';

const DATE_FORMAT_PATTERN = 'dd-MM-yyyy hh:mm';

const MeasurementView = ({
    value,
    level,
    description,
    fromDateTime,
    tillDateTime,
    color
}) => {
    // If date-time-to-format is undefined, asString() will set it to current date-time,
    // so we need to set null value explicitly to avoid displaying wrong values
    const from = fromDateTime
        ? `From: ${format.asString(DATE_FORMAT_PATTERN, fromDateTime)}`
        : null;
    const till = tillDateTime
        ? `Till: ${format.asString(DATE_FORMAT_PATTERN, tillDateTime)}`
        : null;

    return (
        <View style={[styles.root, { backgroundColor: color }]}>
            <View style={styles.dateContainer}>
                <Text style={styles.smallText}>{from}</Text>
                <Text style={styles.smallText}>{till}</Text>
            </View>
            <Text style={styles.largeText}>{value}</Text>
            <Text style={styles.mediumText}>{level}</Text>
            <Text style={styles.smallText}>{description}</Text>
        </View>
    );
};

MeasurementView.propTypes = {
    value: PropTypes.number,
    level: PropTypes.string,
    description: PropTypes.string,
    fromDateTime: PropTypes.object,
    tillDateTime: PropTypes.object,
    color: PropTypes.string
};

export default MeasurementView;
