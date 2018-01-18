import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

export default class RecipeList extends Component {
  onViewDetail(item) {
    console.log('pressed', item);
    this.props.navigation.navigate('CoffeeDetail', item);
  }

  render() {
    return (
      <SectionList
        style={styles.background}
        sections={[
          {
            title: 'Chemex',
            data: [
              { name: 'Ethiopian Coffee 1' },
              { name: 'Ethiopian Coffee 2' }
            ]
          },
          { title: 'V60', data: [{ name: 'Kenyan Coffee 1' }] }
        ]}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => this.onViewDetail(item)}>
            {item.name}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
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
