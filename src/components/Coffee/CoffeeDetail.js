import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default props => {
  const { name, description, roaster } = props.navigation.state.params;

  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/icon-512.png')} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.roaster}>{roaster}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  description: {
    padding: 20,
    fontSize: 16
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    marginTop: 20
  },
  name: {
    fontSize: 42,
    fontWeight: '100',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  roaster: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18
  }
});
