import React from 'react';
// import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';

import format from 'date-format';

import LocationView from '../LocationView';

import style from './style';

const DATE_FORMAT_PATTERN = 'dd-MM-yyyy hh:mm';

const MeasurementView = ({
    value,
    level,
    description,
    fromDateTime,
    tillDateTime,
    color,
    location
}) => {
    const { rootFont } = style;

    // If date-time-to-format is undefined, asString() will set it to current date-time
    const from = fromDateTime
        ? `From: ${format.asString(DATE_FORMAT_PATTERN, fromDateTime)}`
        : null;
    const till = tillDateTime
        ? `Till: ${format.asString(DATE_FORMAT_PATTERN, tillDateTime)}`
        : null;

    return (
        <View style={[style.root, { backgroundColor: color }]}>
            <View style={style.body}>
                <View style={style.dateContainer}>
                    <Text style={[rootFont, style.text]}>{from}</Text>
                    <Text style={[rootFont, style.text]}>{till}</Text>
                </View>
                <Text style={[rootFont, style.value]}>{value}</Text>
                <Text style={[rootFont, style.level]}>{level}</Text>
                <Text style={[rootFont, style.text]}>{description}</Text>
            </View>
            <View style={style.bottom}>
                <LocationView style={[rootFont, style.text]}>
                    {location}
                </LocationView>
            </View>
        </View>
    );
};

// MeasurementView.propTypes = {
//     props: PropTypes.node.isRequired
// };

export default MeasurementView;
