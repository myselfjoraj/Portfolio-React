import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import App from './App';

const Main = () => {
  return (
    <Routes>
      {/* The Routes decides which component to show based on the current URL. */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
};

export default Main;
