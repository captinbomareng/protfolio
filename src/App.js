import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/index'

function App() {
  return (
    <Router>      
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}  />
          </Switch>
    </Router>
  )
}

export default App;
