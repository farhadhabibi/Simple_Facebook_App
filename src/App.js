import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { NavbarProvider } from './contexts/NavbarContext'
import Home from './Home';
import Watch from './Watch';
import Groups from './Groups';
import Gaming from './Gaming';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watch/ref=tab' element={<Watch />}></Route>
        <Route path='/groups/feed/' element={<Groups />}></Route>
        <Route path='/gaming/feed/' element={<Gaming />}></Route>
      </Routes>
    </div>
  );
}

export default App;
