import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import firebase from '../config/firebase';

export default class CoffeeList extends Component {

  constructor() {
    super();
    this.state = {
      coffees: []
    }
  }

  componentDidMount() {
    const coffeeDb = firebase.database().ref('coffees')
    coffeeDb.on('value', (snapshot) => {
      let coffees = snapshot.val()
      let newState = [];
      for (let coffee in coffees) {
        newState.push({
          id: coffee,
          name: coffees[coffee].name,
          roaster: coffees[coffee].roaster,
          description: coffees[coffee].description
        })
      }
      this.setState({
        coffees: newState
      })
    })
  }

  onViewDetail(item) {
    console.log('pressed', item);
    this.props.navigation.navigate('CoffeeDetail', item);
  }

  render() {
    return (
      <View style={styles.background}>
        <FlatList
          data={this.state.coffees}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={() => this.onViewDetail(item)}>
              {item.name}
            </Text>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20
  },
  sectionHeader: {
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    backgroundColor: 'rgba(247,247,247,1.0)',
    fontWeight: 'bold',
    fontSize: 14
  }
});
