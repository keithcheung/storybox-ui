import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-elements';
import firebase from 'firebase';

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
    return (
      <View style={styles.container}>
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
    paddingTop: 30,
    paddingBottom: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
