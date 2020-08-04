import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Imports
import { Header } from './components/HeaderComponent';
import { Balance } from './components/BalanceComponenet';
import { Summary } from './components/SummaryComponent';
import { List } from './components/listComponents';
import { AddTrail } from './components/AddingComponent';
import { GlobalProvider } from './contex/GlobalState';

function App() {
  return (
    <GlobalProvider childern={
      <div className="container">
        <Header />
        <Balance />
        <Summary />
        <List />
        <AddTrail />
      </div>
    } />
  );
}

export default App;
