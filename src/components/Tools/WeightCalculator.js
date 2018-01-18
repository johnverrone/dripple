import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'd3-format';
import TextFixedWidth from '../TextFixedWidth';
import { Icon } from 'react-native-elements';

export default class WeightCalculator extends Component {
  constructor() {
    super();
    this.state = {
      weight: 33.4
    };
  }

  increaseWeight() {
    this.setState({ weight: Math.round((this.state.weight + 0.1) * 10) / 10 });
  }

  decreaseWeight() {
    this.setState({ weight: Math.round((this.state.weight - 0.1) * 10) / 10 });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.weightButtons}>
          <Icon
            name="angle-up"
            type="font-awesome"
            color="#aaa"
            onPress={() => this.increaseWeight()}
          />
          <TextFixedWidth style={styles.weight}>
            {format('.1f')(this.state.weight)}<Text style={styles.small}>g</Text>
          </TextFixedWidth>
          <Icon
            name="angle-down"
            type="font-awesome"
            color="#aaa"
            onPress={() => this.decreaseWeight()}
          />
        </View>
        <View style={styles.weightButtons}>
          <Text style={[styles.weight, styles.result]}>
            <Text style={styles.small}>x15 </Text>
            {format('.1f')(this.state.weight * 15)}<Text style={styles.small}>g</Text>
          </Text>
          <Text style={[styles.weight, styles.result]}>
            <Text style={styles.small}>x16 </Text>
            {format('.1f')(this.state.weight * 16)}<Text style={styles.small}>g</Text>
          </Text>
          <Text style={[styles.weight, styles.result]}>
            <Text style={styles.small}>x17 </Text>
            {format('.1f')(this.state.weight * 17)}<Text style={styles.small}>g</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  weightButtons: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  weight: {
    fontSize: 48,
    fontWeight: '200'
  },
  result: {
    paddingTop: 10,
    paddingBottom: 10
  },
  small: {
    fontSize: 12,
    fontWeight: '400'
  }
});
