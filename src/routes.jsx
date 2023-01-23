import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:login/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
}
