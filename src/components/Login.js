import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import firebase, { auth, provider } from '../config/firebase';
import { Facebook } from 'expo';

export default class Login extends Component {

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('284036555414767', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.props.onSuccess();
    }
  }

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
          <Button title='Login' onPress={() => this.logIn()} />
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
