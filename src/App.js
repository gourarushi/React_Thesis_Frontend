import './App.css';
import React from "react";
import Home from './Home';
import Reading from './Reading';
import Survey1 from './Survey1';
import Video from './Video';
import Survey2 from './Survey2';
import Resting from './Resting';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/survey1" element={<Survey1 />} />
        <Route path="/video" element={<Video />} />
        <Route path="/survey2" element={<Survey2 />} />
        <Route path="/resting" element={<Resting />} />
      </Routes>
    </Router>
  );
}

export default App;
