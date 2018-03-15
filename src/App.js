import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'

import Apod from './Apod'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Apod} />
          <Route exact path="/date/:date" component={Apod} />
        </Switch>
      </div>
    );
  }
}

export default App;
