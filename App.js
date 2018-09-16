import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Lobby from './components/Lobby';
import Prelobby from './components/Prelobby';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Prelobby: { screen: Prelobby },
  Lobby: { screen: Lobby }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
