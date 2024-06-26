import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LearnMoreHeroSection from './components/LearnMoreHeroSection';

function App() {
  return (    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/learn-more" element={<LearnMoreHeroSection />} />  
      </Routes>
    </Router>
  )  
}

export default App;