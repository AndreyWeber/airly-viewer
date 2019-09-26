import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const LayoutView = ({
    body,
    bottom
}) => (
    <View style={styles.root}>
        <View style={styles.body}>
            {body}
        </View>
        <View style={styles.bottom}>
            {bottom}
        </View>
    </View>
);

LayoutView.propTypes = {
    body: PropTypes.element.isRequired,
    bottom: PropTypes.element.isRequired
};

export default LayoutView;
