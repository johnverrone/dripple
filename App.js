import React from 'react';
import { Tabs } from './src/config/router';
import Login from './src/components/Login';

export default class App extends React.Component {
  render() {
    let auth = false;
    return auth ? <Tabs /> : <Login />;
  }
}
