/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MyMapComponent from './src/Components/MapComponent'
import MyFormComponent from './src/Components/FormComponent'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



const MyDrawerNavigator = createBottomTabNavigator(
  {
    Map: MyMapComponent,
    Form: MyFormComponent,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        // let iconName;
        // if (routeName === 'Home') {
        //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //   // Sometimes we want to add badges to some icons. 
        //   // You can check the implementation below.
        //   IconComponent = HomeIconWithBadge; 
        // } else if (routeName === 'Settings') {
        //   iconName = `ios-options${focused ? '' : '-outline'}`;
        // }

        // You can return any component that you like here!
        return <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />;
      },
    }),
    tabBarOptions: {
      style:{
        backgroundColor:'blue',
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

MyDrawerNavigator.navigationOptions = {
  title: 'MY TITLE',
  header: {
    style: {
      backgroundColor: '#42a5f5',
    }
  },
};

export default  MyApp = createAppContainer(MyDrawerNavigator);

