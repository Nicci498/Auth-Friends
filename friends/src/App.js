import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import LogIn from './components/LoginForm';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <div>
          <h1>Friends!!</h1>
          <Link to="/login">Log In</Link><br/>
          <Link to="/protected">Friends List</Link>
          <Switch>
            <ProtectedRoute path="/friends" component={Friends} />
            <Route path="/login" component={LogIn} />
            <Route component={LogIn} />
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
