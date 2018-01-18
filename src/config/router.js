import React from 'react';
import { Button, Image } from 'react-native';
import {
  NavigationActions,
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import CoffeeList from '../containers/CoffeeList';
import CoffeeDetail from '../components/Coffee/CoffeeDetail';
import RecipeList from '../containers/RecipeList';
import NewCoffee from '../components/Coffee/NewCoffee';
import ToolsContainer from '../containers/ToolsContainer';

export const resetCoffeeStack = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Coffees' })]
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
    navigationOptions: ({ navigation }) => ({
      title: 'New Coffee'
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
      tabBarLabel: 'Coffees',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="coffee" type="font-awesome" color={tintColor} />
      )
    }
  },
  Recipes: {
    screen: RecipeStack,
    navigationOptions: {
      tabBarLabel: 'Recipes',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book" type="font-awesome" color={tintColor} />
      )
    }
  },
  Timer: {
    screen: ToolsContainer,
    navigationOptions: {
      tabBarLabel: 'Tools',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="tools" type="entypo" color={tintColor} />
      )
    }
  }
});
