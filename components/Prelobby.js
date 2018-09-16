import React from 'react';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Prelobby extends React.Component {
  static navigationOptions = {
    title: 'PreLobby'
  };
  constructor() {
    super();
    var config = {
      apiKey: 'AIzaSyBD970a5O3FYQsvmg48dbXzEX-3m2se3So',
      authDomain: 'storybox-hackmit.firebaseapp.com',
      databaseURL: 'https://storybox-hackmit.firebaseio.com',
      projectId: 'storybox-hackmit',
      storageBucket: 'storybox-hackmit.appspot.com',
      messagingSenderId: '716758062079'
    };
    firebase.initializeApp(config);

    this.state = {
      name: ''
    };
  }
  joinLobby() {
    const { name } = this.state;
    this.props.navigation.navigate('Lobby', { name: name });
  }
  render() {
    const { name } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 80, fontSize: 26 }}
          placeholder="Type your name here"
          onChangeText={name => this.setState({ name })}
        />
        <Button
          buttonStyle={{ backgroundColor: 'green' }}
          title="Join Room"
          underlayColor="red"
          disabled={!name}
          onPress={this.joinLobby.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
