import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import { Dropdown } from 'react-native-material-dropdown';

export default class Lobby extends React.Component {
  static navigationOptions = {
    title: 'Lobby',
    headerLeft: null
  };
  constructor(props) {
    super(props);
    this.handleBack.bind(this);
    firebase
      .database()
      .ref('/startGame')
      .on('child_changed', snapshot => {
        if (snapshot.val) {
          // navigate to game room and then use giphy
        }
      });
  }
  handleBack() {
    const { navigation } = this.props;
    const key = navigation.getParam('key');
    firebase
      .database()
      .ref('users')
      .child(key)
      .remove();
    navigation.navigate('Prelobby');
  }
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    // firebase
    //   .database()
    //   .ref('/users/')
    //   .once('value')
    //   .then(data => {
    //     let response = data.val();
    //     let names = [];
    //     response.forEach(player => {
    //       names.push(player.name);
    //     });
    //     console.log(names);
    //   });
    return (
      <View>
        <Text style={{ fontSize: 40, textAlign: 'center' }} color="#000">
          {name}
        </Text>
        <Text style={styles.waiting}>Waiting for players...</Text>
        <Button
          style={styles.backBtn}
          title="Go Back to Main Page"
          onPress={this.handleBack.bind(this)}
        />
        <Button title="game test" onPress={() => navigation.navigate('Game')} />
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
  },
  backBtn: {
    paddingBottom: 30
  }
});
