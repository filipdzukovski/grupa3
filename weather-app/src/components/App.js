import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Cities } from './Cities';
import { Nav } from './Nav';
import { Weather } from './Weather';


export function App(){

  return(
    <div id="app">
      <Nav/>
      {/* <main> */}
        <Switch>
          <Redirect exact from='/' to="/search-cities" />
          <Route path="/search-cities" component={Cities}/>
          <Route path="/local-weather" component={Weather}/>
        </Switch>
      {/* </main> */}
    </div>
  )
}