import React from 'react';
import fire from './firebase.js';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Register from './components/Register.js';
import Main from './components/Main.js';
import Profile from './components/Profile.js';

function App() {


  return (
    <main>
      <Switch>
        {/* Users can login and register in Landing. */}
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </main>
  );

}

export default App;
