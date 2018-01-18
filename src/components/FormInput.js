import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default props => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} placeholder={props.label} {...props}/>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20
  },
  inputLabel: {
    fontSize: 12,
    color: '#222'
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    fontSize: 24,
    fontWeight: '200',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10
  }
});