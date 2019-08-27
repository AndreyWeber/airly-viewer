import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    PermissionsAndroid,
    Text,
    Button,
    AppState
} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';

import Aigle from 'aigle';

import style from './style';

import { Loader } from '../../components';

export default function requireAndroidPermissions(WrappedComponent) {
    class PermittedComponent extends Component {
        static propTypes = {
            permissions: PropTypes.arrayOf(PropTypes.string).isRequired
        };

        state = {
            appState: AppState.currentState,
            isGranted: false,
            isLoading: true
        };

        async componentDidMount() {
            AppState.addEventListener('change', this.handleAppStateChange);

            await this.requestPermissions();
        }

        async componentWillUnmount() {
            AppState.removeEventListener('change', this.handleAppStateChange);
        }

        handleAppStateChange = (nextAppState) => {
            const { permissions } = this.props;
            const { appState } = this.state;

            if (
                appState === 'active' &&
                nextAppState.match(/inactive|background/)
            ) {
                this.setState({
                    isGranted: false,
                    isLoading: true,
                    appState: nextAppState
                });
                return;
            }

            Aigle.resolve(permissions)
                .every(async (permission) => await PermissionsAndroid.check(permission))
                .then(
                    result => {
                        if (!result) {
                            return;
                        }

                        this.setState({
                            isGranted: true,
                            isLoading: false,
                            appState: nextAppState
                        });
                    }
                );
        }

        // TODO: Show errors properly. Use ErrorBoundary component
        requestPermissions = async () => {
            try {
                const { permissions } = this.props;

                const allGranted = Object
                    .values(await PermissionsAndroid.requestMultiple(permissions))
                    .every(response => response === 'granted');

                if (allGranted) {
                    this.setState({
                        isGranted: true,
                        isLoading: false
                    });
                    return;
                }

                this.setState({
                    isGranted: false,
                    isLoading: false
                });
            } catch (err) {
                console.log('PERMISSION ERROR MESSAGE:', err.message);
            }
        }

        render() {
            const { root, text } = style;
            const { isGranted, isLoading } = this.state;

            return (
                <Loader loading={isLoading} show>
                    {
                        isGranted
                            ? <WrappedComponent {...this.props} />
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

    return PermittedComponent;
}
