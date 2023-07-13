import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebar.js';
import Dashboard from '../Pages/Dashboard.js';
import About from '../Pages/About.js';

import Candidate from '../Pages/Candidate.js';
import Voter from '../Pages/Voter.js';
import '../sidebar.css';
import HomePage from '../components/homepage.js';
function AdminHome(){
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/votes" element={<About />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/voter" element={<Voter />} />
          
          
          
      
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default AdminHome;