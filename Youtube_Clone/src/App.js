import React, { Component } from 'react';
import Home from './containers/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';
import WatchVideo from './containers/WatchVideo/WatchVideo';
import AddNewVideo from './containers/AddNewVideo/AddNewVideo';
export default class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path='/watch' component={WatchVideo} />
          <Route path='/addNew' component={AddNewVideo} />
          <Route path='/' component={WatchVideo} />
        </Switch>
      </AppLayout>
    );
  }
}
