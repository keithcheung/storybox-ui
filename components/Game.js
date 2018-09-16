import React from 'react';
import { StyleSheet, Text, View, TextInput, WebView } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import key from '../key';
import ytKey from '../youtubeKey';
import YouTube from 'react-native-youtube';
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
      firebase
        .database()
        .ref('/giphy/')
        .push(res.data[0].url);
    });
  }
  render() {
    const { navigation } = this.props;
    const { giphySearch } = this.state;
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://youtube.com' }} style={styles.web} />

        <TextInput
          style={{ height: 80, fontSize: 26 }}
          placeholder="Type your name here"
          onChangeText={giphySearch => this.setState({ giphySearch })}
        />
        <Button
          title="SEND GIF"
          disabled={!giphySearch}
          onPress={this.getGiphy.bind(this)}
        />
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
  container: {
    flex: 1
  },
  web: {
    flex: 1,
    maxHeight: 600
  }
});
