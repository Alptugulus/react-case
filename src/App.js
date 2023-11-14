// src/App.js

import React, { useState } from 'react';
import { MainContext } from './context';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Table from './pages/Table';
import Home from './pages/Home';
import Statictics from './pages/Statictics';
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Footer from './components/Footer';


function App() {
  const [budget, setBudget] = useState([0]);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState(['']);
  const [balance, setBalance] = useState(budget);
  
  const data = {
    budget,
    setBudget,
    expenses, 
    setExpenses,
    expenseName,
    setExpenseName,
    expenseAmount,
    setExpenseAmount,
    expenseDate,
    setExpenseDate,
    balance,
    setBalance
  }

  return (
    <PrimeReactProvider>
    <MainContext.Provider value={data} >
      <NavBar></NavBar>
     <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/table" element={<Table />} />
          <Route path="/chart" element={<Statictics />} />
    </Routes>
    <Footer></Footer>
    </MainContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
