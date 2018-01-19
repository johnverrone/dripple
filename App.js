import React from 'react';
import { Tabs } from './src/config/router';
import Login from './src/components/Login';
import { AccessToken } from 'react-native-fbsdk';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }

  componentDidMount() {
    AccessToken.getCurrentAccessToken().then(data =>
      this.setState({ token: data.accessToken.toString() })
    );
  }

  onSuccess(token) {
    this.setState({ token });
  }

  render() {
    return this.state.token ? (
      <Tabs />
    ) : (
      <Login onSuccess={token => this.onSuccess(token)} />
    );
  }
}
