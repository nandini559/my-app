import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Index from '.';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="home/" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;
