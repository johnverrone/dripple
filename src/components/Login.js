import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import firebase, { auth, provider } from '../config/firebase';
import { AccessToken, LoginButton } from 'react-native-fbsdk';

export default class Login extends Component {
  onLogin = (error, result) => {
    if (error) {
      alert('Login failed with error: ' + result.error);
    } else if (result.isCancelled) {
      alert('Login was cancelled');
    } else {
      AccessToken.getCurrentAccessToken().then(data =>
        this.props.onSuccess(data.accessToken.toString())
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image
            source={require('../assets/chemex.jpg')}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.titleContainer}>
          <LoginButton
            onLoginFinished={this.onLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000',
    fontSize: 20
  },
  titleContainer: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
    width: '100%'
  }
});
