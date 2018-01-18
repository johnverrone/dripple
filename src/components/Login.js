import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import firebase, { auth, provider } from '../config/firebase';

export default class Login extends Component {
  
  login() {
    console.log('login');
    const email = 'john.verrone@gmail.com';
    const password = 'opas';
    auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user
        this.setState({user})
      })
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
