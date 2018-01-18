import React, { Component } from 'react';
import { Button, Text, StyleSheet, View, TextInput } from 'react-native';
import TextFixedWidth from '../TextFixedWidth';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0 };
    this.incrementer = null;
  }

  formatElapsed(ms) {
    return Math.floor(ms / 60 / 100) + ':' + ('0' + Math.floor(ms / 10)).slice(-2);
  }

  startTimer() {
    let startTime = new Date().getTime();

    this.incrementer = setInterval(() => {
        elapsed = (new Date().getTime() - startTime) / 100;
        this.setState({
          elapsed: elapsed
        })
      }, 100);
  }

  stopTimer() {
    clearInterval(this.incrementer);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({elapsed: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextFixedWidth style={styles.timer}>
          {this.formatElapsed(this.state.elapsed)}
        </TextFixedWidth>
        <Button title="Start" onPress={() => this.startTimer()} />
        <Button title="Stop" onPress={() => this.stopTimer()} />
        <Button title="Reset" onPress={() => this.resetTimer()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    fontSize: 96,
    fontWeight: '100',
    fontFamily: 'Helvetica Neue'
  }
});
