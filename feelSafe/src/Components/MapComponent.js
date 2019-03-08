

import MapView from 'react-native-maps';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


export default class MyMapComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
    }

    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
      
      onRegionchange(region) {
        this.setState({ region });
      }


    render() {
      return (
        <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        loadingEnabled
        region={this.state.region}
        onRegionChange={(region) => this.onRegionchange(region)}
    />
      );
    }
  }


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
  });