import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import { Dropdown } from 'react-native-material-dropdown';

export default class Lobby extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'Javascript'
    };
  }
  render() {
    let data = [
      {
        value: 'Happy'
      },
      {
        value: 'Sad'
      },
      {
        value: 'Angry'
      }
    ];
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    return (
      <View>
        <Text style={{ fontSize: 40, textAlign: 'center' }} color="#000">
          {name}
        </Text>
        <Text style={styles.waiting}>Waiting for players...</Text>
        <Dropdown label="Sentiment" data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  waiting: {
    fontSize: 30,
    paddingTop: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
