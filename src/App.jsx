import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Projects from './pages/Projects';
import Users from './pages/People';
import UserDetails from './pages/UserDetails';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/films/*" element={<Films />}/>
        <Route path="/projects/*" element={<Projects />}/>
        <Route path="/people/*" element={<Users />}/>
        <Route path="/users/:userid/*" element={<UserDetails />}/>
        
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;