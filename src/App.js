import React from 'react';
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BusinessList from './components/BusinessList';
import CustomerLogin from './components/auth/customers/CustomerLogin';
import CustomerRegistration from './components/auth/customers/CustomerRegistration';
import BusinessLogin from './components/auth/bussiness_users/BusinessLogin';
import BusinessRegister from './components/auth/bussiness_users/BusinessRegister';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/business-list" component={BusinessList} />
        <Route path="/customer/login" component={CustomerLogin} />
        <Route path="/business/login" component={BusinessLogin} />
        <Route path="/customer/register" component={CustomerRegistration} />
        <Route path="/business/register" component={BusinessRegister} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
