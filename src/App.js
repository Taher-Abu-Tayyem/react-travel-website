import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';

// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      
       
        <Route path='/' element={ 
        <Home/>
        } />
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
