import React from "react";
import Hello from "pages/Hello";
import Navigation from "pages/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
