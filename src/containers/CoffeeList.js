import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const coffees = [
  {
    description: 'Strong and burnt.',
    name: 'Blonde Roast',
    roaster: 'Starbucks',
    user: 'zrldzSRPJ4VPBtYSXjNpju4J0Jl2'
  },
  {
    description:
      'The Ethiopia Wazzala was carefully roasted for you by Ceremony Coffee Roasters. This fully washed coffee was grown by the various small holder producers in the Yirgacheffe region of Ethiopia between 1,800 - 2,000 meters above sea level. We love this coffee for its nuanced notes of tropical fruits with a great citrus acidity and a juicy body.',
    name: 'Ethiopia Wazzala',
    roaster: 'Ceremony Coffee Roasters',
    user: 'zrldzSRPJ4VPBtYSXjNpju4J0Jl2'
  },
  {
    description: 'Red berry, sweet cocoa, salted caramel.',
    name: 'Peter McKinnon Golden Hour Blend',
    roaster: 'James Coffee Co.',
    user: 'zrldzSRPJ4VPBtYSXjNpju4J0Jl2'
  }
];

export default class CoffeeList extends Component {
  onViewDetail(item) {
    console.log('pressed', item);
    this.props.navigation.navigate('CoffeeDetail', item);
  }

  render() {
    return (
      <SectionList
        sections={[
          {
            title: 'All',
            data: coffees
          }
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
