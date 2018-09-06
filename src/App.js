import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import ShoppingList from './ShoppingList';
import Game from './Game';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact={true} path="/" component={Welcome}/> 
          <Route path="/game" component={Game}/> 
          <Route path="/list" component={ShoppingList}/> 
        </Switch>
      </Fragment>
    );
  }
}

export default App;
