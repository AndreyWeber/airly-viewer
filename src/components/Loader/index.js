import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native';

import style from './style';

const Loader = ({
    children,
    loading,
    show
}) => {
    const { root, indicator } = style;

    return (
        <View style={root}>
            {
                loading
                    ? (
                        <View>
                            <ActivityIndicator
                                size={60}
                                color={indicator.color}
                                animating={show}
                            />
                            <Text
                                style={show
                                    ? indicator
                                    : [indicator, { color: '#000000' }]
                                }
                            >
                                Loading...
                            </Text>
                        </View>
                    )
                    : children
            }
        </View>
    );
};

Loader.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired
};

export default Loader;
