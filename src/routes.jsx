import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/projects';
import Resume from './pages/resume';

function Rutas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    )
}

export default Rutas;
