import React from 'react';
import { Button, Image } from 'react-native';
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';
import CoffeeList from '../containers/CoffeeList';
import CoffeeDetail from '../components/CoffeeDetail';
import RecipeList from '../containers/RecipeList';
import NewCoffee from '../components/NewCoffee';
import Timer from '../components/Timer';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Coffees' })],
});

export const CoffeeStack = StackNavigator({
  Coffees: {
    screen: CoffeeList,
    navigationOptions: ({ navigation }) => ({
      title: 'Coffees',
      headerRight: (
        <Button title="New" onPress={() => navigation.navigate('NewCoffee')} />
      )
    })
  },
  CoffeeDetail: {
    screen: CoffeeDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  },
  NewCoffee: {
    screen: NewCoffee,
    navigationOptions: ({navigation}) => ({
      title: 'New Coffee',
      headerRight: <Button title="Done" onPress={() => navigation.dispatch(resetAction)}/>
    })
  }
});

export const RecipeStack = StackNavigator({
  Recipes: {
    screen: RecipeList,
    navigationOptions: {
      title: 'Recipes'
    }
  }
});

export const Tabs = TabNavigator({
  Coffees: {
    screen: CoffeeStack,
    navigationOptions: {
      tabBarLabel: 'Coffees'
    }
  },
  Recipes: {
    screen: RecipeStack
  },
  Timer: {
    screen: Timer
  }
});
