import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import key from '../key';
var giphy = require('giphy-api')(key);

export default class Game extends React.Component {
  static navigationOptions = {
    title: 'Lobby'
  };
  constructor(props) {
    super(props);
    this.handleBack.bind(this);
    this.state = {
      giphySearch: ''
    };
  }
  handleBack() {
    const { navigation } = this.props;
  }
  getGiphy() {
    const { giphySearch } = this.state;
    giphy.search({ q: giphySearch, limit: 1 }).then(res => {
      console.log(res.data[0].url);
    });
  }
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <TextInput
          style={{ height: 80, fontSize: 26 }}
          placeholder="Type your name here"
          onChangeText={giphySearch => this.setState({ giphySearch })}
        />
        <Button onPress={this.getGiphy.bind(this)} />
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
