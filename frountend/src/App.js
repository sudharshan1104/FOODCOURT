import React from 'react';
import LoginPage from './pages/LoginPage'
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/hotels" component={Hotels}></Route>
        <Route exact path="/order/:id" component={Orders}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
