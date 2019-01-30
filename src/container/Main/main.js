import React, { Component } from 'react'
import Home from '../Home/Home';
import Bank from '../../component/Bank/Bank';
import {Switch,Route,} from 'react-router-dom';

class main extends Component {
  render() {
    return (
      <div>
           

        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Bank" component={Bank}/>
        </Switch>
           
      </div>
    )
  }
}


export default main;