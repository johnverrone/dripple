import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from '../components/Tools/Timer';
import WeightCalculator from '../components/Tools/WeightCalculator';

export default () => (
  <View style={styles.container}>
    <Timer />
    <WeightCalculator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
