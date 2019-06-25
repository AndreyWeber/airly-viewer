import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet
} from 'react-native';

const Loader = ({
    children,
    loading,
    show
}) => {
    const { root, indicator } = styles;

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

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    indicator: {
        paddingTop: 10,
        fontSize: 15,
        color: '#c0c0c0'
    }
});

export default Loader;
