import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    PermissionsAndroid,
    Text,
    StyleSheet,
    Button,
    AppState
} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';
// import { forIn } from 'lodash-es';

import { Loader } from '../components';

export default function requireAndroidPermissions(WrappedComponent) {
    class PermittedComponent extends Component {
        static propTypes = {
            permissions: PropTypes.arrayOf(PropTypes.string).isRequired
        };

        state = {
            isGranted: false,
            isLoading: true,
            appState: AppState.currentState,
            permissions: []
        };

        async componentDidMount() {
            AppState.addEventListener('change', this.handleAppStateChange);
            await this.requestPermissions();
        }

        async componentWillUnmount() {
            AppState.removeEventListener('change', this.handleAppStateChange);
        }

        handleAppStateChange = (nextAppState) => {
            console.log('HOC', nextAppState);
            if (
                this.state.appState.match('/inactive|background/') &&
                nextAppState === 'active'
            ) {
                this.requestPermissions();
            }
        }

        // TODO: Show errors properly. Use ErrorBoundary component
        requestPermissions = async () => {
            try {
                const { permissions } = this.props;

                const granted = await PermissionsAndroid.requestMultiple(permissions);

                // console.log('HOC', granted);
                // forIn(granted, (value, key) => {
                //     console.log('key:', key, 'value:', value);
                // });

                if (granted['android.permission.ACCESS_FINE_LOCATION'] === 'granted') {
                    this.setState({
                        isGranted: true,
                        isLoading: false,
                        permissions
                    });
                    return;
                }

                this.setState({
                    isGranted: false,
                    isLoading: false,
                    permissions: []
                });

                // AndroidOpenSettings.generalSettings();
            } catch (err) {
                console.log('PERMISSION ERROR MESSAGE:', err.message);
            }
        }

        render() {
            const { root, text } = styles;
            const { isGranted, isLoading } = this.state;

            console.log('render() -> state.permissions', this.state.permissions);

            return (
                <Loader loading={isLoading} show>
                    {
                        isGranted
                            ? <WrappedComponent {...this.props} />
                            // ? <Text style={text}>Permission granted</Text>
                            :
                            <View style={root}>
                                <Text style={text}>Permissions required</Text>
                                <Button
                                    onPress={AndroidOpenSettings.appDetailsSettings}
                                    title='Open settings'
                                    color='#841584'
                                />
                            </View>
                    }
                </Loader>
            );
        }
    }

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
        text: {
            color: '#ffffff',
            paddingBottom: 15
        }
    });

    return PermittedComponent;
}
