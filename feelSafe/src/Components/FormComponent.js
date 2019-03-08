import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


export default class MyFormComponent extends React.Component {

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });