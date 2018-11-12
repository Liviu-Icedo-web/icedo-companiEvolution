import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";


import CompaniesList from './containers/companieList';
import reducers from "./reducers";


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
           
              <CompaniesList />
           
        </Provider>
      
      
    );
  }
}

export default App;
