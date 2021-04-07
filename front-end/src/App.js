import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
