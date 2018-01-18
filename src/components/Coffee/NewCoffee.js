import React, { Component } from 'react';
import {
  Button,
  CameraRoll,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import FormInput from '../FormInput';
import { resetCoffeeStack } from '../../config/router';
import firebase from '../../config/firebase';

export default class NewCoffee extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <Button title="Done" onPress={() => params.handleSave()} />
    };
  };

  constructor() {
    super();
    this.state = {
      name: '',
      roaster: '',
      description: '',
      user: ''
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveCoffee });
  }

  saveCoffee = () => {
    console.log(this.state);
    const coffeeDb = firebase.database().ref('coffees');
    coffeeDb.push(this.state);
    this.props.navigation.dispatch(resetCoffeeStack);
  };

  handleNameChange(name) {
    this.setState({ name });
  }

  handleRoasterChange(roaster) {
    this.setState({ roaster });
  }

  handleDescriptionChange(description) {
    this.setState({ description });
  }

  render() {
    return (
      <View style={styles.background}>
        <FormInput
          label="Name"
          onChangeText={text => this.handleNameChange(text)}
        />
        <FormInput
          label="Roaster"
          onChangeText={text => this.handleRoasterChange(text)}
        />
        <FormInput
          label="Description"
          onChangeText={text => this.handleDescriptionChange(text)}
        />
        <Button
          title="Add Image"
          onPress={() =>
            CameraRoll.getPhotos({
              first: 20
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
