import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default () => (
  <View style={styles.background}>
    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={() => {}}/>
  </View>
)

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#fff'
  }
})