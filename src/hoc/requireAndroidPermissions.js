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
import { every } from 'lodash-es';

import { Loader } from '../components';

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

        handleAppStateChange = async (nextAppState) => {
            const { permissions } = this.props;
            const { appState } = this.state;

            if (appState === 'active' && nextAppState.match(/inactive|background/)) {
                console.log('handleAppStateChange1 if');
                this.setState({
                    isGranted: false,
                    isLoading: true,
                    appState: nextAppState
                });
                return;
            }

            console.log('handleAppStateChange1 perm check');
            const allGranted = every(
                permissions,
                async (permission) => await PermissionsAndroid.check(permission)
            );

            if (allGranted) {
                this.setState({
                    isGranted: true,
                    isLoading: false,
                    appState: nextAppState
                });
            }
        }

        // TODO: Show errors properly. Use ErrorBoundary component
        requestPermissions = async () => {
            try {
                const { permissions } = this.props;

                const responseMultiple = await PermissionsAndroid.requestMultiple(permissions);
                const allGranted = every(
                    responseMultiple,
                    (reponse) => reponse === 'granted'
                );

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
            const { root, text } = styles;
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
