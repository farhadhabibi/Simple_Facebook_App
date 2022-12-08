import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { NavbarProvider } from './contexts/NavbarContext'
import { AllMethodsProvider } from './contexts/AllMethodsContext';
import Home from './Home';
import Watch from './Watch';
import Groups from './Groups';
import Gaming from './Gaming';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
      <AllMethodsProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/watch/ref=tab' element={<LoginPage />}></Route>
          <Route path='/groups/feed/' element={<SignUpPage />}></Route>
          <Route path='/gaming/feed/' element={<Gaming />}></Route>
        </Routes>
      </AllMethodsProvider>
    </div>
  );
}

export default App;
