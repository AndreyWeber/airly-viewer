import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    RefreshControl,
    StyleSheet,
    PermissionsAndroid } from 'react-native';
import { find } from 'lodash-es';
import Geolocation from 'react-native-geolocation-service';

import {
    ScrollViewPermitted,
    MeasurementView,
    MeasurementViewPermitted,
    Loader } from './src/components';

import { getRawMeasurementsNearestTo, getRawIndexesMetadata } from './src/api';

/**
 * TODO:
 * 1. Initial load. Create some HOC ??? Check it on real device
 * 2. Correctly handle case when user denied to grant geolocation permission
 * 3. Put permission checking into proper lifecycle method or HOC
 * 4. Put getting data to proper lifecycle method
 * + 5. Add reload buttor or swipe gesture to reload via ScrollView
 */


export default class App extends Component {
    state = {
        isLoading: true,
        data: {}
    };

    componentDidMount = async () => {
        // console.log('componentDidMount');
        // this.asyncRequest = this.checkPermission();
        // await this.asyncRequest;
        this.refresh();
    }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    // componentWillUnmount() {
    //     console.log('asyncRequest', this.asyncRequest);
    //     if (this.asyncRequest) {
    //         this.asyncRequest.cancel();
    //     }
    // }

    loadData = async (latitude, longitude) => {
        try {
            // TODO: Move all to API ???

            // lat = 51.1013677, lng = 16.9453748 - Home coordinates for test
            const rawData = await getRawMeasurementsNearestTo(
                latitude,
                longitude
            );
            const rawMetadata = await getRawIndexesMetadata();

            // TODO: Move 'AIRLY_CAQI' to exported const to API ???
            const filterCondition = ['name', 'AIRLY_CAQI'];
            const rawIndexData = find(rawData.current.indexes, filterCondition);
            const rawIndexMetadata = find(rawMetadata, filterCondition);

            const levelMetadata = find(
                rawIndexMetadata.levels,
                ['level', rawIndexData.level]
            );

            const { fromDateTime, tillDateTime } = rawData.current;
            this.setState({
                isLoading: false,
                data: {
                    value: rawIndexData.value,
                    level: levelMetadata.description,
                    description: rawIndexData.description,
                    fromDateTime: new Date(fromDateTime),
                    tillDateTime: new Date(tillDateTime),
                    color: rawIndexData.color
                }
            });
        } catch (err) {
            // TODO: handle this correctly
            console.log('ERROR MESSAGE:', err.message);
        }
    }

    // TODO: Add proper error handlig (ErrorBoundary)
    refresh = () => {
        // Geolocation.getCurrentPosition(
        //     async position => {
        //         console.log('position', position);
        //         const {
        //             latitude,
        //             longitude
        //         } = position.coords;

        //         await this.loadData(latitude, longitude);

        //         // console.log('coords', latitude, longitude);
        //     },
        //     error => {
        //         console.log(error.code, error.message);
        //     },
        //     {
        //         enableHighAccuracy: true,
        //         timeout: 15000,
        //         maximumAge: 10000
        //     }
        // );
        this.setState({
            isLoading: false
        });
    }

    // TODO: Add global error handling component (hoc ?)
    //       It should handle error with help of new React
    //       lifecycle method
    render() {
        //console.log('from render', this.state);
        const {
            value,
            level,
            description,
            fromDateTime,
            tillDateTime,
            color
        } = this.state.data;
        const { isLoading } = this.state;

        return (
            // <ScrollViewPermitted
            //     contentContainerStyle={styles.root}
            //     horizontal={false}
            //     refreshControl={
            //         <RefreshControl
            //             refreshing={isLoading}
            //             onRefresh={this.refresh}
            //         />
            //     }
            //     permissions={[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]}
            // >
            <ScrollViewPermitted
                contentContainerStyle={styles.root}
                horizontal={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={this.refresh}
                    />
                }
                permissions={[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]}
            >
                <View>
                    <Text style={styles.txt}>Measure</Text>
                </View>
                {/* <Loader loading={isLoading} show={false}>
                    <MeasurementView
                        value={value}
                        level={level}
                        description={description}
                        fromDateTime={fromDateTime}
                        tillDateTime={tillDateTime}
                        color={color}
                    />
                </Loader> */}
                {/* <MeasurementViewPermitted
                    value={value}
                    level={level}
                    description={description}
                    fromDateTime={fromDateTime}
                    tillDateTime={tillDateTime}
                    color={color}
                    permissions={[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]}
                /> */}
            </ScrollViewPermitted>
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
    txt: {
        color: '#c0c0c0'
    }
});
