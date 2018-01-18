import React from 'react';
import { Tabs } from './src/config/router';
import Login from './src/components/Login';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false
    }
  }
  render() {
    return this.state.auth ? <Tabs /> : <Login onSuccess={() => this.setState({auth: true})}/>;
  }
}
